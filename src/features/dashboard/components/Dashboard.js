import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";

function Dashboard(props) {
  const { profile } = props;

  return (
    <>
      <Header />
      <Layout>Dashboard, email:{profile.email}</Layout>
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
