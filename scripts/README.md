# Fetch documents from .onion via Tor

To download the PDFs from the onion files server you need **Tor running** on your machine.

## 1. Install / run Tor

- **Option A:** Install [Tor Browser](https://www.torproject.org/download/) and leave it open (it runs a SOCKS proxy).
- **Option B:** Install [Tor Expert Bundle](https://www.torproject.org/download/tor/) and run `tor` so the SOCKS proxy is listening.

## 2. Port

- **Tor daemon / Expert Bundle:** default SOCKS5 port is **9050**.
- **Tor Browser:** SOCKS5 port is usually **9150**.

If you use Tor Browser, set the port before running the script:

```bash
# Windows (PowerShell)
$env:TOR_PORT=9150; pnpm run fetch-docs

# Windows (CMD)
set TOR_PORT=9150 && pnpm run fetch-docs

# Linux / macOS
TOR_PORT=9150 pnpm run fetch-docs
```

## 3. Run the script

```bash
pnpm run fetch-docs
```

Files are saved to `public/documents/`. The Document Vault on the site will link to them (e.g. `/documents/EFTA00009116.pdf`).
