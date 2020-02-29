import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { styleSettings } from '../../styles/base/variables';
import Spinner from '../Spinner/Spinner';
import Topbar from '../Topbar/Topbar';

const ArtboardViewWrapper = styled.div``;

const ArtboardViewContainer = styled.div`
  padding: 20px;
  margin: 0 auto;
  max-width: ${styleSettings.maxWidth}px;
`;

const ArtboardPreview = styled.div`
  display: flex;
  height: 90vh;
  width: 100%;
  justify-content: center;
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

const ArtboardView = props => {
  const { artboardId, document, isFetching } = props;

  const numericArtboardId = parseInt(artboardId);
  const totalArboards = document?.artboards?.entries?.length;
  const previousArtboardId =
    numericArtboardId > 0 ? numericArtboardId - 1 : null;
  const nextArtboardId =
    numericArtboardId < totalArboards - 1 ? numericArtboardId + 1 : null;

  const navigationData = {
    backLink: '/',
    caption: `${numericArtboardId + 1} / ${totalArboards}`,
    previousLink:
      previousArtboardId === null
        ? null
        : `/${document?.documentId}/artboard/${previousArtboardId}`,
    nextLink:
      nextArtboardId === null
        ? null
        : `/${document?.documentId}/artboard/${nextArtboardId}`,
  };

  const artboard = document?.artboards?.entries[numericArtboardId];

  return (
    <ArtboardViewWrapper>
      <Topbar
        caption={artboard?.name}
        isFetching={isFetching}
        mode="navigation"
        navigationData={navigationData}
      />
      {!isFetching && artboard ? (
        <ArtboardViewContainer>
          <ArtboardPreview>
            <ArtboardPreview>
              <img
                src={artboard.files[1].url}
                alt={`${artboard.name} thumbnail`}
                loading="lazy"
              />
            </ArtboardPreview>
          </ArtboardPreview>
        </ArtboardViewContainer>
      ) : (
        <ArtboardViewContainer>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </ArtboardViewContainer>
      )}
    </ArtboardViewWrapper>
  );
};

ArtboardView.propTypes = {
  artboardId: PropTypes.string,
  document: PropTypes.object,
  isFetching: PropTypes.bool,
};

export default ArtboardView;
