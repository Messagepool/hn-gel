/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    extend: {
      fontSize: {
        xs: [
          'var(--fontsize-xs)',
          { lineHeight: 'var(--fontsize-lineheight-xs)' },
        ],
        sm: [
          'var(--fontsize-sm)',
          { lineHeight: 'var(--fontsize-lineheight-sm)' },
        ],
        base: [
          'var(--fontsize-base)',
          { lineHeight: 'var(--fontsize-lineheight-base)' },
        ],
        lg: [
          'var(--fontsize-lg)',
          { lineHeight: 'var(--fontsize-lineheight-lg)' },
        ],
      }
    },
  },
  plugins: [],
};
