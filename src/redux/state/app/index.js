import { combineReducers } from 'redux'
import auth from './auth'
import plugins from './plugins'

export default combineReducers({
  auth,
  plugins,
})

export * from './auth'
export * from './plugins'
