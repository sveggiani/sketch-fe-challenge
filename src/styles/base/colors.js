//
//   The color names are defined using the methodology proposed by David Walsh
//   in its article: https://davidwalsh.name/sass-color-variables-dont-suck.
//
//   Color variables are defined using rgba() allowing to use SASS color
//   operations as transparentize, lighten, desaturate, etc.
//
//   source: https://davidwalsh.name/sass-color-variables-dont-suck
//   tool: Name that color, http://chir.ag/projects/name-that-color

const baseColors = {
  alabaster: '#F7F7F7',
  black: '#000000',
  black15p: 'rgba(0, 0, 0, 0.15)',
  codGray: '#111111',
  white: '#FFFFFF',
};

const theme = {
  background: baseColors.alabaster,
  primary: null,
  shadow: baseColors.black15p,
  text: baseColors.codGray,
};

export { baseColors, theme };
