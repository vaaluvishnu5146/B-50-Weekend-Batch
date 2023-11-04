// Render Prop
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormikPlayground = () => (
  <div>
    <h1>Any place in your app!</h1>
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 10) {
          errors.password = "Password shopuld be atleast 10 digits";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, isValid, dirty }) => (
        <Form>
          <div className="row mb-2">
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div className="row mb-2">
            <Field
              type="password"
              name="password"
              placeholder="Enter Password"
            />
            <ErrorMessage name="password" component="div" />
          </div>
          <button type="submit" disabled={isSubmitting || !dirty || !isValid}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  </div>
);

export default FormikPlayground;
