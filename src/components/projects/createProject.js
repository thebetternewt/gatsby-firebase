import React from 'react'
import { connect } from 'react-redux'
import { Formik } from 'formik'
import { createProject } from '../../store/actions/projectActions'

const CreateProject = props => {
  return (
    <div className="container">
      <Formik
        initialValues={{ title: '', content: '' }}
        onSubmit={values => props.createProject(values)}
      >
        {({ values, handleChange, handleBlur, handleSubmit }) => (
          <form onSubmit={handleSubmit} className="white">
            <h5 className="grey-text text-darken-3">Create New Project</h5>
            <div className="input-field">
              <label htmlFor="title">Title</label>
              <input
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
            </div>
            <div className="input-field">
              <label htmlFor="content">Project Content</label>
              <textarea
                name="content"
                className="materialize-textarea"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.content}
              />
            </div>

            <button
              type="submit"
              className="btn orange lighten-1"
              // disabled={isSubmitting}
            >
              Create
            </button>
          </form>
        )}
      </Formik>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    project: state.project,
  }
}

export default connect(
  mapStateToProps,
  { createProject }
)(CreateProject)
