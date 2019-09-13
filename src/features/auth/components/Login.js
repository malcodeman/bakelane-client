import React from "react";
import styled from "styled-components";

import Logo from "../../commonComponents/Logo";
import LoginForm from "./LoginForm";

const Wrapper = styled.div`
  min-height: 100vh;
  @media (min-width: 576px) {
    padding: 2rem;
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

const Header = styled.div`
  background-color: initial;
  padding: 2rem;
  @media (min-width: 576px) {
    background-color: initial;
  }
`;

const AuthWrapper = styled.div`
  background-color: initial;
  padding: 2rem;
`;

function Login() {
  return (
    <Wrapper>
      <Container>
        <Header>
          <Logo />
        </Header>
        <AuthWrapper>
          <LoginForm />
        </AuthWrapper>
      </Container>
    </Wrapper>
  );
}

export default Login;
