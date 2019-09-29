import React from "react";
import styled from "styled-components";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";
import Title from "../../commonComponents/Title";
import Text from "../../commonComponents/Text";
import NewOrderForm from "./NewOrderForm";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media (min-width: 576px) {
    grid-template-columns: 1fr 1fr;
  }
`;

function NewOrder(props) {
  return (
    <>
      <Header />
      <Layout>
        <Grid>
          <div>
            <Title level={4}>Create a donation order</Title>
            <Text mb={1}>Make donation</Text>
            <NewOrderForm />
          </div>
        </Grid>
      </Layout>
    </>
  );
}

export default NewOrder;
