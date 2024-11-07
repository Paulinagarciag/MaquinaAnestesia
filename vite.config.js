import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/MaquinaAnestesia/',  // Reemplaza 'tu-repo' con el nombre de tu repositorio
  plugins: [react()],
});
