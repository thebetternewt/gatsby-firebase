import React from 'react'
import { Formik } from 'formik'
import { connect } from 'react-redux'
import { logIn } from '../../store/actions/authActions'
import Loader from '../loader'

const LogIn = props => {
  const { loading, authError } = props
  console.log(props)

  if (loading) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content center">
            <Loader />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={values => props.logIn(values)}
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
            {authError && (
              <div className="red-text center">
                <p>{authError.message}</p>
              </div>
            )}
          </form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => ({
  loading: state.auth.loading,
  authError: state.auth.error,
})

export default connect(
  mapStateToProps,
  { logIn }
)(LogIn)
