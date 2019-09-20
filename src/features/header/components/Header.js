import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import Popover from "../../commonComponents/Popover";
import PlusIcon from "../../commonAssets/icons/Plus";
import UserIcon from "../../commonAssets/icons/User";
import BellIcon from "../../commonAssets/icons/Bell";
import LogOutIcon from "../../commonAssets/icons/LogOut";

import { logout } from "../../auth/actions/authActionCreators";

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

const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  background-color: #fff;
  box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.1);
  border-radius: ${props => props.theme.borderRadius};
`;

const EmailWrapper = styled.div`
  padding: 0 1rem;
`;

const Email = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
  border-bottom: 2px solid rgba(0, 0, 0, 0.1);
`;

const Menu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
  padding: 0.25rem 1rem;
`;

const MenuItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  cursor: pointer;
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  &:hover {
    background-color: ${props => `${props.theme.primary}19`};
  }
`;

const MenuLabel = styled.span`
  margin-left: 0.5rem;
  font-size: 0.8rem;
`;

function Header(props) {
  const { profile } = props;

  function handleLogOut() {
    const { logout } = props;

    localStorage.removeItem("token");
    logout();
  }

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
        <Popover
          placement="bottom-end"
          overlay={({ close }) => (
            <Overlay>
              <EmailWrapper>
                <Email>{profile.email}</Email>
              </EmailWrapper>
              <Menu>
                <MenuItem>
                  <BellIcon />
                  <MenuLabel>Notification preferences</MenuLabel>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <LogOutIcon />
                  <MenuLabel>Log out</MenuLabel>
                </MenuItem>
              </Menu>
            </Overlay>
          )}
        >
          <div>
            <UserIcon />
          </div>
        </Popover>
      </Nav>
    </StyledHeader>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.users.profile
  };
};

const withConnect = connect(
  mapStateToProps,
  { logout }
);

export default compose(withConnect)(Header);
