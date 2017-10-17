import _ from 'lodash';

const qpPattern = /([^&=]+)=([^&]*)/g;

const parseQueryParams = (location = window.location) => {
  const params = {}
  let m
  let queryString = location.hash.substring(1)
  while (m = qpPattern.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  queryString = location.search.substring(1)
  while (m = qpPattern.exec(queryString)) {
    params[decodeURIComponent(m[1])] = decodeURIComponent(m[2]);
  }
  return params
}

const buildAuthorizationUrl = (pluginId, { template, params }) => {
  let url = template + '?'
  _.keys(params).forEach(key => url += `${key}=${params[key]}&`)
  url += `state=${pluginId}`
  return url;
}

export default {
  parseQueryParams,
  buildAuthorizationUrl,
}
