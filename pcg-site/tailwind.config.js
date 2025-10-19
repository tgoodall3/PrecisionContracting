export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#2AA7FF',
          navy: '#0A1B2A',
          indigo: '#0B2552',
          midnight: '#051225',
          cobalt: '#123A63',
          sky: '#6BD6FF',
          mint: '#7FE7C4',
          sand: '#F5F7FB',
          white: '#FFFFFF',
          gray: '#E5EAF0'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif']
      },
      boxShadow: {
        brand: '0 20px 45px rgba(10, 27, 42, 0.16)',
        'brand-soft': '0 16px 35px rgba(18, 58, 99, 0.12)'
      },
      backgroundImage: {
        'radial-spotlight': 'radial-gradient(circle at 20% 20%, rgba(107, 214, 255, 0.3), transparent 60%)',
        'hero-diagonal': 'linear-gradient(135deg, rgba(10, 27, 42, 0.95), rgba(42, 167, 255, 0.65))'
      }
    }
  },
  plugins: []
};
