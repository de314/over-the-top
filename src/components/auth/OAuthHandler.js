import React from 'react'
import _ from 'lodash';
import OAuthService from '../../services/OAuthService'
import { addPluginAuth } from '../../redux/actions'

import { withRouter } from 'react-router-dom'
import { branch, compose, lifecycle, renderComponent, withProps } from 'recompose'
import { connect } from 'react-redux'

import Spinner from '../common/Spinner'

const OAuthError = ({ qp: { error } }) => (
  <div className="OAuthError">
    <div className="jumbotron text-center">
      <h1 className="danger">{error} :(</h1>
      <p className="lead">Try again later...</p>
    </div>
  </div>
);

let OAuthHandler = ({ location, history, qp }) => (
  <div className="OAuthHandler">
    <div className="text-center">
      <h1>Processing Plugin...</h1>
      <div style={{ padding: '100px' }}>
        <Spinner />
      </div>
    </div>
  </div>
);

OAuthHandler = compose(
  withProps(
    props => ({ qp: OAuthService.parseQueryParams(props.location) })
  ),
  lifecycle({
    componentWillMount() {
      const { qp, onToken, history } = this.props
      if (_.isNil(qp.error)) {
        onToken(qp.state, qp.access_token, qp)
        setTimeout(
          () => history.push('/plugins'),
          1500
        )
      } else {
        console.error(qp.error);
      }
    },
  }),
  branch(
    ({ qp: { error } }) => !_.isNil(error),
    renderComponent(OAuthError)
  )
)(OAuthHandler)

OAuthHandler = connect(
  () => ({}),
  (dispatch) => ({
    onToken: (key, token, meta) => dispatch(addPluginAuth(key, token, meta))
  })
)(OAuthHandler)

export default withRouter(OAuthHandler)
