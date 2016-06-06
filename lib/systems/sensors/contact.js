import React from 'react'

export default class Contact extends React.Component {
  onContactMouseDown(event, contact) {
    this.props.onSelected(contact, event.shiftKey)
  }

  buildDestinations(contact) {
    let destinations = []
    let scaleMultiplier = this.props.scaleMultiplier
    let start = {x: contact.position.x, y: contact.position.y}
    contact.destinations.forEach((d, i) => {
      destinations.push(<line key={`${contact.id}-destination-${i}`} x1={start.x * scaleMultiplier} y1={start.y * scaleMultiplier} x2={d.x * scaleMultiplier} y2={d.y * scaleMultiplier} stroke="grey" strokeWidth=".003" strokeDasharray=".01,.01"/>)
      start.x = d.x
      start.y = d.y
    })
    return destinations
  }

  render() {
    const textSpacer = .04;
    let contact = this.props.contact
    let scaleMultiplier = this.props.scaleMultiplier
    let name = {x: contact.position.x * scaleMultiplier + textSpacer, y: contact.position.y * scaleMultiplier + textSpacer, anchor: "start"}
    if (contact.position.x > 0) {
      name.x -= textSpacer * 2
      name.anchor = "end"
    }
    if (contact.position.y > 0) {
      name.y -= textSpacer
    }

    return (
      <g>
        {this.buildDestinations(contact)}
        <text x={name.x} y={name.y} textAnchor={name.anchor} key={`${contact.id}-name`}>{contact.name}</text>
        <circle className="contact" key={contact.id} cx={contact.position.x * scaleMultiplier} cy={contact.position.y * scaleMultiplier} r=".03" stroke="none" fill="yellow" onMouseDown={e => this.onContactMouseDown(e, contact)}/>
      </g>
    )
  }
}
