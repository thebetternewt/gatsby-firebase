import React from 'react'
import ProjectSummary from './projectSummary'

const ProjectList = ({ projects }) => {
  const projectSummaries = projects.map(project => (
    <ProjectSummary key={project.id} project={project} />
  ))

  return <div className="section">{projectSummaries}</div>
}

export default ProjectList
