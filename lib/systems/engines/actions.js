import { postToServer } from '../../station/actions'

export let setEngineSpeed = (engine, newSpeed) => (dispatch) => {
  return postToServer(dispatch)(`/api/systems/${engine}/speed`, {value: newSpeed})
}
