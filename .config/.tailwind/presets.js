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

const screens = {
  'xs' : { 'min': '0px', 'max': '639px' },
  'sm' : { 'min': '640px', 'max': '767px' },
  'md' : { 'min': '768px', 'max':  '1023px' },
  'lg' : { 'min': '1024px', 'max': '1279px' },
  'xl' : { 'min': '1280px', 'max': '1535px' },
  '2xl' : { 'min': '1536px' }
};

module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      screens
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
