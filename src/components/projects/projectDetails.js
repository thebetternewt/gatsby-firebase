import React from 'react'

const ProjectDetails = ({ projectId }) => (
  <div className="container section project-details">
    <div className="card z-depth-1">
      <div className="card-content">
        <span className="card-title">Project Title - {projectId}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
          totam.
        </p>
      </div>

      <div className="card-action grey lighten-4 grey-text">
        <div>Posted by the Net Ninja</div>
        <div> 3rd February, 2019</div>
      </div>
    </div>
  </div>
)

export default ProjectDetails
