import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from '../actions/types'

const initState = {
  loading: false,
}

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case CREATE_PROJECT:
      return { ...state, loading: true }

    case CREATE_PROJECT_ERROR:
      return { ...state, loading: false }

    default:
      return state
  }
}

export default projectReducer
