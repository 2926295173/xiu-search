// vite.config.js

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
    //define:{
   //     "process.env.BASE_URL":""
   // },
    plugins: [vue()],


    resolve: {
        
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },



})

