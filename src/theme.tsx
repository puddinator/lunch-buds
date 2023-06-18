import { extendTheme } from "native-base";

export const theme = extendTheme({
  colors: {
    // Primary is pink

    primary: {
      50: "#eefbe5",
      100: "#d5f0c0",
      200: "#bbe699",
      300: "#a1dc71",
      400: "#87d24a",
      500: "#6db830",
      600: "#548f25",
      700: "#3c6619",
      800: "#233d0d",
      900: "#081500",
    },
    // Secondary is blue
    secondary: {
      50: "#e1f5ff",
      100: "#bfdcf2",
      200: "#9ac2e4",
      300: "#74aad7",
      400: "#4f92ca",
      500: "#3578b0",
      600: "#265e8a",
      700: "#194364",
      800: "#09283f",
      900: "#000e1c",
    },
    // Tertiary is orange
    tertiary: {
      50: "#ffe8de",
      100: "#ffc0b0",
      200: "#ff987e",
      300: "#ff704c",
      400: "#ff481a",
      500: "#e62f00",
      600: "#b42300",
      700: "#811800",
      800: "#500c00",
      900: "#210100",
    },
  },
  fontConfig: {
    minecraft: {
      100: {
        normal: "vcr",
      },
      200: {
        normal: "vcr",
      },
      300: {
        normal: "vcr",
      },
      400: {
        normal: "minecraft",
        italics: "minecraft-italic",
      },
      500: {
        normal: "minecraft",
        italics: "minecraft-italic",
      },
      600: {
        normal: "minecraft",
        italics: "minecraft-italic",
      },
      700: {
        normal: "minecraft-bold",
        italics: "minecraft-bold-italic",
      },
      800: {
        normal: "minecraft-bold",
        italics: "minecraft-bold-italic",
      },
      900: {
        normal: "minecraft-bold",
        italics: "minecraft-bold-italic",
      },
    },
  },
  fonts: {
    heading: "minecraft",
    body: "minecraft",
    mono: "minecraft",
  },
});
