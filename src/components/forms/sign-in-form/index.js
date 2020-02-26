import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Link } from 'react-router-dom';
import './sign-in-form.scss';

const SignInForm = () => {
  return (
    <div className="container">
      <Formik initialValues={{ email: '', password: '' }} onSubmit={() => {}}>
        <Form className="signIn-form">
          <div className="signIn-form__group">
            <Field name="email" type="email" placeholder="E-mail" />
            <ErrorMessage
              name="email"
              className="invalid-feedback"
              component="div"
            />
          </div>
          <div className="signIn-form__group">
            <Field name="password" type="password" placeholder="Пароль" />
            <ErrorMessage
              name="password"
              className="invalid-feedback"
              component="div"
            />
          </div>

          <button className="red-btn" type="submit">
            Войти
          </button>

          <Link to="/sign-up" className="signIn-form--link">
            Зарегистрироваться ⟶
          </Link>
        </Form>
      </Formik>
    </div>
  );
};

export default SignInForm;