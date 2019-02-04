import React from 'react'
import { Router, Redirect } from '@reach/router'
import ProjectDetails from '../../components/projects/projectDetails'
import Layout from '../../components/layout'

const ProjectIndex = ({ location, navigate }) => {
  console.log(location)
  if (location.pathname === '/project' || location.pathname === '/project/') {
    return <Redirect to="/" noThrow />
  }

  return (
    <Layout>
      <Router>
        <ProjectDetails path="project/:projectId" />
      </Router>
    </Layout>
  )
}

export default ProjectIndex
