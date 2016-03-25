import { putToServer } from '../../station/actions'

export let updateContact = (contact, destinations, speed) => (dispatch) => {
  let updated = {
    ...contact,
    destinations
  }
  updated.destinations.forEach(d => d.arriveInMilliseconds = speed)
  return putToServer(dispatch)(`/api/systems/sensors/contacts/${contact.id}`, updated)
}
