import React from 'react'
import Engines from './engines'
import Sensors from './sensors'
import Thrusters from './thrusters'
require('./index.css')

export default class Systems extends React.Component {
  render() {
    return (
      <div id="systems">
        <Engines/>
        <Sensors/>
        <Thrusters/>
      </div>
    )
  }
}
