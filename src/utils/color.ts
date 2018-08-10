import * as Color from 'color';

export const darken = (color: string, amount: number) => {
  return Color(color)
    .darken(amount)
    .string();
};

export const fade = (color: string, amount: number) => {
  return Color(color)
    .fade(amount)
    .string();
};
