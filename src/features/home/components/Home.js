import React from "react";
import styled from "styled-components";

import Logo from "../../commonComponents/Logo";
import Signup from "../../auth/components/Signup";

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 480px;
  }
`;

const Hero = styled.div`
  padding: 1rem;
  display: none;
  background-color: ${props => `${props.theme.brand}33`};
  @media (min-width: 992px) {
    display: block;
  }
`;

function Home() {
  return (
    <Grid>
      <Hero>
        <Logo size={32} />
      </Hero>
      <Signup />
    </Grid>
  );
}

export default Home;
