import React from 'react'

export default class Dial extends React.Component {

  getTransform(value) {
    return "rotate(" + value + ")"
  }

  render() {

    return (
      <svg viewBox="-50 -50 100 100" className="dial">
        <circle cx="0" cy="0" r="48"/>
        <polygon points="0,-40 20,20 -20,20" transform={this.getTransform(this.props.value)}/>

      </svg>
    )
  }
}