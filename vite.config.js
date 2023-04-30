import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // server:{
  //   proxy:{
  //     "/data":"https://todoapi-r2ra.onrender.com"
  //   }
  // },
  plugins: [react()],
  base:"/Todo_List-MERN/"
})
