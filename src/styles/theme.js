import { hex2rgba } from '@utils';

//light
const LIGHTER_BG = '#ffffff';
const DARKER_BG = '#000000';
const DARK_BG = '#0B0011';
const LIGHT_BG = '#ffffff';
const LIGHT_ACCENT = '#823350';
const DARK_ACCENT = '#CDCA7E';

const theme = {
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
  primary: '#FCFAFC',
  secondary: '#796878',
  toggleBorder: '#FFF',
  gradient: 'linear-gradient(#39598A, #79D7ED)',
  slate: '#796878',
  accent: '#823350',
  lightPrimary: '#303C55',
  lightestPrimary: '#574063',
  transAccent: hex2rgba(LIGHT_ACCENT, 0.07),
  shadowPrimary: hex2rgba(LIGHT_BG, 0.7),
  strongPrimary: LIGHTER_BG,
  lightSlate: '#808085',
  lightestSlate: '#8D6497',
};

const darkTheme = {
  primary: '#0B0011',
  secondary: '#d9d4e3',
  toggleBorder: '#6B8096',
  gradient: 'linear-gradient(#091236, #1E215D)',
  slate: '#d9d4e3',
  accent: '#CDCA7E',
  lightPrimary: '#574063',
  lightestPrimary: '#303C55',
  transAccent: hex2rgba(DARK_ACCENT, 0.07),
  shadowPrimary: hex2rgba(DARK_BG, 0.7),
  strongPrimary: DARKER_BG,
  lightSlate: '#D9D4E3',
  lightestSlate: '#FCFAFC',
};

export { theme, lightTheme, darkTheme };
