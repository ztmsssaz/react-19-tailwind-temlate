import type { Config } from 'tailwindcss'
export default {
   content: ['./src/**/*.{html,js,tsx,ts}'],
   theme: {
      container: {
         center: true, // enables mx-auto by default for .container
         screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
            '2xl': '1400px',
         },
      },
      fontFamily: {
         sans: ['Poppins', 'ui-sans-serif', 'system-ui'], // default for body text
      },

      extend: {
         spacing: {
            1: '1px',
            2: '2px',
            3: '3px',
            4: '4px',
            5: '5px',
            6: '6px',
            7: '7px',
            8: '8px',
            9: '9px',
            10: '10px',
            11: '11px',
            12: '12px',
            13: '13px',
            14: '14px',
            15: '15px',
            16: '16px',
            17: '17px',
            18: '18px',
            19: '19px',
            20: '20px',
         },
         borderRadius: {
            10: '10px',
            12: '12px',
            15: '15px',
            18: '18px',
            20: '20px',
         },
      },
   },
   plugins: [],
} satisfies Config
