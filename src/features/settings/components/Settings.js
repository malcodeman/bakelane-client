import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import Header from "../../header/components/Header";
import Layout from "../../layout/components/Layout";
import Setting from "./Setting";

import { getMyself } from "../../users/actions/usersActionCreators";

import {
  ACCOUNT,
  SETTINGS,
  NOTIFICATIONS
} from "../constants/settingsConstants";

import UsernameForm from "./UsernameForm";
import EmailForm from "./EmailForm";
import SettingHeader from "./SettingHeader";
import PasswordForm from "./PasswordForm";

function Settings(props) {
  const { getMyself, myself } = props;

  useEffect(() => {
    getMyself();
  }, [getMyself]);

  function renderSettingHeaderMobile() {
    return (
      <Switch>
        <Route exact path="/settings">
          <SettingHeader text="Settings" />
        </Route>
        <Route path="/settings/account">
          <SettingHeader text="Account" backButton />
        </Route>
        <Route path="/settings/username">
          <SettingHeader text="Change username" backButton />
        </Route>
        <Route path="/settings/phone">
          <SettingHeader text="Change phone" backButton />
        </Route>
        <Route path="/settings/email">
          <SettingHeader text="Change email" backButton />
        </Route>
        <Route path="/settings/password">
          <SettingHeader text="Change password" backButton />
        </Route>
        <Route path="/settings/privacy">
          <SettingHeader text="Privacy" backButton />
        </Route>
        <Route path="/settings/notifications">
          <SettingHeader text="Notifications" backButton />
        </Route>
        <Route path="/settings/accessibility">
          <SettingHeader text="Accessibility" backButton />
        </Route>
      </Switch>
    );
  }

  function renderSettingsMobile() {
    return (
      <Switch>
        <Route exact path="/settings">
          {SETTINGS.map(setting => {
            return (
              <Setting
                key={setting.id}
                label={setting.label}
                url={setting.url}
              />
            );
          })}
        </Route>
        <Route path="/settings/account">
          {ACCOUNT.map(setting => {
            if (setting.label === "Username") {
              return (
                <Setting
                  key={setting.id}
                  label={setting.label}
                  url={setting.url}
                  value={myself.username}
                />
              );
            } else if (setting.label === "Email") {
              return (
                <Setting
                  key={setting.id}
                  label={setting.label}
                  url={setting.url}
                  value={myself.email}
                />
              );
            }
            return (
              <Setting
                key={setting.id}
                label={setting.label}
                url={setting.url}
              />
            );
          })}
        </Route>
        <Route path="/settings/username">
          <UsernameForm username={myself.username} />
        </Route>
        <Route path="/settings/email">
          <EmailForm email={myself.email} />
        </Route>
        <Route path="/settings/password">
          <PasswordForm />
        </Route>
        <Route path="/settings/notifications">
          {NOTIFICATIONS.map(setting => {
            return (
              <Setting
                key={setting.id}
                label={setting.label}
                url={setting.url}
              />
            );
          })}
        </Route>
      </Switch>
    );
  }

  return (
    <>
      <Header />
      <Layout>
        <div>
          {renderSettingHeaderMobile()}
          {renderSettingsMobile()}
        </div>
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
