import React from 'react'

export default class Client extends React.Component {
  getClientState(timestamp) {
    let timeDiff = new Date().valueOf() - timestamp
    let clientStates = [
      {state: 'lost', diff: 300000},
      {state: 'error', diff: 60000},
      {state: 'warning', diff: 10000}
    ]

    let clientState = clientStates.find(x => timeDiff >= x.diff)
    return clientState ? clientState.state : 'ok'
  }

  render() {
    return (
      <div className={'client ' + this.getClientState(this.props.lastSeen)}>
        <div className={'last-seen'} />
        {this.props.name}
      </div>
    )
  }
}
