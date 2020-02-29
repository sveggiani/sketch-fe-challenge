import React, { useEffect, useContext } from 'react';
import ArtboardView from '../components/ArtboardView/ArtboardView';
import { fetchData } from '../api/index.js';
import { store } from '../state/store';

const ArtboardViewContainer = props => {
  const { match } = props;

  const globalState = useContext(store);
  const { state, dispatch } = globalState;

  const { isFetching } = state;
  const { currentDocument } = state.data;

  useEffect(() => {
    if (
      !currentDocument ||
      match.params.documentId !== currentDocument.documentId
    ) {
      // Get current document detail
      dispatch({ type: 'IS_FETCHING_SET' });
      fetchData({
        query: `
          {
            share(shortId: "${match.params.documentId}") {
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
        dispatch({
          type: 'DOCUMENT_DETAIL_REQUEST',
          payload: { data: res.data, documentId: match.params.documentId },
        });
      });
    }
  }, [currentDocument, match, dispatch]);

  return (
    <ArtboardView
      artboardId={match.params.artboardId}
      document={currentDocument}
      isFetching={isFetching}
    ></ArtboardView>
  );
};

export default ArtboardViewContainer;
