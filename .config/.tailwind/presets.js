const colors = {};
const colorPresets = [
  'brand',
  'primary',
  'secondary',
  'ui',
  'decorative',
  'tint',
  'light',
  'interactive',
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
    '50': `var(--color-${preset}-50)`,
  };
  
  for (let i = 100; i <= 900; i += 100) {
    colors[preset][i] = `var(--color-${preset}-${i})`;
  }
});

const spacing = {
  '2xs':'4px',
  xs:'8px',
  sm:'16px',
  md:'24px',
  lg:'32px',
  xl:'48px'
}

const screens = {
  'xs' : { 'min': '0px', 'max': '639px' },
  'sm' : { 'min': '640px', 'max': '767px' },
  'md' : { 'min': '768px', 'max': '1023px' },
  'lg' : '1024px'
};

module.exports = {
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      screens,
      spacing
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ]
};
