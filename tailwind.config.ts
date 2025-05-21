import type { Config } from 'tailwindcss';

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: '#2A7BFF',
        secondary: '#BFBFC3',
        background: '#F9FAFB',
        foreground: '#111827',
        success: '#22C55E',
        warning: '#FACC15',
        danger: '#EF4444',
      },
    },
  },
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};

export default config;
