import { combineReducers, createStore } from 'redux'
import { reducer as threejsr } from '@edwmurph/threejsr'

const reducer = combineReducers({
  threejsr
})

export default preloadedState => {
  return createStore(reducer, preloadedState)
}
