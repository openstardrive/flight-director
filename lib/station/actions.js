import * as Types from './types'
import axios from 'axios'

let http = axios.create({})
const get = async (url, config) => (await http.get(url, config)).data

let getServerState = (get) => {
    return async (dispatch) => {
      try {
        let serverState = await get(`http://localhost:3000/api/state`)
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
