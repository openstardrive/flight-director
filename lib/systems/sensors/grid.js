import React from 'react'

export default class Grid extends React.Component {
  render() {
    return (
      <g id="sensor-grid">
        <circle cx="0" cy="0" r="1" stroke="green" strokeWidth=".003" fill="black"/>
        <circle cx="0" cy="0" r=".5" stroke="green" strokeWidth=".003" fill="none"/>
        <line x1="0" y1="-1" x2="0" y2="1" stroke="green" strokeWidth=".003"/>
        <line x1="-1" y1="0" x2="1" y2="0" stroke="green" strokeWidth=".003"/>
        <line x1="-.707" y1="-.707" x2=".707" y2=".707" stroke="green" strokeWidth=".003"/>
        <line x1="-.707" y1=".707" x2=".707" y2="-.707" stroke="green" strokeWidth=".003"/>
        <line x1="-.383" y1="-.924" x2=".383" y2=".924" stroke="green" strokeWidth=".003"/>
        <line x1="-.383" y1=".924" x2=".383" y2="-.924" stroke="green" strokeWidth=".003"/>
        <line x1="-.924" y1="-.383" x2=".924" y2=".383" stroke="green" strokeWidth=".003"/>
        <line x1="-.924" y1=".383" x2=".924" y2="-.383" stroke="green" strokeWidth=".003"/>
      </g>
    )
  }
}
