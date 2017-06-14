import React from 'react'
import { connect } from 'react-redux'
import { startPollingServer } from './actions'
import Clients from '../clients'
import Systems from '../systems'
require('./index.css')

export class Station extends React.Component {
  componentWillMount() {
    this.props.dispatch(startPollingServer(500))
  }

  render() {
    return (
      <div id="station">
        <h1>OpenStardrive Flight Controller Station</h1>
        <Clients/>
        <Systems/>
      </div>
    )
  }
}

const convertStateToProps = (state) => ({})
export default connect(convertStateToProps)(Station)
