import 'styled-components';

const colors = {
  primary: '#FFDD0D',
  complementary: '#4A90E2',
  secondary: '#DC4B5D',
  textDark: '#2C2605',
  text: '#4F565D',
  textExtraLight: '#FFF',
};

const fontFamily = 'Roboto';

const theme = {
  backgroundColor: colors.primary,
  colors,
  fontFamily,
};

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export default theme;
