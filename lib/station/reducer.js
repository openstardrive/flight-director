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
    case Types.SERVER_STATE_LOAD_FAILED:
      console.error(action.error)
      return state
    default:
      return state
  }
}
