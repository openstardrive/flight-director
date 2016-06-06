import { postToServer, putToServer, deleteFromServer } from '../../station/actions'

export let createContact = (contact) => (dispatch) => {
  return postToServer(dispatch)(`/api/systems/sensors/contacts`, contact)
}

export let updateContact = (contact, destinations, speed) => (dispatch) => {
  let updated = {
    ...contact,
    destinations
  }
  let start = contact.position;
  updated.destinations.forEach(d => {
    if (!d.arriveInMilliseconds) {
      let next = {x: d.x, y: d.y}
      let distance = calculateDistance(start, next)
      console.log(start, next, distance, speed, Math.round(distance * speed))
      d.arriveInMilliseconds = Math.round(speed * distance)
      start = next
    }
  })
  return putToServer(dispatch)(`/api/systems/sensors/contacts/${contact.id}`, updated)
}

let calculateDistance = (p1, p2) => {
  let a = p2.x - p1.x
  let b = p2.y - p1.y
  return Math.sqrt(a*a + b*b)
}

export let removeContact = (contact) => (dispatch) => {
  return deleteFromServer(dispatch)(`/api/systems/sensors/contacts/${contact.id}`)
}
