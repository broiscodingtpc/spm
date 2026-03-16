/**
 * Download documents from the .onion files server via Tor.
 *
 * REQUIREMENTS:
 * - Tor must be running (e.g. Tor Browser or Tor Expert Bundle).
 * - Default SOCKS5 port: 127.0.0.1:9050 (Tor Browser often uses 9150).
 *
 * Usage: node scripts/fetch-onion-docs.mjs
 * Or:    TOR_PORT=9150 node scripts/fetch-onion-docs.mjs
 */

import http from 'http';
import https from 'https';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { SocksProxyAgent } from 'socks-proxy-agent';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const TOR_HOST = '127.0.0.1';
const TOR_PORT = Number(process.env.TOR_PORT) || 9050;
const ONION_BASE = 'http://epsteincofr3ahalq3pcr5t3wccnu4nmqw6x26vb4o3fxcr2s5dbxsid.onion/files';
const OUT_DIR = path.join(__dirname, '..', 'public', 'documents');

const DOCUMENT_IDS = [
  'EFTA00009116',
  'EFTA00009422',
  'EFTA00010107',
  'EFTA00011234',
  'EFTA00011890',
  'EFTA00012456',
  'EFTA00013002',
  'EFTA00014567',
  'EFTA00015233',
  'EFTA00016890',
  'EFTA00017544',
  'EFTA00018201',
];

function ensureDir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

function downloadOne(url, destPath) {
  return new Promise((resolve, reject) => {
    const agent = new SocksProxyAgent(`socks5h://${TOR_HOST}:${TOR_PORT}`);
    const protocol = url.startsWith('https') ? https : http;
    const req = protocol.get(url, { agent }, (res) => {
      if (res.statusCode === 302 || res.statusCode === 301) {
        const loc = res.headers.location;
        if (loc) return downloadOne(loc, destPath).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        reject(new Error(`HTTP ${res.statusCode} for ${url}`));
        return;
      }
      const file = fs.createWriteStream(destPath);
      res.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(destPath);
      });
      file.on('error', (err) => {
        fs.unlink(destPath, () => {});
        reject(err);
      });
    });
    req.on('error', reject);
    req.setTimeout(60000, () => {
      req.destroy();
      reject(new Error('Timeout'));
    });
  });
}

async function main() {
  ensureDir(OUT_DIR);
  console.log(`Tor proxy: socks5h://${TOR_HOST}:${TOR_PORT}`);
  console.log(`Output: ${OUT_DIR}`);
  console.log('');

  for (const id of DOCUMENT_IDS) {
    const filename = `${id}.pdf`;
    const url = `${ONION_BASE}/${filename}`;
    const destPath = path.join(OUT_DIR, filename);
    process.stdout.write(`Fetching ${filename} ... `);
    try {
      await downloadOne(url, destPath);
      console.log('OK');
    } catch (err) {
      console.log('FAIL:', err.message);
    }
  }

  console.log('\nDone.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
