import _ from 'lodash'
import moment from 'moment'
import DateService from '../../services/DateService'

import { SET_DATE } from '../actions'

const selectSlice = (state) => _.get(state, 'date')

export const selectDate = (state) => selectSlice(state)

const now = moment([2012,5,15])

const defaultState = {
  initialized: false,
  val: now,
  scheduleDef: DateService.scheduleDefs.dog,
  summary: DateService.getSummary(now, DateService.scheduleDefs.dog)
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case SET_DATE: {
     return {
       ...state,
       initialized: true,
       val: action.date,
       summary: DateService.getSummary(action.date, state.scheduleDef) // TODO: NOT PURE!!! There HAS to be a better way!
     }
    }

    default:
  }
  return state;
}
