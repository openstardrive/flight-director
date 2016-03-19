import React from 'react'

export default class ProgressBar extends React.Component {
  render() {
    let textDiv = this.props.text ? <div className="progress-text">{this.props.text}</div> : null
    return (
      <div className="progress-bar-container">
        {textDiv}
        <div className="progress-bar" style={{width: `${this.props.percent}%`}}></div>
      </div>
    )
  }
}
