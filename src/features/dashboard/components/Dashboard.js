import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";

import Header from "../../header/components/Header";

const Main = styled.main`
  padding: 0 2rem;
  margin: 48px auto;
  max-width: 1200px;
`;

function Dashboard(props) {
  const { profile } = props;

  return (
    <>
      <Header />
      <Main>Dashboard, email:{profile.email}</Main>
    </>
  );
}

const mapStateToProps = state => {
  return {
    profile: state.users.profile
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(Dashboard);
