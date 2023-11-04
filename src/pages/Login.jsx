import React from "react";
import InputComponent from "../component/elements/Inputs/Input";
import { Formik } from "formik";

export default function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    let formDataCopy = {
      ...formData,
    };
    formDataCopy[e.target.id] = e.target.value;
    setFormData(formDataCopy);
  }

  return (
    <div className="container h-full d-flex align-items-center justify-content-center">
      <div
        className="card"
        style={{
          width: "20rem",
        }}
      >
        <div className="card-body">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
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
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              dirty,
              /* and other goodies */
            }) => (
              <form
                onSubmit={handleSubmit}
                className={`needs-validation ${dirty && "was-validated"}`}
                novalidate
              >
                <InputComponent
                  label="Enter Email"
                  placeholder="Enter Email Address"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  error={errors.email}
                />
                <InputComponent
                  label="Enter Password"
                  placeholder="Enter Password"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  error={errors.password}
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => {
                    console.log(formData);
                  }}
                  style={{
                    width: "100%",
                  }}
                  disabled={isSubmitting}
                >
                  Sign In
                </button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
