export const colors = {
  primary: '#3688f3',
  secondary: '#ff4876',
  neutral: '#647a89',
};

const theme = {
  borderRadius: '3px',
  colors,
};

export default theme;

export type Color = keyof typeof colors;
export type Theme = typeof theme;
