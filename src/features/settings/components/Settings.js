import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";
import Setting from "./Setting";

import { getMyself } from "../../users/actions/usersActionCreators";

import { ACCOUNT } from "../constants/settingsConstants";

function Settings(props) {
  const { getMyself } = props;

  useEffect(() => {
    getMyself();
  }, [getMyself]);

  return (
    <>
      <Header />
      <Layout>
        {ACCOUNT.map(setting => {
          return (
            <Setting key={setting.id} label={setting.label} url={setting.url} />
          );
        })}
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

export default compose(withConnect)(Settings);
