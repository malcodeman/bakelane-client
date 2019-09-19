import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import PlusIcon from "../../commonAssets/icons/Plus";
import UserIcon from "../../commonAssets/icons/User";

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  box-shadow: rgba(0, 0, 0, 0.03) 0px 2px 0px 0px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 48px;
  padding: 0 2rem;
  margin: 0 auto;
  max-width: 1200px;
`;

const Grow = styled.div`
  flex-grow: 1;
`;

const StyledNavLink = styled(NavLink)`
  margin-right: 1rem;
  font-size: 1rem;
  color: ${props => props.theme.secondary};
  &.active {
    color: ${props => props.theme.primary};
  }
`;

function Header(props) {
  return (
    <StyledHeader>
      <Nav>
        <Logo mr={2} />
        <Grow>
          <StyledNavLink exact to="/">
            Dashboard
          </StyledNavLink>
          <StyledNavLink to="/orders">Orders</StyledNavLink>
        </Grow>
        <PlusIcon marginRight={1} />
        <UserIcon />
      </Nav>
    </StyledHeader>
  );
}

export default Header;
