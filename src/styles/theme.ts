import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import styles from "./globals";
import { Inter } from "next/font/google";


const config : ThemeConfig = {
    initialColorMode : "light",
    useSystemColorMode : false
}

const breakPoints = {
    sm : "30em",
    md : "48em",
    lg : "65em",
    xl : "80em",
    "2xl" : "96em",
}

const interDisplay = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter-display",
});

const customTheme = extendTheme({
    config,
    fonts : {
          heading: interDisplay.style.fontFamily,
          body: interDisplay.style.fontFamily,
    },

    breakPoints,
    styles,
    components : {}
})

export default customTheme;

