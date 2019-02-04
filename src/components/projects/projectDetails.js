import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const ProjectDetails = ({ project }) => {
  if (!project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-1">
          <div className="card-content" style={{ textAlign: 'center' }}>
            <div class="preloader-wrapper small active">
              <div class="spinner-layer spinner-green-only">
                <div class="circle-clipper left">
                  <div class="circle" />
                </div>
                <div class="gap-patch">
                  <div class="circle" />
                </div>
                <div class="circle-clipper right">
                  <div class="circle" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container section project-details">
      <div className="card z-depth-1">
        <div className="card-content">
          <span className="card-title">{project.title}</span>
          <p>{project.content}</p>
        </div>

        <div className="card-action grey lighten-4 grey-text">
          <div>
            Posted by the {project.authorFirstName} {project.authorLastName}
          </div>
          <div> {project.createdAt.seconds}</div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  console.log(state)
  const { projectId } = ownProps
  const { projects } = state.firestore.data
  const project = projects ? projects[projectId] : null
  return {
    project,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: 'projects' }])
)(ProjectDetails)
