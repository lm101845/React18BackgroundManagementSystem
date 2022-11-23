import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import styleImport,{AntdResolve} from 'vite-plugin-style-import'
import * as path from 'path'
// pnpm i @types/node安装一下声明依赖,否则它不认识


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
      react(),
      styleImport({
        resolves:[
            AntdResolve()
        ]
      })
  ],
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src')
    }
  }
})
