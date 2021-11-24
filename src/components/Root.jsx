import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "./styles/Container.styled";
import GlobalStyles from "./styles/Global";
import MainComponent from "./MainComponent";

const theme = {
  colors: {
    header: "#ebfbff",
    body: "#fff",
    footer: "#003333",
  },
  mobile: "768px",
};
const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          <MainComponent />
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
};
export default Root;
