import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from '../actions/types'

const initState = { loading: false }

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, loading: true }

    case LOG_IN_SUCCESS:
      console.log('login success!')
      return { ...state, loading: false }

    case LOG_IN_ERROR:
      console.log(action.error)
      return { ...state, loading: false, error: action.error }

    default:
      return state
  }
}

export default authReducer
