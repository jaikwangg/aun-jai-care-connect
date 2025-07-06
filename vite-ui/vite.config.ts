import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
export default defineConfig(({ command }) => ({
  plugins: [react()],
  base: command === 'build' ? '/aun-jai-care-connect/' : '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // <--- ใส่ alias ให้ตรง
    },
  },
}))
