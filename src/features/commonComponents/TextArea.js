import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  font-size: 1rem;
  border: 2px solid transparent;
  padding: 0.5rem;
  width: 100%;
  line-height: 1.5;
  font-family: Roboto;
  resize: ${props => props.resize};
  color: ${props => props.theme.primary};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.inputFill};
  transition: ${props => props.theme.transitions.easeIn};
  &:focus {
    border-color: ${props => props.theme.border};
  }
`;

function TextArea(props) {
  const {
    name,
    disabled,
    placeholder,
    onChange,
    onBlur,
    value,
    resize,
    readOnly
  } = props;

  return (
    <StyledTextArea
      name={name}
      disabled={disabled}
      placeholder={placeholder}
      onChange={onChange}
      onBlur={onBlur}
      value={value}
      resize={resize}
      readonly={readOnly}
    ></StyledTextArea>
  );
}

TextArea.propTypes = {
  name: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string,
  resize: PropTypes.string,
  readOnly: PropTypes.bool
};

TextArea.defaultProps = {
  disabled: false,
  resize: "none",
  readonly: "true"
};

export default TextArea;
