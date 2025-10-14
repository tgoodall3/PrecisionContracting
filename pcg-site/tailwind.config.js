export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2AA7FF',
          navy: '#0A1B2A',
          white: '#FFFFFF',
          gray: '#E5EAF0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        brand: '0 12px 35px rgba(10, 27, 42, 0.14)'
      }
    }
  },
  plugins: []
};
