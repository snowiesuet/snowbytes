import { hex2rgba } from '@utils';

//light
const LIGHT_ACCENT = '#823350';
const LIGHTER_BG = '#ffffff';
const DARKER_BG = '#000000';
const DARK_ACCENT = '#CDCA7E';
const DARK_BG = '#0B0011';
const LIGHT_BG = '#ffffff';
const theme = {
  dark_colors: {
    darkNavy: DARKER_BG,
    navy: DARK_BG,
    lightNavy: '#574063',
    lightestNavy: '#303C55',
    slate: '#d9d4e3',
    lightSlate: '#D9D4E3',
    lightestSlate: '#FCFAFC',
    white: '#e6f1ff',
    green: DARK_ACCENT,
    transGreen: hex2rgba(DARK_ACCENT, 0.07),
    shadowNavy: hex2rgba(DARK_BG, 0.7),
  },
  light_colors: {
    darkNavy: LIGHT_BG,
    navy: LIGHTER_BG,
    lightNavy: '#D6CADD',
    lightestNavy: '#303C55',
    slate: '#796878',
    lightSlate: '#808085',
    lightestSlate: '#8D6497',
    white: '#e6f1ff',
    green: LIGHT_ACCENT,
    transGreen: hex2rgba(LIGHT_ACCENT, 0.07),
    shadowNavy: hex2rgba(LIGHT_BG, 0.7),
  },

  colors: {
    darkNavy: LIGHT_BG,
    navy: LIGHTER_BG,
    lightNavy: '#D6CADD',
    lightestNavy: '#303C55',
    slate: '#796878',
    lightSlate: '#808085',
    lightestSlate: '#8D6497',
    white: '#e6f1ff',
    green: LIGHT_ACCENT,
    transGreen: hex2rgba(LIGHT_ACCENT, 0.07),
    shadowNavy: hex2rgba(LIGHT_BG, 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

const lightTheme = {
  body: '#E2E2E2',
  text: '#363537',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
};

const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
};

export { theme, lightTheme, darkTheme };
