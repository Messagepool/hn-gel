const colors = {};
const colorPresets = [
  'brand',
  'primary',
  'secondary',
  'ui',
  'decorative',
  'tint',
  'light',
  'alertinteractive',
  'alertinfo',
  'alertsuccess',
  'alertcritical',
];

const fontFamily = {
  avenir: 'avenir',
  'lato-regular': 'lato-regular',
  'lato-bold': 'lato-bold',
};

const fontSize = {
  xs: ['var(--fontsize-xs)', { lineHeight: 'var(--fontsize-lineheight-xs)' }],
  sm: ['var(--fontsize-sm)', { lineHeight: 'var(--fontsize-lineheight-sm)' }],
  base: [
    'var(--fontsize-base)',
    { lineHeight: 'var(--fontsize-lineheight-base)' },
  ],
  lg: ['var(--fontsize-lg)', { lineHeight: 'var(--fontsize-lineheight-lg)' }],
};

colorPresets.forEach((preset) => {
  colors[preset] = {
    DEFAULT: `var(--color-${preset})`,
  };
  for (let i = 100; i <= 900; i += 100) {
    colors[preset][i] = `var(--color-${preset}-${i})`;
  }
});

module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'class'
    })
  ]
};
