import React from "react";
import styled from "styled-components";

import { COLORS, DEVICE, WEIGHTS } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import Icon from "../Icon";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <SideLogo>
          <Logo />
        </SideLogo>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <NavMobile>
          <Icon id="shopping-bag" strokeWidth={2} />
          <Icon id="search" strokeWidth={2} />
          <IconMenu>
            <Icon
              id="menu"
              strokeWidth={2}
              onClick={() => setShowMobileMenu(true)}
            />
          </IconMenu>
        </NavMobile>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const IconMenu = styled.button`
  border: none;
  background: initial;
  cursor: pointer;
`;

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  padding: 18px 32px;
  height: 72px;
  border-bottom: 1px solid ${COLORS.gray[300]};
  overflow-x: auto;
  overflow-y: hidden;

  @media ${DEVICE.sm} {
    align-items: center;
    justify-content: flex-end;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 3rem;
  margin: 0px 48px;

  @media ${DEVICE.sm} {
    display: none;
  }
`;

const NavMobile = styled.nav`
  display: none;

  @media ${DEVICE.sm} {
    display: flex;
    gap: 2rem;
  }
`;

const Side = styled.div`
  flex: 1;
  @media ${DEVICE.sm} {
    display: none;
  }
`;

const SideLogo = styled.div`
  flex: 1;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

export default Header;
