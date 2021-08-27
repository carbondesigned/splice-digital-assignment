import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#81bc00",
    secondary: "#3f6aa7",
    tertiary: "#56BFE9",
    dark: "#333333",
    darkAlt: "#575b5d",
    primGradient: "linear-gradient(145deg, #0cafdf 0%, #4fb483 100%)",
    secGradient: "linear-gradient(90deg, #2668b2 0%, #253c83 100%)",
    tertGradient: "linear-gradient(90deg, #213e7c 0%, #36ae8f 100%)",
  },
  fonts: {
    title: "clamp(2.25em, 3vw, 6em)",
    paragraph: "clamp(1.225em, 3vw, 2.525em)",
    smTitle: "clamp(1.425em, 3vw, 4.85em)",
    smParagraph: "clamp(1.125em, 3vw, 1.725em)",
    lgParagraph: "clamp(1.625em, 4vw, 2.725em)",
    xlgParagraph: "clamp(2.325em, 4vw, 3.425em)",
    lgTitle: "clamp(3.25em, 5vw, 4.825em)",
    xlgTitle: "clamp(5.25em, 6vw, 10.125em)",
    links: "clamp(0.75em, 3vw, 1.35em)",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}> {children} </ThemeProvider>
);

export default Theme;
