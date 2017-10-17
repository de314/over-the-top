import { combineReducers } from 'redux'
import app from './app'
import date from './date'

export default combineReducers({
  app,
  date,
})

export * from './app'
export * from './date'
