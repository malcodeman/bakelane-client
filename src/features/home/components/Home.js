import React from "react";
import styled from "styled-components";

import Logo from "../../commonComponents/Logo";
import Tile from "../../commonComponents/Title";
import SignupForm from "../../auth/components/SignupForm";

const Grid = styled.div`
  display: grid;
  min-height: 100vh;
  @media (min-width: 992px) {
    grid-template-columns: 1fr 480px;
  }
`;

const Hero = styled.div`
  padding: 1rem 2rem;
  display: none;
  background-color: ${props => props.theme.background};
  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
  }
`;

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 2rem 0;
`;

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  background-color: ${props => props.theme.background};
`;

function Home() {
  return (
    <Grid>
      <Hero>
        <Logo size={32} />
        <Center>
          <div>
            <Tile marginBottom={2}>Hunger in the country is a big problem</Tile>
            <Tile level={4}>
              We fight hunger by sourcing food for people in need
            </Tile>
          </div>
        </Center>
      </Hero>
      <SignupWrapper>
        <SignupForm />
      </SignupWrapper>
    </Grid>
  );
}

export default Home;
