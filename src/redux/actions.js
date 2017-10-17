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

/* <<<<<<< DATE >>>>>>>> */

export const SET_DATE = 'SET_DATE';
export const setDate = makeActionCreator(SET_DATE, 'date')
