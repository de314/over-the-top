const makeActionCreator = (type, ...argNames) => (...args) => {
  const action = { type }
  argNames.forEach((arg, index) => action[argNames[index]] = args[index])
  return action
}

/* <<<<<<< AUTH >>>>>>>> */

export const LOGIN_USER_EVENT = 'LOGIN_USER_EVENT';
export const loginUserEvent = makeActionCreator(LOGIN_USER_EVENT)

export const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS';
export const loginUserSuccess = makeActionCreator(LOGIN_USER_SUCCESS, 'user')

export const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE';
export const loginUserFailure = makeActionCreator(LOGIN_USER_FAILURE, 'error')

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = makeActionCreator(LOGOUT_USER)

export const ADD_PLUGIN_AUTH = 'ADD_PLUGIN_AUTH'
export const addPluginAuth = makeActionCreator(ADD_PLUGIN_AUTH, 'key', 'access_token', 'meta')

export const REVOKE_PLUGIN_AUTH = 'REVOKE_PLUGIN_AUTH'
export const revokePluginAuth = makeActionCreator(REVOKE_PLUGIN_AUTH, 'key')

/* <<<<<<< DATE >>>>>>>> */

export const SET_DATE = 'SET_DATE';
export const setDate = makeActionCreator(SET_DATE, 'date')
