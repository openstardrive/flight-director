import * as Types from './types'
import axios from 'axios'

let http = axios.create({})
const get = async (url, config) => (await http.get(url, config)).data
const post = async (url, config) => (await http.post(url, config)).data

let serverBaseUrl = 'http://localhost:3000';

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
    console.log('starting to poll server every', milliseconds, 'ms')
    pollInterval = setInterval(() => {
      getServerState(get)(dispatch)
    }, milliseconds)
  }
}

export let _postToServer = (post) => (dispatch) => {
  return async (url, data) => {
    try {
      await post(`${serverBaseUrl}${url}`, data)
      dispatch({type: Types.REQUEST_ACCEPTED_BY_SERVER, url})
    }
    catch(error) {
      dispatch({type: Types.REQUEST_REJECTED_BY_SERVER, error})
    }
  }
}

export let postToServer = _postToServer(post)
