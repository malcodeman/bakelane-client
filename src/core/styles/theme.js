import { keyframes, css } from "styled-components";

const bounceIn = keyframes`
  0% {
    opacity: 0.9;
    transform: scale3d(.98, .98, .98);
  }
  70% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }
  100% {
    transform: scale3d(1, 1, 1);
  }
`;

const brand = "#1da1f2";
const underline = css`
  padding-bottom: 0.14rem;
  border-bottom: 2px solid hsla(0, 0%, 0%, 0.1);
`;
const transitions = {
  easeIn: "0.085s all ease-in"
};
const button = {
  disabled: {
    color: "rgba(0, 0, 0, 0.247)",
    background: "hsla(0, 0%, 0%, 0.25)"
  },
  default: {
    color: "hsl(0, 0%, 20%)",
    background: "hsla(0, 0%, 0%, 0.05)"
  },
  primary: {
    color: "hsl(0, 0%, 100%)",
    background: brand
  },
  danger: {
    color: "hsl(0, 0%, 100%)",
    background: "#f82b60"
  },
  link: {
    color: brand,
    background: "transparent"
  }
};
const animations = {
  bounceIn: css`
    ${bounceIn} 240ms cubic-bezier(0.215, 0.61, 0.355, 1);
  `
};
const borderRadius = "3px";
const positive = "#30d158";
const negative = "#ff453a";
const warning = "#ffd60a";
const alert = {
  info: "#0a84ff",
  success: positive,
  warning,
  error: negative
};
const dark = {
  brand,
  underline,
  transitions,
  button: {
    ...button,
    disabled: {
      color: "#757575",
      background: "#292929"
    }
  },
  animations,
  borderRadius,
  alert,
  negative,
  primary: "#d9d9d9",
  secondary: "#8e8e93",
  inputFill: "#15181c",
  background: "#000000",
  headerNavigationFill: "#000000",
  border: "#2f3336",
  shadow: "rgba(255, 255, 255, 0.06)",
  tableHeadBackgroundColor: "#15181c"
};
const light = {
  brand,
  underline,
  transitions,
  button,
  animations,
  borderRadius,
  alert,
  negative,
  primary: "#1c1c1e",
  secondary: "#8e8e93",
  inputFill: "hsla(0,0%,0%,0.05)",
  background: "#fcfcfc",
  headerNavigationFill: "#ffffff",
  border: "rgba(0, 0, 0, 0.25)",
  shadow: "rgba(0, 0, 0, 0.03)",
  tableHeadBackgroundColor: "hsla(0,0%,0%,0.05)"
};

export default {
  dark,
  light
};
