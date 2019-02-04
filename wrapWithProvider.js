import React from 'react'
import { Provider } from 'react-redux'

import createStore from './src/store/createStore'

const store = createStore()

export default ({ element }) => <Provider store={store}>{element}</Provider>
