import * as Types from './types'
import axios from 'axios'

let http = axios.create({
  headers: {'client-id': ''}
})
const get = async (url, config) => (await http.get(url, config)).data
const post = async (url, config) => (await http.post(url, config)).data
const put = async (url, config) => (await http.put(url, config)).data
const del = async (url, config) => (await http.delete(url, config)).data

let serverBaseUrl = null;

export let updateConfiguration = (newConfig) => {
  serverBaseUrl = newConfig.serverBaseUrl
  http.defaults.headers['client-id'] = newConfig.clientId;
  putToServer(() => {})(`/api/clients/${newConfig.clientId}`, {name: newConfig.stationName})
}

let getServerState = (get) => {
    return async (dispatch) => {
      try {
        let serverState = await get(`${serverBaseUrl}/api/state`)
        dispatch({type: Types.SERVER_STATE_LOADED, serverState})
      }
      catch(error) {
        dispatch({type: Types.SERVER_STATE_LOAD_FAILED, error})
      }
    }
}

let pollInterval;
export let startPollingServer = (milliseconds) => {
  return (dispatch) => {
    console.log('starting to poll server', serverBaseUrl, 'every', milliseconds, 'ms')
    pollInterval = setInterval(() => {
      getServerState(get)(dispatch)
    }, milliseconds)
  }
}

export let _postToServer = (post) => (dispatch) => {
  return async (url, data) => {
    try {
      await post(`${serverBaseUrl}${url}`, data)
      dispatch({type: Types.REQUEST_ACCEPTED_BY_SERVER, url, method: "POST"})
    }
    catch(error) {
      dispatch({type: Types.REQUEST_REJECTED_BY_SERVER, error, url, method: "POST"})
    }
  }
}

export let postToServer = _postToServer(post)

export let _putToServer = (put) => (dispatch) => {
  return async (url, data) => {
    try {
      await put(`${serverBaseUrl}${url}`, data)
      dispatch({type: Types.REQUEST_ACCEPTED_BY_SERVER, url, method: "PUT"})
    }
    catch(error) {
      dispatch({type: Types.REQUEST_REJECTED_BY_SERVER, error, url, method: "PUT"})
    }
  }
}

export let putToServer = _putToServer(put)

export let _deleteFromServer = (del) => (dispatch) => {
  return async (url) => {
    try {
      await del(`${serverBaseUrl}${url}`)
      dispatch({type: Types.REQUEST_ACCEPTED_BY_SERVER, url, method: "DELETE"})
    }
    catch(error) {
      dispatch({type: Types.REQUEST_REJECTED_BY_SERVER, error, url, method: "DELETE"})
    }
  }
}

export let deleteFromServer = _deleteFromServer(del)
