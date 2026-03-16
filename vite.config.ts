import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath } from 'url'
import fs from 'node:fs'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

function movMimePlugin() {
  return {
    name: 'mov-mime-type',
    enforce: 'pre' as const,
    configureServer(server: {
      config: { root: string }
      middlewares: { use: (fn: (req: unknown, res: unknown, next: () => void) => void) => void }
    }) {
      server.middlewares.use((req: unknown, res: unknown, next: () => void) => {
        const url = (req as { url?: string }).url ?? ''
        const match = url.match(/^\/episodes\/(.+)\.(mov|MOV)$/)
        if (match) {
          const root = server.config.root
          const filePath = path.join(root, 'public', 'episodes', `${match[1]}.${match[2]}`)
          if (fs.existsSync(filePath)) {
            ;(res as { setHeader: (n: string, v: string) => void }).setHeader('Content-Type', 'video/quicktime')
            fs.createReadStream(filePath).pipe(res as NodeJS.WritableStream)
            return
          }
        }
        next()
      })
    },
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    movMimePlugin(),
  ] as import('vite').Plugin[],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
})
