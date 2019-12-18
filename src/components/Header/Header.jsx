import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'assets/logo/logo.svg';
import LinkPreload from 'components/LinkPreload';
import ThemeSwitcher from 'components/ThemeSwitcher';
import { paths } from 'constants/routes';

const StyledHeader = styled.div`
  min-height: ${({ theme }) => theme.elements.header.height};
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.zIndex.header};
  padding: ${({ theme }) => theme.spacing(0, 12)};
  background-color: ${({ theme }) => theme.colors.body};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  ${({ theme }) => theme.bp.max('m')} {
      padding: ${({ theme }) => theme.spacing(0, 9)};
  }
`;

const StyledLogo = styled(Logo)`
  width: ${({ theme }) => theme.elements.logo.width};
  * {
    fill: ${({ theme }) => theme.colors.text} !important;
  }
`;

const StyledLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  a {
    color: ${({ theme }) => theme.colors.text};
    text-decoration: none;
  }
`;

const Header = () => (
  <StyledHeader>
    <LinkPreload to={paths.DASHBOARD} preload="onMouseEnter">
      <StyledLogo />
    </LinkPreload>
    <StyledLinks>
      <LinkPreload to={paths.LOGIN} preload="onMouseEnter">
        Login
      </LinkPreload>
      <LinkPreload to={paths.ACCOUNT} preload="onMouseEnter">
        Account
      </LinkPreload>
    </StyledLinks>
    <ThemeSwitcher />
  </StyledHeader>
);

export default Header;
