import * as Types from './types'

const initialState = {
  server: {},
  configuration: {
    clientId: 'flight-director',
    serverBaseUrl: 'http://localhost:3000',
    stationName: 'Flight Director'
  }
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
    case Types.REQUEST_ACCEPTED_BY_SERVER:
      console.debug('Request accepted:', action.method, action.url)
      return state
    case Types.SERVER_STATE_LOAD_FAILED:
    case Types.REQUEST_ACCEPTED_BY_SERVER:
      console.error('Error making request to', action.method, action.url)
      console.error(action.error)
      return state
    case Types.STATION_CONFIGURATION_UPDATED:
      return {...state, configuration: action.configuration}
    default:
      return state
  }
}
