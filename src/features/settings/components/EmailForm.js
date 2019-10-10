import React from "react";
import { compose } from "redux";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";
import styled from "styled-components";

import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";
import Alert from "../../commonComponents/Alert";

const FormWrapper = styled.div`
  padding: 0.5rem 1rem;
`;

const FormikForm = props => {
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur
  } = props;

  return (
    <>
      <FormWrapper>
        <Form>
          <FormItem
            label="email"
            help={touched.email && errors.email}
            validateStatus="error"
          >
            <Input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={Boolean(isSubmitting)}
            loading={isSubmitting}
            mb={1}
          >
            Save
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
      </FormWrapper>
    </>
  );
};

const EmailForm = withFormik({
  enableReinitialize: true,
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Invalid email")
  }),
  mapPropsToValues: props => ({
    email: props.email || ""
  }),
  handleSubmit(payload, bag) {}
})(FormikForm);

const withConnect = connect(
  null,
  null
);

export default compose(withConnect)(EmailForm);
