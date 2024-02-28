const sizes = {
  xsmall: 375,
  small: 450,
  medium: 768,
  large: 1280,
  xlarge: 1600,
};

const windowSize = {
  xsmall: `screen and (max-width: ${sizes.xsmall}px)`,
  small: `screen and (max-width: ${sizes.small}px)`,
  medium: `screen and (max-width: ${sizes.medium}px)`,
  large: `screen and (min-width: ${sizes.medium + 1}px)`,
  // large: "screen and (max-width: 1024px)",
  // xlarge: "screen and (max-width: 1280px)",
  // txlarge: "screen and (max-width: 1600px)",
  // full: "screen and (min-width: 1601px)",
};

const fontSize = {
  xs: "12px",
  sm: "14px",
  base: "16px",
  md: "18px",
  lg: "20px",
};

const color = {
  primary_light: "#fff9eb",
  primary_normal: "#7b5339",
  secondary_light: "#BEAA9E",
};

const theme = {
  windowSize,
  fontSize,
  color,
};
export type Theme = typeof theme;

export default theme;
