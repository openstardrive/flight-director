import * as Types from '../station/types'

export let updateConfiguration = (configuration) => (dispatch) => {
    dispatch({type: Types.STATION_CONFIGURATION_UPDATED, configuration})
}