import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import rootReducer from './reducers/rootReducer'
import App from './components/App'

const initialState = {}

const store = createStore(rootReducer, initialState)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
