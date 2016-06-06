import React from 'react'

export default class Remove extends React.Component {
  render() {
    return (
      <g id="remove-contact" transform="translate(1, 1)">
        <rect data-role="remove-contact" x="-0.17" y="-0.17" width=".15" height=".15"/>
        <line x1="-0.17" y1="-0.17" x2="-0.02" y2="-0.02"/>
        <line x1="-0.02" y1="-0.17" x2="-0.17" y2="-0.02"/>
      </g>
    )
  }
}
