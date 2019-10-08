import React from "react";
import { compose } from "redux";
import { Link } from "react-router-dom";
import styled, { withTheme } from "styled-components";

import ChevronRightIcon from "../../commonAssets/icons/ChevronRight";

const StyledSetting = styled(Link)`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: ${props => props.theme.transitions.easeIn};
  border-bottom: 1px solid ${props => props.theme.border};
  &:hover {
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
        <Label>{label}</Label>
        <Value>{value}</Value>
      </Content>
      <ChevronRightIcon color={theme.primary} />
    </StyledSetting>
  );
}

export default compose(withTheme)(Setting);
