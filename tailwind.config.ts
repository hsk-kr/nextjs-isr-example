import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        rotation: {
          '0%': { rotate: '0deg' },
          '100%': { rotate: '360deg' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'infinite-rotate': 'rotation 10s linear infinite',
        fadein: 'fadeIn 2s ease-in forwards',
      },
    },
  },
  plugins: [],
};
export default config;
