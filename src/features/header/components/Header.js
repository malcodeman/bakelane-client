import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled, { withTheme } from "styled-components";
import { NavLink, Link } from "react-router-dom";

import Logo from "../../commonComponents/Logo";
import Popover from "../../commonComponents/Popover";
import Text from "../../commonComponents/Text";
import Switch from "../../commonComponents/Switch";
import PlusIcon from "../../commonAssets/icons/Plus";
import UserIcon from "../../commonAssets/icons/User";
import BellIcon from "../../commonAssets/icons/Bell";
import LogOutIcon from "../../commonAssets/icons/LogOut";

import { logout } from "../../auth/actions/authActionCreators";
import { toggleDarkMode } from "../../settings/actions/settingsActionCreators";

const StyledHeader = styled.header`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 1;
  box-shadow: ${props => props.theme.shadow} 0px 2px 0px 0px;
  background-color: ${props => props.theme.headerNavigationFill};
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
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 0 2px ${props => props.theme.border};
  background-color: ${props => props.theme.background};
`;

const EmailWrapper = styled.div`
  padding: 0 1rem;
`;

const Email = styled.div`
  font-size: 0.8rem;
  padding: 0.5rem 0;
  color: ${props => props.theme.primary};
  border-bottom: 2px solid ${props => props.theme.border};
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
  justify-content: ${props => props.justifyContent};
  &:hover {
    background-color: ${props => `${props.theme.primary}19`};
  }
`;

function Header(props) {
  const { myself, darkMode, toggleDarkMode, theme } = props;

  function handleLogOut() {
    const { logout } = props;

    localStorage.removeItem("token");
    logout();
  }

  function toggleState(callback, currentState) {
    const newState = currentState ? false : true;

    callback(newState);
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
        <Popover
          placement="bottom-end"
          overlay={({ close }) => (
            <Overlay>
              <Menu>
                <Link to="/submit">
                  <MenuItem onClick={close}>
                    <Text>New donation</Text>
                  </MenuItem>
                </Link>
                <MenuItem onClick={close}>
                  <Text>New donee</Text>
                </MenuItem>
              </Menu>
            </Overlay>
          )}
        >
          <div>
            <PlusIcon marginRight={1} color={theme.primary} />
          </div>
        </Popover>
        <Popover
          placement="bottom-end"
          overlay={({ close }) => (
            <Overlay>
              <EmailWrapper>
                <Email>{myself.email}</Email>
              </EmailWrapper>
              <Menu>
                <MenuItem
                  onClick={() => toggleState(toggleDarkMode, darkMode)}
                  justifyContent="space-between"
                >
                  <Text>Dark mode</Text>
                  <Switch state={darkMode} />
                </MenuItem>
                <Link to="/account">
                  <MenuItem>
                    <UserIcon />
                    <Text ml={0.5}>Account</Text>
                  </MenuItem>
                </Link>
                <MenuItem>
                  <BellIcon />
                  <Text ml={0.5}>Notification preferences</Text>
                </MenuItem>
                <MenuItem onClick={handleLogOut}>
                  <LogOutIcon />
                  <Text ml={0.5}>Log out</Text>
                </MenuItem>
              </Menu>
            </Overlay>
          )}
        >
          <div>
            <UserIcon color={theme.primary} />
          </div>
        </Popover>
      </Nav>
    </StyledHeader>
  );
}

const mapStateToProps = state => {
  return {
    myself: state.users.myself,
    darkMode: state.settings.darkMode
  };
};

const withConnect = connect(
  mapStateToProps,
  { logout, toggleDarkMode }
);

export default compose(
  withConnect,
  withTheme
)(Header);
