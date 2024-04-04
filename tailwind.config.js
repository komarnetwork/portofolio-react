/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Nunito',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#1561b8',
      },
      backgroundImage: {
        site: "url('./assets/site-bg-new.jpg')",
        about: "url('./assets/MyProfile.png')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
}
