import React from 'react'

export default class Grid extends React.Component {
  render() {
    return (
      <g id="sensor-grid">
        <circle cx="0" cy="0" r="1"/>
        <circle cx="0" cy="0" r=".5"/>
        <line x1="0" y1="-1" x2="0" y2="1"/>
        <line x1="-1" y1="0" x2="1" y2="0"/>
        <line x1="-.707" y1="-.707" x2=".707" y2=".707"/>
        <line x1="-.707" y1=".707" x2=".707" y2="-.707"/>
        <line x1="-.383" y1="-.924" x2=".383" y2=".924"/>
        <line x1="-.383" y1=".924" x2=".383" y2="-.924"/>
        <line x1="-.924" y1="-.383" x2=".924" y2=".383"/>
        <line x1="-.924" y1=".383" x2=".924" y2="-.383"/>
      </g>
    )
  }
}
