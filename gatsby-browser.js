import './src/styles/global.scss'
import 'bootstrap'

import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './src/reducers/index'

// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  const store = createStore(reducer)
  return <Provider store={store}>{element}</Provider>
}
