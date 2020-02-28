import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import breakpoints from '../../styles/base/breakpoints';
import { styleSettings } from '../../styles/base/variables';
import Topbar from '../Topbar/Topbar';
import { fetchData } from '../../api/index.js';
import { store } from '../../state/store';
// import { theme } from '../../styles/base/colors';

const DocumentViewWrapper = styled.div``;

const DocumentViewContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: ${styleSettings.maxWidth}px;
  /* @media (min-width: ${breakpoints.xSmallMax}px) {
    color: green;
  } */
`;

const DocumentView = props => {
  const { documentId } = props;

  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  console.log(state?.data?.currentDocument);
  const { isFetching } = state;
  const { currentDocument } = state?.data;

  useEffect(() => {
    // Get current document detail
    dispatch({ type: 'IS_FETCHING_SET' });
    fetchData({
      query: `
        {
          share(shortId: "${documentId}") {
            shortId
            version {
              document {
                name
                artboards {
                  entries {
                    name
                    isArtboard
                    files {
                      url
                      height
                      width
                      scale
                      thumbnails {
                        url
                        height
                        width
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `,
    }).then(res => {
      dispatch({ type: 'IS_FETCHING_UNSET' });
      dispatch({ type: 'DOCUMENT_DETAIL_REQUEST', payload: res.data });
    });
  }, []);

  return (
    <DocumentViewWrapper>
      <Topbar caption={currentDocument?.name} />
      {!isFetching && currentDocument ? (
        <DocumentViewContainer>
          DOCUMENT VIEW: {documentId}
        </DocumentViewContainer>
      ) : (
        <p>loading</p>
      )}
    </DocumentViewWrapper>
  );
};

DocumentView.propTypes = {
  documentId: PropTypes.string,
};

DocumentView.defaultProps = {
  documentId: 'Y8wDM',
};

export default DocumentView;
