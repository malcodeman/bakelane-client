import React from "react";
import styled from "styled-components";

const Main = styled.main`
  margin-top: 48px;
  min-height: calc(100vh - 48px);
  background-color: ${props => props.theme.background};
`;

const Container = styled.div`
  max-width: 1200px;
  padding: 0 2rem;
  margin: 0 auto;
`;

function Layout(props) {
  const { children } = props;

  return (
    <Main>
      <Container>{children}</Container>
    </Main>
  );
}

export default Layout;
