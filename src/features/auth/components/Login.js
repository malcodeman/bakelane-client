import React from "react";
import styled from "styled-components";

import Logo from "../../commonComponents/Logo";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background-color: ${props => props.theme.background};
  @media (min-width: 576px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Container = styled.div`
  width: 100%;
  @media (min-width: 576px) {
    padding: 2rem;
    max-width: 480px;
  }
`;

function Login() {
  return (
    <Wrapper>
      <Container>
        <Logo mb={2} />
        <LoginForm />
      </Container>
    </Wrapper>
  );
}

export default Login;
