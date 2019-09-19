import React from "react";
import PropTypes from "prop-types";

function Plus(props) {
  const { color, size, marginRight, ...otherProps } = props;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      style={{ marginRight: `${marginRight}rem` }}
      {...otherProps}
    >
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

Plus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  marginRight: PropTypes.number
};

Plus.defaultProps = {
  color: "currentColor",
  size: "16",
  marginRight: 0
};

export default Plus;
