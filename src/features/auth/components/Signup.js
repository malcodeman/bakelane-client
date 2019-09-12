import React from "react";
import { compose } from "redux";
import styled, { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";
import Alert from "../../commonComponents/Alert";
import Text from "../../commonComponents/Text";
import Title from "../../commonComponents/Title";
import { signup } from "../actions/authActionCreators";

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Wrapper = styled.div`
  padding: 2rem;
`;

const FormikForm = props => {
  const {
    isAuthorized,
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur
  } = props;

  if (isAuthorized) {
    return <Redirect to="/" />;
  }

  return (
    <Center>
      <Wrapper>
        <Title level={4} marginBottom={1}>
          Create an account
        </Title>
        <Form>
          <FormItem
            label="email"
            help={touched.email && errors.email}
            validateStatus="error"
          >
            <Input
              type="text"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem
            label="username"
            help={touched.username && errors.username}
            validateStatus="error"
          >
            <Input
              type="text"
              name="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <FormItem
            label="create a password"
            help={touched.password && errors.password}
            validateStatus="error"
          >
            <Input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={Boolean(
              isSubmitting ||
                !values.email.length ||
                !values.password.length ||
                errors.email ||
                errors.password
            )}
            loading={isSubmitting}
            mb={1}
            block
          >
            Sign up for free
          </Button>
          {errors.general && (
            <Alert
              type="error"
              message={errors.general}
              marginBottom={1}
              closable
            />
          )}
        </Form>
        <Text>
          By creating an account, you agree to the{" "}
          <Link to="/tos">
            <Text underline>Terms of Service</Text>
          </Link>
          .
        </Text>
      </Wrapper>
    </Center>
  );
};

const SignupForm = withFormik({
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email"),
    username: Yup.string().required("Username is required"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters")
  }),
  mapPropsToValues: props => ({
    email: props.email || "",
    username: props.username || "",
    password: props.password || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.signup(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError
    });
  }
})(FormikForm);

const mapStateToProps = state => {
  return {
    isAuthorized: state.auth.isAuthorized
  };
};

const withConnect = connect(
  mapStateToProps,
  { signup }
);

export default compose(
  withTheme,
  withConnect
)(SignupForm);
