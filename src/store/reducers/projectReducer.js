import { CREATE_PROJECT } from '../actions/types'

const initState = {
  projects: [
    { id: '1', title: 'help', content: 'asdf asdf asdf asdf' },
    { id: '2', title: 'go', content: 'asdf asdf asdf asdf' },
    { id: '3', title: 'run', content: 'asdf asdf asdf asdf' },
  ],
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      console.log('created project:', action.project)
      break

    // default:
    //   state
  }
  return state
}

export default projectReducer
