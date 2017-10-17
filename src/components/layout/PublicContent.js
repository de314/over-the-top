import React from 'react';
import { selectIsAnon } from '../../redux/selectors'

import { connect } from 'react-redux';
import { branch, renderNothing } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
import Home from '../home/Home'
import Page404 from '../common/Page404'
import Login from '../auth/Login'

import './PublicContent.css'

let PublicContent = ({}) => (
  <div className="PublicContent">
    <Switch>
      <Route component={Login} />
    </Switch>
  </div>
);

PublicContent = branch(
  ({ isAnon }) => !isAnon,
  renderNothing
)(PublicContent)

PublicContent = connect(
  (state, props) => ({
    ...props,
    isAnon: selectIsAnon(state),
  }),
  (dispatch, ownProps) => ({})
)(PublicContent)

export default withRouter(PublicContent)
