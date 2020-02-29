import React, { createContext, useReducer } from 'react';
import initialState from './initialState';

const store = createContext(initialState);
const { Provider } = store;

const reducer = (state, action) => {
  const { payload } = action;

  switch (action.type) {
    case 'DOCUMENTS_FETCH':
      // hardcoded because we don't have an endpoint to fetch the documents list
      const documents = [{ id: 'Y8wDM' }, { id: '4W43q' }];

      return {
        ...state,
        data: {
          ...state.data,
          documents,
        },
      };

    case 'DOCUMENT_DETAIL_REQUEST':
      if (!payload.data.share) {
        return state;
      }

      return {
        ...state,
        data: {
          ...state.data,
          currentDocument: {
            documentId: payload.documentId,
            ...payload.data.share.version.document,
          },
        },
      };

    case 'IS_FETCHING_SET':
      return {
        ...state,
        isFetching: true,
      };

    case 'IS_FETCHING_UNSET':
      return {
        ...state,
        isFetching: false,
      };

    default:
      throw new Error();
  }
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
