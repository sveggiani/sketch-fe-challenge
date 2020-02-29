import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import DocumentView from '../components/DocumentView/DocumentView';
import { fetchData } from '../api/index.js';
import { store } from '../state/store';

const DocumentViewContainer = props => {
  const { documentId } = props;

  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const { isFetching } = state;
  const { currentDocument } = state.data;

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
  }, [documentId, dispatch]);
  console.log('render DVC');
  return (
    <DocumentView
      isFetching={isFetching}
      document={currentDocument}
    ></DocumentView>
  );
};

DocumentViewContainer.propTypes = {
  documentId: PropTypes.string,
};

DocumentViewContainer.defaultProps = {
  documentId: 'Y8wDM',
};

export default DocumentViewContainer;
