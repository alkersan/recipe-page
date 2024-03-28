import React from "react";
import styled from "styled-components";
import Recipe from "./Recipe.jsx";
import GlobalStyles from "../GlobalStyles.js";
import DesignOverlay from "./DesignOverlay.jsx";
import { QUERIES } from "../constants.js";

const App = () => {
  return (
    <>
      <Main>
        <Recipe />
        <DesignOverlay />
      </Main>
      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  @media ${QUERIES.tabletAndUp} {
    padding-block: 8rem;
  }
`;

export default App;
