import { CREATE_PROJECT } from './types'

export const createProject = project => dispatch => {
  // make async call to db
  dispatch({
    type: CREATE_PROJECT,
    project,
  })
}
