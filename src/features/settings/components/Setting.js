import React from "react";
import PropTypes from "prop-types";
import { compose } from "redux";
import { NavLink } from "react-router-dom";
import styled, { withTheme } from "styled-components";

import ChevronRightIcon from "../../commonAssets/icons/ChevronRight";

const StyledSetting = styled(NavLink)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  height: 48px;
  transition: ${props => props.theme.transitions.easeIn};
  border-bottom: 1px solid ${props => props.theme.border};
  &:hover {
    background-color: ${props => props.theme.backgroundAlt};
  }
  &.active {
    background-color: ${props => props.theme.backgroundAlt};
  }
`;

const Content = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const Label = styled.span`
  font-size: 1rem;
  color: ${props => props.theme.primary};
`;

const Value = styled.span`
  font-size: 0.8rem;
  color: ${props => props.theme.secondary};
`;

function Setting(props) {
  const { url, label, value, theme } = props;

  return (
    <StyledSetting to={url}>
      <Content>
        {label && <Label>{label}</Label>}
        {value && <Value>{value}</Value>}
      </Content>
      <ChevronRightIcon color={theme.primary} />
    </StyledSetting>
  );
}

Setting.propTypes = {
  url: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string
};

Setting.defaultProps = {
  url: "/",
  label: "",
  value: ""
};

export default compose(withTheme)(Setting);
