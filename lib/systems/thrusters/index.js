import React from 'react'
import { connect } from 'react-redux'
import Velocity from './velocity'
import Attitude from './attitude'
require('./index.css')

class Thrusters extends React.Component {

  render() {
    if (!this.props.thrusters) {
      return null
    }


    return (
      <div id="thrusters" className="system">
        <h2>Thrusters</h2>
        <div>
          <Velocity velocity={this.props.thrusters.velocity} />
          <Attitude attitude={this.props.thrusters.attitude} />
        </div>
      </div>
    )
  }
}

const convertStateToProps = (state) => {
  let systems = state.server.systems || []
  let thrusters = systems.find(x => x.id === "thrusters")
  return {
    thrusters
  }
}

export default connect(convertStateToProps)(Thrusters)