import React from 'react'
import { connect } from 'react-redux'
import { updateConfiguration, startPollingServer } from './actions'
import Clients from '../clients'
import Systems from '../systems'
import Configuration from '../configuration'
require('./index.css')

export class Station extends React.Component {
  componentWillMount() {
    updateConfiguration(this.props.configuration)
    this.props.dispatch(startPollingServer(500))
  }

  componentDidUpdate() {
    updateConfiguration(this.props.configuration)
  }

  render() {
    return (
      <div id="station">
        <h1>OpenStardrive Flight Director Station</h1>
        <Configuration/>
        <Clients/>
        <Systems/>
      </div>
    )
  }
}

const convertStateToProps = (state) => {
  return { configuration: state.configuration }
}
export default connect(convertStateToProps)(Station)
