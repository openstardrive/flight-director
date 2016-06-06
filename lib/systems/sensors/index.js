import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid'
import Remove from './remove'
import Contact from './contact'
import { createContact, updateContact, removeContact } from './actions'
require('./index.css')

class Sensors extends React.Component {
  state = {
    rect: null,
    movingContact: null,
    nextDestination: null,
    destinations: [],
    inCreateMode: false
  };

  scaleMultiplier = .001

  toggleCreateMode() {
    this.setState({...this.state, inCreateMode: !this.state.inCreateMode})
  }

  createNewContact(position) {
    let name = document.getElementById('new-contact-name').value || 'Unknown'
    let contact = {name, position}
    this.props.dispatch(createContact(contact))
  }

  onMouseEnter(e) {
    let rect = e.target.getBoundingClientRect()
    this.setState({...this.state, rect})
  }

  onContactSelected(contact, append) {
    let destinations = append ? contact.destinations : []
    this.setState({...this.state, movingContact: contact.id, destinations})
  }

  getPositionFromEvent(event) {
    return {
      x: (event.clientX - this.state.rect.left) * 5 - 1000,
      y: (event.clientY - this.state.rect.top) * 5 - 1000
    }
  }

  moveContact(event) {
    if (this.state.movingContact) {
      let nextDestination = this.getPositionFromEvent(event)
      this.setState({...this.state, nextDestination})
    }
  }

  onMouseUp(event) {
    if (this.state.inCreateMode) {
      this.createNewContact(this.getPositionFromEvent(event))
      this.toggleCreateMode()
      return
    }
    if (this.state.movingContact) {
      if (event.target.getAttribute('data-role') === 'remove-contact') {
        let contact = this.getContactById(this.state.movingContact)
        this.props.dispatch(removeContact(contact))
        this.stopDragging()
        return
      }

      let destinations = this.state.destinations.concat([this.state.nextDestination])
      if (event.shiftKey) {
        this.setState({...this.state, destinations})
      } else {
        let contact = this.getContactById(this.state.movingContact)
        let speed = parseInt(document.getElementById('sensor-contact-speed').value, 10)
        this.props.dispatch(updateContact(contact, destinations, speed))
        this.stopDragging()
      }
    }
  }

  stopDragging() {
    this.setState({...this.state, movingContact: null, nextDestination: null, destinations: []})
  }

  getContactById(id) {
    return this.props.sensors.contacts.find(x => x.id == id)
  }

  renderDragLines() {
    if (this.state.movingContact && this.state.nextDestination) {
      let current = this.getContactById(this.state.movingContact).position;
      let next
      let lines = []

      this.state.destinations.forEach((d, i) => {
        next = d
        lines.push(<line key={`destination-${i}`} className="dragline" x1={current.x * this.scaleMultiplier} y1={current.y * this.scaleMultiplier} x2={next.x * this.scaleMultiplier} y2={next.y * this.scaleMultiplier}/>)
        current = d
      })

      next = this.state.nextDestination;
      lines.push(<line key="destination-n" className="dragline" x1={current.x * this.scaleMultiplier} y1={current.y * this.scaleMultiplier} x2={next.x * this.scaleMultiplier} y2={next.y * this.scaleMultiplier}/>)

      return (
        <g>
          {lines}
        </g>
      )
    }
    return null
  }

  render() {
    if (!this.props.sensors) {
      return null
    }

    return (
      <div id="sensors" className="system">
        <h2>Sensors</h2>
        <svg width={400} height={400} viewBox="-1 -1 2 2" onMouseEnter={e => this.onMouseEnter(e)} onMouseMove={e => this.moveContact(e)} onMouseUp={e => this.onMouseUp(e)}>
          <Grid/>
          <Remove/>
          <g>
            {this.props.sensors.contacts.map(contact => <Contact key={contact.id} scaleMultiplier={this.scaleMultiplier} contact={contact} onSelected={(x, y) => this.onContactSelected(x, y)}/>)}
          </g>
          {this.renderDragLines()}
        </svg>
        <div>
          <span className="label">New contact:</span>
          <input type="text" id="new-contact-name" placeholder="Unknown"/>
          <button className={this.state.inCreateMode ? "selected" : ""} onClick={() => this.toggleCreateMode()}>Create</button>

          <div className="speed">
            <span className="label">Speed:</span>
            <select id="sensor-contact-speed">
              <option value="0">Instant</option>
              <option value="25">Very Fast</option>
              <option value="75">Fast</option>
              <option value="225">Medium</option>
              <option value="450">Slow</option>
              <option value="750">Very Slow</option>
            </select>
          </div>
        </div>
      </div>
    )
  }
}

const convertStateToProps = (state) => {
  let systems = state.server.systems || []
  let sensors = systems.find(x => x.id === "sensors")
  return {
    sensors
  }
}

export default connect(convertStateToProps)(Sensors)
