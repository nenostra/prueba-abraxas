import React from 'react';
import { withFormik } from 'formik';

const TaskForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleSubmit,
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
      style={{ resize: 'none' }}
    />
    {touched.description && errors.description && <div>{errors.description}</div>}
    <br />
    <input
      type="radio"
      name="duration"
      value="short"
      onChange={handleChange}
      checked={values.duration === 'short'}
    /> 30mins or less<br />
    <input
      type="radio"
      name="duration"
      value="medium"
      onChange={handleChange}
      checked={values.duration === 'medium'}
    /> 30 - 60mins<br />
    <input
      type="radio"
      name="duration"
      value="long"
      onChange={handleChange}
      checked={values.duration === 'long'}
    /> Longer than 60mins<br />
    <button type="submit">
      Create Task
    </button>
  </form>
);

const MyForm = withFormik({
  mapPropsToValues: props => ({ title: '', description: '', duration: 'short' }),
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
      setErrors, /* setValues, setStatus, and other goodies */
    },
  ) => {
    props.formSubmit({ ...values });
  },
})(TaskForm);

export default MyForm;
