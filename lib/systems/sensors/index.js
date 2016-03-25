import React from 'react'
import { connect } from 'react-redux'
import Grid from './grid'
import Contact from './contact'
require('./index.css')

class Sensors extends React.Component {
  render() {
    if (!this.props.sensors) {
      return null
    }

    return (
      <div id="sensors" className="system">
        <h2>Sensors</h2>
        <svg width={400} height={400} viewBox="-200 -200 400 400" style={{backgroundColor: '#666'}}>
          <Grid/>
          <g>
            {this.props.sensors.contacts.map(contact => <Contact key={contact.id} contact={contact}/>)}
          </g>
        </svg>
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
