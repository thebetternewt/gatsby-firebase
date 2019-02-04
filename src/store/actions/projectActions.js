import { CREATE_PROJECT, CREATE_PROJECT_ERROR } from './types'

export const createProject = project => async (
  dispatch,
  _,
  { getFirebase, getFirestore }
) => {
  // make async call to db
  const firestore = getFirestore()

  try {
    const result = await firestore.collection('projects').add({
      ...project,
      authorFirstName: 'Chris',
      authorLastName: 'Eady',
      authorId: 12345,
      createdAt: new Date(),
    })

    dispatch({
      type: CREATE_PROJECT,
      payload: result,
    })
  } catch (error) {
    dispatch({
      type: CREATE_PROJECT_ERROR,
      payload: { error },
    })
  }
}
