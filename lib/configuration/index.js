import React from 'react'
import { connect } from 'react-redux'
import { updateConfiguration } from './actions'
require('./index.css')

class Configuration extends React.Component {
    state = {
        isVisible: false
    }

    showConfig() {
        this.setState({...this.state, isVisible: true})
    }

    hideConfig() {
        this.setState({...this.state, isVisible: false})
    }

    saveConfig() {
        let serverBaseUrl = document.getElementById('server-url').value
        let stationName = document.getElementById('station-name').value

        this.props.dispatch(updateConfiguration({
            serverBaseUrl,
            stationName
        }))

        this.hideConfig()
    }

    render() {
        if (this.state.isVisible) {
            return this.renderConfig()
        }
        return this.renderConfigButton()
    }

    renderConfigButton() {
        return (
            <button onClick={() => this.showConfig()}>Configure</button>
        )
    }

    renderConfig() {
        return (
            <div id="configuration">
                <h2>Station Configuration</h2>
                <div className="group">
                    <label>Server URL</label>
                    <input type="text" id="server-url" defaultValue={this.props.serverBaseUrl}/>
                </div>
                <div className="group">
                    <label>Station Name</label>
                    <input type="text" id="station-name" defaultValue={this.props.stationName}/>
                </div>
                <div className="group">
                    <button onClick={() => this.saveConfig()}>Save</button>
                    <button onClick={() => this.hideConfig()}>Cancel</button>
                </div>
            </div>
        )
    }
}

const convertStateToProps = (state) => {
    return state.configuration || {}
}

export default connect(convertStateToProps)(Configuration)