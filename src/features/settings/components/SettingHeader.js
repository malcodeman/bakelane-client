import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

import Text from "../../commonComponents/Text";
import ArrowLeft from "../../commonAssets/icons/ArrowLeft";

const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  height: 48px;
  border-bottom: 1px solid ${props => props.theme.border};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;
  height: 36px;
  width: 36px;
  margin-right: 0.5rem;
  color: ${props => props.theme.brand};
  &:hover {
    background-color: ${props => `${props.theme.brand}19`};
  }
`;

function SettingHeader(props) {
  const { backButton, history, text } = props;

  return (
    <Header>
      {backButton && (
        <IconWrapper onClick={history.goBack}>
          <ArrowLeft />
        </IconWrapper>
      )}
      <Text size={1}>{text}</Text>
    </Header>
  );
}

SettingHeader.propTypes = {
  text: PropTypes.string,
  backButton: PropTypes.bool
};

SettingHeader.defaultProps = {
  text: "",
  backButton: false
};

export default compose(withRouter)(SettingHeader);
