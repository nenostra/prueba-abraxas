import React from 'react';
import { withFormik } from 'formik';

const InnerForm = ({ /* titulo, descripcion, duracion */
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
  isSubmitting,
}) => (
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      name="title"
      onChange={handleChange}
      value={values.title}
    />
    {touched.title && errors.title && <div>{errors.title}</div>}
    <br />
    <textarea
      type="textarea"
      name="description"
      onChange={handleChange}
      value={values.description}
    />
    {touched.description && errors.description && <div>{errors.description}</div>}
    <br />
    <button type="submit" disabled={isSubmitting}>
      Create Task
    </button>
  </form>
);

const MyForm = withFormik({
  mapPropsToValues: props => ({ title: '', description: '' }),
  validate: (values, props) => {
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
      setSubmitting,
      setErrors /* setValues, setStatus, and other goodies */,
    }
  ) => {
    console.log(values);
  },
})(InnerForm);

export default MyForm;
