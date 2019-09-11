import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledParagraph = styled.p`
  font-size: 0.8rem;
  ${props => props.underline && props.theme.underline}
  ${props =>
    props.strong &&
    css`
      font-weight: 600;
    `}
`;

function Paragraph(props) {
  const { underline, strong, children } = props;

  return (
    <StyledParagraph underline={underline} strong={strong}>
      {children}
    </StyledParagraph>
  );
}

Paragraph.propTypes = {
  underline: PropTypes.bool,
  strong: PropTypes.bool
};

Paragraph.defaultProps = {
  underline: false,
  strong: false
};

export default Paragraph;
