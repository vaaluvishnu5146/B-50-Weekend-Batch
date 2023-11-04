import React from "react";
import { Formik, Form, Field } from "formik";

export default function Contact() {
  // function handleInputChange(e) {
  //   let formDataCopy = {
  //     ...formData,
  //   };
  //   if (e.target.type === "radio") {
  //     formDataCopy[e.target.name] = e.target.id;
  //   } else {
  //     formDataCopy[e.target.id] = e.target.value;
  //   }
  //   setFromData(formDataCopy);
  // }

  // function submit(e) {
  //   console.log(formData);
  // }

  return (
    <div>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          dob: "",
          gender: "",
          ratings: 0,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.firstName) {
            errors.firstName = "Required";
          } else if (!values.lastName) {
            errors.lastName = "Required";
          } else if (!values.dob) {
            errors.dob = "Required";
          } else if (!values.gender) {
            errors.gender = "Required";
          } else if (!values.ratings) {
            errors.ratings = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }}
      >
        {({
          onSubmitting,
          values,
          handleChange,
          handleBlur,
          errors,
          isSubmitting,
        }) => (
          <Form>
            <div>
              <input
                id="firstName"
                name="firstName"
                placeholder="Enter First Name"
                value={values.firstName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.firstName}</p>
            </div>
            <div>
              <input
                id="lastName"
                name="lastName"
                placeholder="Enter Last Name"
                value={values.lastName}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.lastName}</p>
            </div>
            <div>
              <input
                id="dob"
                name="dob"
                type={"date"}
                placeholder="Enter Last Name"
                value={values.dob}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.dob}</p>
            </div>
            <div role="group" aria-labelledby="my-radio-group">
              <label>
                <Field type="radio" name="gender" value="male" />
                Male
              </label>
              <label>
                <Field type="radio" name="gender" value="female" />
                Female
              </label>
              <label>
                <Field type="radio" name="gender" value="trans" />
                Trans Gender
              </label>
              <div>Picked: {values.gender}</div>
              <p>{errors.gender}</p>
            </div>
            <div>
              <input
                id="ratings"
                name="ratings"
                type="range"
                min={1}
                max={5}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <p>{errors.ratings}</p>
            </div>
            <p>Selected range is: {values.ratings}</p>
            <button
              className="btn btn-primary btn-lg"
              type="submit"
              disabled={isSubmitting}
            >
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
