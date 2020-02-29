import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
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
  flex-grow: 1;
  text-align: ${props => (props.mode === 'navigation' ? 'center' : 'left')};
`;

const TopbarNavigation = styled.div`
  align-items: center;
  color: ${theme.textLight};
  display: flex;
`;

const TopbarNavigationCaption = styled.div`
  color: ${theme.textLight};
  padding: 0 15px;
`;

const Button = styled(Link)`
  width: 15px;
  height: 15px;
  display: block;

  img {
    height: 100%;
    object-fit: contain;
    width: 100%;
  }
`;

const Topbar = props => {
  const { caption, isFetching, navigationData, mode } = props;

  return (
    <TopbarWrapper>
      <TopbarContainer>
        {isFetching && <Spinner />}

        {!isFetching && mode === 'normal' && (
          <>
            <TopbarBrand>
              <img src="/assets/sketch-logo.svg" alt="Sketch Document Viewer" />
            </TopbarBrand>
            <TopbarSeparator>
              <img src="/assets/icons/separator.svg" alt="Separator" />
            </TopbarSeparator>

            <TopbarCaption>{caption}</TopbarCaption>
          </>
        )}

        {!isFetching && mode === 'navigation' && (
          <>
            <TopbarNavigation>
              <Button to={navigationData.backLink}>
                <img
                  src="/assets/icons/close.svg"
                  alt="Back to Document View"
                  title="Back to Document View"
                />
              </Button>
              <TopbarSeparator>
                <img src="/assets/icons/separator.svg" alt="Separator" />
              </TopbarSeparator>
              {navigationData.previousLink && (
                <Button to={navigationData.previousLink}>
                  <img
                    src="/assets/icons/arrow-left.svg"
                    alt="Previous Artboard"
                    title="Previous Artboard"
                  />
                </Button>
              )}
              <TopbarNavigationCaption>
                {navigationData.caption}
              </TopbarNavigationCaption>
              {navigationData.nextLink && (
                <Button to={navigationData.nextLink}>
                  <img
                    src="/assets/icons/arrow-right.svg"
                    alt="Next Artboard"
                    title="Next Artboard"
                  />
                </Button>
              )}
            </TopbarNavigation>
            <TopbarCaption mode={mode}>{caption}</TopbarCaption>
          </>
        )}
      </TopbarContainer>
    </TopbarWrapper>
  );
};

Topbar.propTypes = {
  caption: PropTypes.string,
  isFetching: PropTypes.bool,
  navigationData: PropTypes.object,
  mode: PropTypes.oneOf(['normal', 'navigation']),
};

Topbar.defaultProps = {
  mode: 'normal',
};

export default Topbar;
