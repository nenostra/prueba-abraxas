import React from 'react';
import { withFormik } from 'formik';
import { connect } from 'react-redux';

const mapDispatchToProps = dispatch => ({
  formSubmit: (actionType, payload) => dispatch({ type: actionType, payload }),
});

const durationMap = {
  short: 1800,
  medium: 3600,
  long: 7200,
}

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
    /> 60 - 120mins<br />
    <input
      type="radio"
      name="duration"
      value=""
      onChange={handleChange}
      checked={values.duration === ''}
    />
    Custom Duration: <input
      type="text"
      name="customDuration"
      onChange={handleChange}
      value={values.customDuration}
      disabled={values.duration !== ''}
      placeholder="mm:ss"
    /><br />
    {touched.customDuration && errors.customDuration && <div>{errors.customDuration}</div>}
    <button type="submit">
      Save
    </button>
  </form>
);

const MyForm = withFormik({
  mapPropsToValues: ({ task }) =>
    ({
      title: task.title || '',
      description: task.description || '',
      duration: task.duration || '',
      customDuration: task.customDuration || '',
    }),
  validate: (values) => {
    const twoHours = 2 * 60 * 60;
    const errors = {};
    if (!values.title) {
      errors.title = 'Required';
    }
    if (!values.description) {
      errors.description = 'Required';
    }
    if (!values.duration && !values.customDuration) {
      errors.customDuration = 'Required';
    }
    if (!values.duration && values.customDuration) {
      const timeArr = values.customDuration.split(':');
      if (timeArr.length !== 2) {
        errors.customDuration = 'Wrong Format';
      } else {
        const [mins, secs] = timeArr;
        const totalSeconds = (Number(mins) * 60) + Number(secs);
        if (totalSeconds > twoHours) {
          errors.customDuration = 'Must be less than 2 hours';
        }
      }
    }
    return errors;
  },
  handleSubmit: (
    values,
    {
      props,
    },
  ) => {
    const { duration } = values;
    const [mins, secs] = values.customDuration.split(':');
    const durationInSeconds = durationMap[duration] || (Number(mins) * 60) + Number(secs);

    const actionType = Object.keys(props.task).length === 0
      ? 'CREATE_TASK'
      : 'EDIT_TASK';
    const payload = actionType === 'CREATE_TASK'
      ? { ...values, duration: durationInSeconds }
      : { ...props.task, ...values, duration: durationInSeconds };
    props.formSubmit(actionType, payload);
  },
})(TaskForm);

export default connect(null, mapDispatchToProps)(MyForm);
