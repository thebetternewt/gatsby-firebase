import React from 'react'
import ProjectSummary from './projectSummary'
import { Link } from 'gatsby'

const ProjectList = ({ projects }) => {
  const projectSummaries = projects.map(project => (
    <Link key={project.id} to={`/project/${project.id}`}>
      <ProjectSummary project={project} />
    </Link>
  ))

  return <div className="section">{projectSummaries}</div>
}

export default ProjectList
