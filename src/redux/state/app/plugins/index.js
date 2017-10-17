import { combineReducers } from 'redux'
import config from './config'
import tokens from './tokens'

export default combineReducers({
  config,
  tokens,
})

export * from './config'
export * from './tokens'
