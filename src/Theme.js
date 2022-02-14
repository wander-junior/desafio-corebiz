import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    red: '#F8475F',
    darkGray: '#C0C0C0',
    gray: '#E6E8EA',
    lightGray: '#F2F2F2'
  },
  fonts: ["'Nunito', sans-serif", "'Lato', sans-serif"],
  mediaBreakPoints: [1252]
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;