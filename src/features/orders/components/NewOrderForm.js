import React from "react";
import { compose } from "redux";
import * as Yup from "yup";
import { Form, withFormik } from "formik";
import { connect } from "react-redux";

import Button from "../../commonComponents/Button";
import Input from "../../commonComponents/Input";
import FormItem from "../../commonComponents/FormItem";
import Alert from "../../commonComponents/Alert";
import TextArea from "../../commonComponents/TextArea";
import { createOrder } from "../actions/ordersActionCreators";

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
      <Form>
        <FormItem
          label="title"
          help={touched.title && errors.title}
          validateStatus="error"
        >
          <Input
            type="text"
            name="title"
            value={values.title}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </FormItem>
        <FormItem
          label="description"
          help={touched.description && errors.description}
          validateStatus="error"
        >
          <TextArea
            type="text"
            name="description"
            value={values.description}
            onChange={handleChange}
            onBlur={handleBlur}
            resize="block"
          />
        </FormItem>
        <Button
          type="primary"
          htmlType="submit"
          disabled={Boolean(isSubmitting)}
          loading={isSubmitting}
          mb={1}
          block
        >
          Create donation order
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
    </>
  );
};

const SignupForm = withFormik({
  validationSchema: Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required")
  }),
  mapPropsToValues: props => ({
    title: props.title || "",
    description: props.description || ""
  }),
  handleSubmit(payload, bag) {
    bag.props.createOrder(payload, {
      setSubmitting: bag.setSubmitting,
      setFieldError: bag.setFieldError,
      resetForm: bag.resetForm
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
  { createOrder }
);

export default compose(withConnect)(SignupForm);
