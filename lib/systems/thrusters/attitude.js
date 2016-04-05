import React from 'react'
import Dial from './dial'

export default class Attitude extends React.Component {

  renderDial(value, name) {
    return (
      <div>
        <Dial value={value}/>
        <div>
          {name}: {value}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className="attitude">
        {this.renderDial(this.props.attitude.yaw, "Yaw")}
        {this.renderDial(this.props.attitude.pitch, "Pitch")}
        {this.renderDial(this.props.attitude.roll, "Roll")}
      </div>
    )
  }
}