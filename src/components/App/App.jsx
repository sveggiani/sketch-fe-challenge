import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';
import DocumentViewContainer from '../../containers/DocumentViewContainer.jsx';
import { theme } from '../../styles/base/colors';
import ArtboardView from '../ArtboardView/ArtboardView';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    background-color: ${theme.background};
    color: ${theme.text};
    margin: 0;
    padding: 0;
    font-family: "Roboto";
  }

  img {
    height: auto;
    width: 100%;
  }
`;

const AppBody = styled.div``;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <AppBody>
          <div className="app__content">
            <Route exact path="/" component={DocumentViewContainer} />
            <Route path="/artboard/:id" component={ArtboardView} />
          </div>
        </AppBody>
      </Router>
    </>
  );
};

export default App;
