import React from 'react'
import { connect } from 'react-redux'
import Client from './client'
require('./index.css')

class Clients extends React.Component {
  render() {
    let clients = [<div key='none'>Not connected to server.</div>]
    if (this.props.clients.length > 0) {
      clients = this.props.clients.map(x => <Client key={x.id} {...x} />)
    }

    return (
      <div id="clients">
        <h2>Clients</h2>
        <div className="clientList">
          {clients}
        </div>
      </div>
    )
  }
}

const convertStateToProps = (state) => {
  return {clients: state.server.clients || [] }
}

export default connect(convertStateToProps)(Clients)
