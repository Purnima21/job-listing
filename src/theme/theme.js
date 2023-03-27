import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";
// 2. Update the breakpoints as key-value pairs
const breakpoints = createBreakpoints({
  sm: "320px",
  md: "768px",
  lg: "960px",
  xl: "1200px",
});

export const theme = extendTheme({
  breakpoints,
  colors: {
    brand: {
      100: "hsl(180, 52%, 96%)",
      200: "hsl(180, 31%, 95%)",
      300: "hsl(180, 8%, 52%)",
      400: "hsl(180, 14%, 20%)",
      500: "hsl(180, 14%, 20%)",
    },
    primary: {
      100: "hsl(180, 29%, 50%)",
      200: "hsl(180, 29%, 50%)",
      300: "hsl(180, 29%, 50%)",
      400: "hsl(180, 29%, 50%)",
      500: "hsl(180, 29%, 50%)",
      600: "hsl(180, 29%, 50%)",
    },
    dark: {
      100: "#2B3939",
      200: "#2B3939",
      300: "#2B3939",
      400: "#2B3939",
      500: "#2B3939",
      600: "#2B3939",
      700: "#2B3939",
    },
    white: {
      100: "#FFFFFF",
    },
  },
});
