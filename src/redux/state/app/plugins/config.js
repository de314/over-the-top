import _ from 'lodash'
// import { ACTION_NAME } from '../actions'

const selectSlice = (state) => _.get(state, 'app.plugins.config')

export const selectPluginConfigs = (state) => selectSlice(state)
export const selectPluginConfigsByKey = (state, key) => selectSlice(state)[key]

const defaultState = {
  'imgur-123': {
    id: 'imgur-123',
    title: 'Imgur',
    manageUrl: 'https://imgur.com/account/settings/apps',
    docsUrls: [
      'https://apidocs.imgur.com/#authorization-and-oauth',
      'https://api.imgur.com/oauth2/addclient',
    ],
    authorizationUrl: {
      template: 'https://api.imgur.com/oauth2/authorize',
      params: {
        client_id: '1f8c48f9f2e3689',
        response_type: 'token',
      }
    }
  },
  'reddit-123': {
    id: 'reddit-123',
    title: 'Reddit',
    manageUrl: 'https://www.reddit.com/prefs/apps',
    docsUrls: [
      'https://github.com/reddit/reddit/wiki/OAuth2',
      'https://www.reddit.com/dev/api/oauth#GET_api_v1_scopes',
    ],
    authorizationUrl: {
      template: 'https://www.reddit.com/api/v1/authorize',
      params: {
        client_id: '3F3czpKtH_2RQA',
        response_type: 'token',
        redirect_uri: 'http://localhost:3000/oauth/callback',
        scope: 'identity'
      }
    }
  },
  'google-123': {
    id: 'google-123',
    title: 'Google',
    manageUrl: 'https://console.developers.google.com/apis/credentials',
    docsUrls: [
      'https://developers.google.com/identity/protocols/OAuth2UserAgent',
      'https://developers.google.com/identity/protocols/googlescopes',
    ],
    authorizationUrl: {
      template: 'https://accounts.google.com/o/oauth2/v2/auth',
      params: {
        scope: 'profile email',
        response_type: 'token',
        redirect_uri: 'http://localhost:3000/oauth/callback',
        client_id: '1064927344211-98ik8vqi387em7ugm2q29h3e61euuhod.apps.googleusercontent.com',
      }
    }
  },
};

export default (state = defaultState, action) => {
  switch (action.type) {

    //case ACTION_NAME: {
    //  return {
    //    ...state,
    //    testing: action.testing
    //  }
    //}

    default:
  }
  return state;
}
