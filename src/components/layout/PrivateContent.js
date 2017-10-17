import React from 'react';
import { selectIsAnon } from '../../redux/selectors'

import { connect } from 'react-redux';
import { branch, renderNothing } from 'recompose'
import { withRouter } from 'react-router-dom'

import { Switch, Route } from 'react-router-dom'
import Sidebar from './Sidebar'
import Home from '../home/Home'
import Page404 from '../common/Page404'
import AddPlugin from '../plugins/AddPlugin'
import OAuthHandler from '../auth/OAuthHandler'
import PluginsHome from '../plugins/PluginsHome'

import './PrivateContent.css'

let PrivateContent = () => (
  <div className="PrivateContent">
    <div className="row">
      <div className="col-lg-3 col-xl-2 sidebar-container">
        <Sidebar />
      </div>
      <div className="col-lg-9 col-xl-10 content-container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/plugins" component={PluginsHome} />
          <Route exact path="/plugins/add" component={AddPlugin} />
          <Route exact path="/oauth/callback" component={OAuthHandler} />
          <Route component={Page404} />
        </Switch>
      </div>
    </div>
  </div>
);

PrivateContent = branch(
  ({ isAnon }) => isAnon,
  renderNothing
)(PrivateContent)

PrivateContent = connect(
  (state, props) => ({
    ...props,
    isAnon: selectIsAnon(state),
  }),
  (dispatch, ownProps) => ({})
)(PrivateContent)

export default withRouter(PrivateContent)
