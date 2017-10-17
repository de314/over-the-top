import React from 'react';
import _ from 'lodash';
import { selectPluginTokens, selectPluginConfigs } from '../../redux/selectors'

import { connect } from 'react-redux'

import PluginCard from './PluginCard'

let PluginsHome = ({ configs, tokens }) => (
  <div className="PluginsHome">
    <div className="row">
      {_.keys(configs).map(k => (
        <div className="col" key={k}>
          <PluginCard config={configs[k]} token={tokens[k]} />
        </div>
      ))}
    </div>
  </div>
);

PluginsHome = connect(
  state => ({
    configs: selectPluginConfigs(state),
    tokens: selectPluginTokens(state)
  })
)(PluginsHome)

export default PluginsHome;
