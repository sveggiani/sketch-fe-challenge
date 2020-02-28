import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components/macro';
import breakpoints from '../../styles/base/breakpoints';
import { theme } from '../../styles/base/colors';
import ArtboardView from '../ArtboardView/ArtboardView';
import DocumentView from '../DocumentView/DocumentView';

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
  const handleClick = () => {
    // fetch({
    //   query: `
    //     {
    //       share(shortId: "Y8wDM") {
    //         shortId
    //         version {
    //           document {
    //             name
    //             artboards {
    //               entries {
    //                 name
    //                 isArtboard
    //                 files {
    //                   url
    //                   height
    //                   width
    //                   scale
    //                   thumbnails {
    //                     url
    //                     height
    //                     width
    //                   }
    //                 }
    //               }
    //             }
    //           }
    //         }
    //       }
    //     }
    //   `,
    // }).then(res => {
    //   console.log(res.data);
    // });
  };

  return (
    <>
      <GlobalStyle />
      <Router>
        <AppBody>
          <div className="app__content">
            <Route exact path="/" component={DocumentView} />
            <Route path="/artboard/:id" component={ArtboardView} />
          </div>
          {/* <Button onClick={() => dispatch({ type: 'ADD_SETTINGS' })}> */}
          {/* <Button onClick={() => handleClick()}>Heyy hellooouuu!</Button> */}
        </AppBody>
      </Router>
    </>
  );
};

export default App;
