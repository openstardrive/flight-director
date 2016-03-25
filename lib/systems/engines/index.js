import React from 'react'
import { connect } from 'react-redux'
import { setEngineSpeed } from './actions'
import ProgressBar from '../../common/progress-bar'
require('./index.css')

class Engines extends React.Component {
  changeSpeedTo(engineId, event) {
    let newSpeed = parseInt(event.target.value, 10)
    this.props.dispatch(setEngineSpeed(engineId, newSpeed))
  }

  renderSpeed(engine) {
    let speedPercent = engine.speed.current / engine.speed.max * 100
    let speedText = `Speed: ${engine.speed.current} / ${engine.speed.max}`

    return (
      <div className="speed">
        <ProgressBar percent={speedPercent} text={speedText}/>
      </div>
    )
  }

  renderHeat(engine) {
    let overheat = ''
    if (engine.heat.secondsUntilOverheat) {
      let min = Math.floor(engine.heat.secondsUntilOverheat / 60)
      let sec = engine.heat.secondsUntilOverheat % 60
      sec = sec < 10 ? '0' + sec : sec
      overheat = ` (${min}:${sec})`
    }
    let heatPercent = 100 - (engine.heat.current / engine.heat.max * 100)
    let heatText = `Heat: ${engine.heat.current} / ${engine.heat.max}${overheat}`

    return (
      <div className="heat">
        <ProgressBar percent={heatPercent} text={heatText}/>
      </div>
    )
  }

  renderSpeedOptions(engine) {
    var options = []
    var speed = 0;
    while (speed <= engine.speed.max) {
      options.push(<option key={`${engine.id}-speed-${speed}`} value={speed}>{speed}</option>)
      speed++
    }
    return options
  }

  renderEngine(name, engine) {
    return (
      <div className={`engine ${name.toLowerCase()}`}>
        <span>{name}</span>
        {this.renderSpeed(engine)}
        {this.renderHeat(engine)}
        <span className="label">Set speed to: </span>
        <select value={engine.speed.current} onChange={(e) => this.changeSpeedTo(engine.id, e)}>{this.renderSpeedOptions(engine)}</select>
      </div>
    )
  }

  render() {
    if (!this.props.ftl || !this.props.sublight) {
      return null
    }

    return (
      <div id="engines" className="system">
        <h2>Engines</h2>
        <div>
          {this.renderEngine('Sublight', this.props.sublight)}
          {this.renderEngine('FTL', this.props.ftl)}
        </div>
      </div>
    )
  }
}

const convertStateToProps = (state) => {
  let systems = state.server.systems || []
  let ftl = systems.find(x => x.id === "ftl-engines")
  let sublight = systems.find(x => x.id === "sublight-engines")

  return {
    ftl,
    sublight
  }
}

export default connect(convertStateToProps)(Engines)
