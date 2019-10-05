import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";
import Text from "../../commonComponents/Text";

import { getMyself } from "../../users/actions/usersActionCreators";

function Account(props) {
  const { myself, getMyself } = props;

  useEffect(() => {
    getMyself();
  }, [getMyself]);

  return (
    <>
      <Header />
      <Layout>
        <Text>Email: {myself.email}</Text>
        <Text>Username: {myself.username}</Text>
      </Layout>
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
  { getMyself }
);

export default compose(withConnect)(Account);
