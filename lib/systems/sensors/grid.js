import React from 'react'

export default class Grid extends React.Component {
  render() {
    return (
      <g id="sensor-grid">
        <circle cx="0" cy="0" r="200" stroke="green" strokeWidth="1" fill="black"/>
        <circle cx="0" cy="0" r="100" stroke="green" strokeWidth="1" fill="none"/>
        <line x1="0" y1="-200" x2="0" y2="200" stroke="green" strokeWidth="1"/>
        <line x1="-200" y1="0" x2="200" y2="0" stroke="green" strokeWidth="1"/>
        <line x1="-141" y1="-141" x2="141" y2="141" stroke="green" strokeWidth="1"/>
        <line x1="-141" y1="141" x2="141" y2="-141" stroke="green" strokeWidth="1"/>
        <line x1="-75" y1="-185" x2="75" y2="185" stroke="green" strokeWidth="1"/>
        <line x1="-75" y1="185" x2="75" y2="-185" stroke="green" strokeWidth="1"/>
        <line x1="-185" y1="-75" x2="185" y2="75" stroke="green" strokeWidth="1"/>
        <line x1="-185" y1="75" x2="185" y2="-75" stroke="green" strokeWidth="1"/>
      </g>
    )
  }
}
