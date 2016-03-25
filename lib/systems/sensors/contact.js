import React from 'react'

export default class Contact extends React.Component {
  buildDestinations(contact) {
    let destinations = []
    let start = {x: contact.position.x, y: contact.position.y}
    contact.destinations.forEach((d, i) => {
      destinations.push(<line key={`${contact.id}-destination-${i}`} x1={start.x} y1={start.y} x2={d.x} y2={d.y} stroke="grey" strokeWidth="1" strokeDasharray="5,5"/>)
      start.x = d.x
      start.y = d.y
    })
    return destinations
  }

  render() {
    let contact = this.props.contact
    let name = {x: contact.position.x + 7, y: contact.position.y + 12, anchor: "start"}
    if (contact.position.x > 0) {
      name.x -= 14
      name.anchor = "end"
    }
    if (contact.position.y > 0) {
      name.y -= 14
    }

    return (
      <g>
        {this.buildDestinations(contact)}
        <text x={name.x} y={name.y} textAnchor={name.anchor} key={`${contact.id}-name`}>{contact.name}</text>
        <circle className="contact" key={contact.id} cx={contact.position.x} cy={contact.position.y} r="5" stroke="none" fill="yellow"/>
      </g>
    )
  }
}
