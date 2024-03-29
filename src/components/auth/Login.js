import React from 'react';
import { selectAuthState } from '../../redux/selectors'
import { loginUserEvent, loginUserSuccess } from '../../redux/actions'

import { connect } from 'react-redux'
import { branch, renderComponent } from 'recompose'

import Spinner from '../common/Spinner'

const LoadingView = ({}) => (
  <div className="LoadingView">
    <div style={{ padding: '100px' }}>
      <Spinner />
    </div>
  </div>
);

let Login = ({ loggingIn, onLogin }) => (
  <div className="Login">
    <div className="text-center">
      <h1>Welcome</h1>
      <p className="lead text-muted">
        Please login
      </p>
      <button className="btn btn-success" onClick={onLogin}>Login with Demo</button>
    </div>
  </div>
);

Login = branch(
  ({ loggingIn }) => loggingIn,
  renderComponent(LoadingView)
)(Login)

Login = connect(
  (state, props) => ({
    loggingIn: selectAuthState(state).loggingIn
  }),
  (dispatch, ownProps) => ({
    onLogin: () => {
      dispatch(loginUserEvent())
      setTimeout(() => dispatch(loginUserSuccess({})), 1500)
    },
  })
)(Login)

export default Login;
