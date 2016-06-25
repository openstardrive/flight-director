import React from 'react'

export default class Client extends React.Component {
  calculateLastSeen(timestamp) {
    let now = new Date().valueOf()
    let diff = now - timestamp;

    let seenState = 'green'
    if (diff > 10000) {
      seenState = 'yellow'
    }
    if (diff > 60000) {
      seenState = 'red'
    }
    if (diff > 300000) {
      seenState = 'gray'
    }

    return <div className={'last-seen ' + seenState} />
  }

  render() {
    return (
      <div className="client">
        {this.calculateLastSeen(this.props.lastSeen)} {this.props.name}
      </div>
    )
  }
}
