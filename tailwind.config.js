/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <-- Garante que ele leia TODOS os arquivos necessários
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}