import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";

function Dashboard(props) {
  const { myself } = props;

  return (
    <>
      <Header />
      <Layout>Dashboard, email:{myself.email}</Layout>
    </>
  );
}

const mapStateToProps = state => {
  return {
    myself: state.users.myself
  };
};

const withConnect = connect(
  mapStateToProps,
  null
);

export default compose(withConnect)(Dashboard);
