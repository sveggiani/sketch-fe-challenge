export const baseBreakpoints = {
  xSmall: 320,
  small: 640,
  medium: 768,
  large: 1024,
  xLarge: 1440,
};

const breakpoints = {
  // to be used with max-width
  xSmallMax: baseBreakpoints.xSmall - 1,
  smallMax: baseBreakpoints.small - 1,
  mediumMax: baseBreakpoints.medium - 1,
  largeMax: baseBreakpoints.large - 1,
  xLargeMax: baseBreakpoints.xLarge - 1,

  // to be used with min-width (preferred over max-width)
  ...baseBreakpoints,
};

export default breakpoints;
