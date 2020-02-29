import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import { v4 as uuidv4 } from 'uuid';
import breakpoints from '../../styles/base/breakpoints';
import { baseColors } from '../../styles/base/colors';
import { styleSettings } from '../../styles/base/variables';
import Spinner from '../Spinner/Spinner';
import Topbar from '../Topbar/Topbar';

const DocumentViewWrapper = styled.div``;

const DocumentViewContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: ${styleSettings.maxWidth}px;
`;

const ArtboardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const ArtboardItem = styled.div`
  height: 340px;
  max-height: 340px;
  margin-bottom: 30px;
  width: 100%;

  a {
    display: flex;
    height: 100%;
    max-height: 100%;
    flex-direction: column;
    text-decoration: none;
  }

  @media (min-width: ${breakpoints.small}px) {
    width: 48%;
  }

  @media (min-width: ${breakpoints.medium}px) {
    width: 31%;
  }

  @media (min-width: ${breakpoints.large}px) {
    width: 240px;
  }
`;

const ArtboardTitle = styled.div`
  color: ${baseColors.scorpion};
  flex-grow: 0;
  flex-shrink: 0;
  height: 22px;
  margin-top: 10px;
  text-align: center;
`;

const ArtboardThumbnail = styled.div`
  flex-grow: 0;
  flex-shrink: 0;
  height: 308px;
  display: flex;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

const SpinnerContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`;

const DocumentView = props => {
  const { document, isFetching } = props;

  return (
    <DocumentViewWrapper>
      <Topbar isFetching={isFetching} caption={document?.name} />
      {!isFetching && document ? (
        <DocumentViewContainer>
          {document.artboards.entries.length && (
            <ArtboardsContainer>
              {document.artboards.entries.map((artboard, index) => (
                <ArtboardItem key={uuidv4()}>
                  <Link to={`/artboard/${index}`}>
                    <ArtboardThumbnail>
                      <img
                        src={artboard.files[0].thumbnails[0].url}
                        alt={`${artboard.name} thumbnail`}
                      />
                    </ArtboardThumbnail>
                    <ArtboardTitle>{artboard.name}</ArtboardTitle>
                  </Link>
                </ArtboardItem>
              ))}
            </ArtboardsContainer>
          )}
        </DocumentViewContainer>
      ) : (
        <DocumentViewContainer>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </DocumentViewContainer>
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
