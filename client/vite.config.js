import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import vitePluginImp from 'vite-plugin-imp';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd', // Name of the library you want to import
          style: (name) => `antd/es/${name}/style`, // Import styles from ES modules
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@ant-design/icons': resolve(__dirname, './node_modules/antd/es/icons'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: {
          // Aquí puedes añadir tus variables de personalización
          'primary-color': '#5A54F9',     // Color primario
          '@border-radius-base': '10px',  // Bordes de ventana
          '@info-color': '#1890ff',       // Color de info
          '@warning-color': '#faad14',    // Color de advertencia
          '@success-color': '#52c41a',    // Color de éxito
          '@error-color': '#f5222d',      // Color de error
          '@font-size-base': '14px', // Tamaño de fuente base
          // '@heading-color': 'rgba(0, 0, 0, 0.85)', // Color de encabezado
          // '@text-color': 'rgba(0, 0, 0, 0.65)', // Color de texto
          // '@text-color-secondary': 'rgba(0, 0, 0, 0.45)', // Color de texto secundario
          // '@disabled-color': 'rgba(0, 0, 0, 0.25)', // Color deshabilitado
          // '@border-color-base': '#d9d9d9', // Color de borde base
          // '@box-shadow-base': '0 3px 6px rgba(0, 0, 0, 0.16)', // Sombra de caja base
        },
      },
    },
  },
})
