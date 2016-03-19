import React from 'react'
import Engines from './engines'
require('./index.css')

export default class Systems extends React.Component {
  render() {
    return (
      <div id="systems">
        <Engines/>
      </div>
    )
  }
}
