import {
  createStore as reduxCreateStore,
  applyMiddleware,
  compose,
} from 'redux'
import thunk from 'redux-thunk'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'

import fbConfig from '../config/fbConfig'

import rootReducer from './reducers/rootReducer'

const initialState = {}
const middleware = [thunk.withExtraArgument({ getFirebase, getFirestore })]

const createStore = () =>
  reduxCreateStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      reduxFirestore(fbConfig),
      reactReduxFirebase(fbConfig),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  )

export default createStore
