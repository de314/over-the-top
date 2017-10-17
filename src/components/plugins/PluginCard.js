import React from 'react';
import _ from 'lodash';
import moment from 'moment'
import { revokePluginAuth } from '../../redux/actions'
import OAuthService from '../../services/OAuthService'

import { branch, renderComponent, withProps } from 'recompose'
import { connect } from 'react-redux'

import './PluginCard.css'

let PluginCard = ({ config, token, hasToken, hasValidToken, tokenState, onRevokeToken }) => (
  <div className={`PluginCard ${tokenState}`}>
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{config.title}</h4>
        <h6 className="card-subtitle mb-2 text-muted">{config.id}</h6>
        {!hasToken ? '' : (<p>Expires {moment(token.expiresAt).fromNow()}</p>)}
        {!hasValidToken
          ? ''
          : (<button className="btn btn-danger btn-sm mr-2" onClick={()=>onRevokeToken(config.id)}>Revoke</button>)
        }
        <a href={OAuthService.buildAuthorizationUrl(config.id, config.authorizationUrl)} className="btn btn-success btn-sm">
          {hasToken ? 'Refresh' : 'Add Plugin'}
        </a>
      </div>
    </div>
  </div>
);

PluginCard = withProps(({ config, token }) => {
  const hasToken = !_.isNil(token)
  const hasValidToken = hasToken && !_.isNil(token.expiresAt) && new Date().getTime() < token.expiresAt
  return {
    hasToken,
    hasValidToken,
    tokenState: !hasToken ? 'new-plugin' : hasValidToken ? 'valid-plugin' : 'invalid-plugin',
  }
})(PluginCard)

PluginCard = connect(
  (state, props) => ({ ...props }),
  dispatch => ({
    onRevokeToken: (key) => dispatch(revokePluginAuth(key))
  })
)(PluginCard)

export default PluginCard;
