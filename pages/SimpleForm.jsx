import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';

const SimpleForm = () => {
  return (
   <Formik
      initialValues={{
        name: '',
        email: '',
        phone: '',
        address: ''
      }}
      validate={values => {
        const errors = {};
        const requiredFields = ['name', 'email', 'phone', 'address'];
        requiredFields.forEach(field => {
          if (!values[field]) {
            errors[field] = 'Required';
          }
        });
        if (values.email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
          errors.email = 'Invalid email address';
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
      {({ isSubmitting }) => (
        <Form className="flex flex-col">
          <Field className="p-2 flex-1" type="text" name="name" placeholder="Name" />
          <ErrorMessage name="name" component="div" className="text-red-500 p-2" />
          <Field className="p-2 flex-1" type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className="text-red-500 p-2" />
          <Field className="p-2 flex-1" type="phone" name="phone" placeholder="Phone Number" />
          <ErrorMessage name="phone" component="div" className="text-red-500 p-2" />
          <Field className="p-2 flex-1" as="textarea" name="address" placeholder="Address" />
          <ErrorMessage name="address" component="div" className="text-red-500 p-2" />
          <button className="p-2" type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default SimpleForm;