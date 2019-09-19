import React from "react";
import styled from "styled-components";

import Header from "../../header/components/Header";

const Main = styled.main`
  padding: 0 2rem;
  margin: 48px auto;
  max-width: 1200px;
`;

function Orders(props) {
  return (
    <>
      <Header />
      <Main>Orders</Main>
    </>
  );
}

export default Orders;
