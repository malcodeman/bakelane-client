import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const commonStyle = css`
  font-weight: 600;
  color: ${props => props.color || props.theme.primary};
  ${props => props.underline && props.theme.underline};
  ${props =>
    props.marginBottom &&
    css`
      display: inline-block;
      margin-bottom: ${props.marginBottom}rem;
    `};
`;

const Heading1 = styled.h1`
  font-size: 2.375rem;
  ${commonStyle}
`;

const Heading2 = styled.h2`
  font-size: 1.875rem;
  ${commonStyle}
`;

const Heading3 = styled.h3`
  font-size: 1.5rem;
  ${commonStyle}
`;

const Heading4 = styled.h4`
  font-size: 1.25rem;
  ${commonStyle}
`;

function Title(props) {
  const { level, color, underline, marginBottom, children } = props;

  switch (level) {
    case 1:
      return (
        <Heading1
          color={color}
          underline={underline}
          marginBottom={marginBottom}
        >
          {children}
        </Heading1>
      );
    case 2:
      return (
        <Heading2
          color={color}
          underline={underline}
          marginBottom={marginBottom}
        >
          {children}
        </Heading2>
      );
    case 3:
      return (
        <Heading3
          color={color}
          underline={underline}
          marginBottom={marginBottom}
        >
          {children}
        </Heading3>
      );
    case 4:
      return (
        <Heading4
          color={color}
          underline={underline}
          marginBottom={marginBottom}
        >
          {children}
        </Heading4>
      );
    default:
      return (
        <Heading1
          color={color}
          underline={underline}
          marginBottom={marginBottom}
        >
          {children}
        </Heading1>
      );
  }
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4]),
  color: PropTypes.string,
  underline: PropTypes.bool,
  marginBottom: PropTypes.number
};

Title.defaultProps = {
  level: 1,
  underline: false,
  marginBottom: 0
};

export default Title;
