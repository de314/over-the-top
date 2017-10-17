import _ from 'lodash'
import { LOGIN_USER_EVENT, LOGIN_USER_SUCCESS, LOGIN_USER_FAILURE, LOGOUT_USER } from '../../actions'

const selectSlice = (state) => _.get(state, 'app.auth')

export const selectAuthState = (state) => selectSlice(state)

export const selectAuthUser = (state) => selectSlice(state).user

export const selectIsLoggingIn = (state) => selectSlice(state).user

export const selectLoginError = (state) => selectSlice(state).error

export const selectIsAnon = (state) => _.isNil(selectAuthUser(state))

const defaultState = {
  loggingIn: false,
  user: {},
  error: null,
};

export default (state = defaultState, action) => {
  switch (action.type) {

    case LOGIN_USER_EVENT: {
     return {
       ...defaultState,
       loggingIn: true,
     }
    }

    case LOGIN_USER_SUCCESS: {
     return {
       ...defaultState,
       user: action.user,
     }
    }

    case LOGIN_USER_FAILURE: {
     return {
       ...defaultState,
       error: action.error,
     }
    }

    case LOGOUT_USER: {
      return {
        ...defaultState,
      }
    }

    default:
  }
  return state;
}
