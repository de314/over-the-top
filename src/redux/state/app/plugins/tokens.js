import _ from 'lodash'
import { ADD_PLUGIN_AUTH, REVOKE_PLUGIN_AUTH } from '../../../actions'

const selectSlice = (state) => _.get(state, 'app.plugins.tokens')

export const selectPluginTokens = (state) => selectSlice(state)
export const selectPluginTokensByKey = (state, key) => selectSlice(state)[key]

const defaultState = {
  'imgur-123': {
    token: '62c801afd9a00845c2a16035fef212c42fef2b8f',
    expiresIn: 315360000000,
    expiresAt: 1823578503380,
    meta: {
      access_token: '62c801afd9a00845c2a16035fef212c42fef2b8f',
      expires_in: '315360000',
      token_type: 'bearer',
      refresh_token: 'ebf8aa647dfe4ee33d9d5ed62044330fbedf53ee',
      account_username: 'tpofofntsftfensntttefst',
      account_id: '3232910',
      state: 'imgur-123'
    }
  },
  'google-123': {
    token: 'ya29.GlvnBDmxrThOT4UIxXD2GrPVCrv5JQTSdJ584udQzwwOa635YN2CXuCa3FAba0GXIiVCsPSGo_FHXBfcFN2Cw0Gy5znCu5DmIeLo6JJluTixSpGZKjH1Eec0yupk',
    expiresIn: 3600000,
    expiresAt: 1508224815590,
    meta: {
      state: 'google-123',
      access_token: 'ya29.GlvnBDmxrThOT4UIxXD2GrPVCrv5JQTSdJ584udQzwwOa635YN2CXuCa3FAba0GXIiVCsPSGo_FHXBfcFN2Cw0Gy5znCu5DmIeLo6JJluTixSpGZKjH1Eec0yupk',
      token_type: 'Bearer',
      expires_in: '3600'
    }
  },
  'reddit-123': {
    token: 'bIWnoZ7JEx7N0xh2niJTj9VkKgc',
    expiresIn: 3600000,
    expiresAt: 1508224917071,
    meta: {
      access_token: 'bIWnoZ7JEx7N0xh2niJTj9VkKgc',
      token_type: 'bearer',
      state: 'reddit-123',
      expires_in: '3600',
      scope: 'identity'
    }
  },
}

export default (state = defaultState, action) => {
  switch (action.type) {

    case ADD_PLUGIN_AUTH: {
      const expiresIn = parseInt(action.meta.expires_in) * 1000
      return {
        ...state,
        [action.key]: {
          token: action.access_token,
          expiresIn,
          expiresAt: new Date().getTime() + expiresIn,
          meta: action.meta,
        }
      }
    }

    case REVOKE_PLUGIN_AUTH: {
      return {
        ...state,
        [action.key]: null,
      }
    }

    default:
  }
  return state;
}
