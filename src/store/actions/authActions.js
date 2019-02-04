import { LOG_IN, LOG_IN_SUCCESS, LOG_IN_ERROR } from './types'

export const logIn = credentials => async (dispatch, _, { getFirebase }) => {
  dispatch({ type: LOG_IN })
  const firebase = getFirebase()

  try {
    const result = await firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)

    dispatch({ type: LOG_IN_SUCCESS })
  } catch (error) {
    dispatch({ type: LOG_IN_ERROR, error })
  }
}
