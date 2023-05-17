/** @type {import('tailwindcss').Config} */

import forms from '@tailwindcss/forms'

export default {
  content: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    forms({
      strategy: 'base',
    })
  ],
}
