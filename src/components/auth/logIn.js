import React from 'react'
import { Formik } from 'formik'

const LogIn = () => {
  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => console.log(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Sign In</h5>
            <div className="input-field">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </div>
            <div className="input-field">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </div>
            <button
              type="submit"
              className="btn orange lighten-1"
              // disabled={isSubmitting}
            >
              Log In
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

export default LogIn
