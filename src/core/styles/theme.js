import { css } from "styled-components";

const brand = "#1da1f2";
const underline = css`
  padding-bottom: 0.14rem;
  border-bottom: 2px solid hsla(0, 0%, 0%, 0.1);
`;
const dark = {
  brand,
  underline,
  primary: "#14171a"
};
const light = {
  brand,
  underline,
  primary: "#0e0d20"
};

export default {
  dark,
  light
};
