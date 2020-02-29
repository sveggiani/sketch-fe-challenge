import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { baseColors, theme } from '../../styles/base/colors';
import { styleSettings } from '../../styles/base/variables';
import Spinner from '../Spinner/Spinner';

const TopbarWrapper = styled.nav`
  background-color: ${baseColors.white};
  box-shadow: 0 1px 5px 0 ${theme.shadow};
  height: 55px;
  padding: 15px;
`;

const TopbarContainer = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: ${styleSettings.maxWidth}px;
`;

const TopbarBrand = styled.div`
  width: 25px;
  max-height: 25px;
`;

const TopbarSeparator = styled.div`
  margin: 0 15px;

  img {
    max-height: 25px;
  }
`;

const TopbarCaption = styled.div`
  font-size: 18px;
`;

const Topbar = props => {
  const { caption, isFetching, mode } = props;

  return (
    <TopbarWrapper>
      <TopbarContainer>
        {isFetching ? (
          <Spinner />
        ) : (
          mode === 'normal' && (
            <>
              <TopbarBrand>
                <img
                  src="./assets/sketch-logo.svg"
                  alt="Sketch Document Viewer"
                />
              </TopbarBrand>
              <TopbarSeparator>
                <img src="./assets/icons/separator.svg" alt="Separator" />
              </TopbarSeparator>
              <TopbarCaption>{caption}</TopbarCaption>
            </>
          )
        )}
      </TopbarContainer>
    </TopbarWrapper>
  );
};

Topbar.propTypes = {
  caption: PropTypes.string,
  isFetching: PropTypes.bool,
  mode: PropTypes.oneOf(['normal', 'navigation']),
};

Topbar.defaultProps = {
  mode: 'normal',
};

export default Topbar;
