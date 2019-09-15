import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";

function Dashboard(props) {
  const { profile } = props;

  return <div>Dashboard, email:{profile.email}</div>;
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
