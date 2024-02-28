const windowSize = {
  xsmall: "screen and (max-width: 375px)",
  small: "screen and (max-width: 450px)",
  medium: "screen and (max-width: 768px)",
  large: "screen and (min-width: 769px)",
  // large: "screen and (max-width: 1024px)",
  // xlarge: "screen and (max-width: 1280px)",
  // txlarge: "screen and (max-width: 1600px)",
  // full: "screen and (min-width: 1601px)",
  // xlarge: "screen and (min-width: 1024px)",
  // txlarge: "screen and (min-width: 1280px)",
  // full: "screen and (max-width: 1281px)",
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
