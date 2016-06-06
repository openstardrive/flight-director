import * as Types from './types'

const initialState = {
  server: {}
}

const mapServerState = (serverState, state) => {
  return {
    ...state,
    server: serverState
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case Types.SERVER_STATE_LOADED:
      return mapServerState(action.serverState, state)
      return state
    case Types.REQUEST_ACCEPTED_BY_SERVER:
      console.debug('Request accepted:', action.method, action.url)
      return state
    case Types.SERVER_STATE_LOAD_FAILED:
    case Types.REQUEST_ACCEPTED_BY_SERVER:
      console.error('Error making request to', action.method, action.url)
      console.error(action.error)
      return state
    default:
      return state
  }
}
