import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#2AA8FF", // Primary button color
    },
    background: {
      default: "#E7F0FF", // Background color
    },
    text: {
      primary: "#1B3C74", // Primary text color
      secondary: "#77829D", // Secondary text color
    },
  },
  typography: {
    fontFamily: "Poppins, Arial, sans-serif",
    h1: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    h2: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    h3: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    h4: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    h5: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    h6: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    body1: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    body2: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
    button: {
      fontFamily: "Poppins, Arial, sans-serif",
    },
  },
});

export default theme;
