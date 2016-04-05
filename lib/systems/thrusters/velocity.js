import React from 'react'

export default class Velocity extends React.Component {

  getVelocityName(velocity) {
    if (isNullVector(velocity)) return "Stopped"
    const greatest = greatestMagnitude(velocity)

    if (greatest.axis === 'x') return (greatest.isPositive) ? "Forward" : "Reverse"
    if (greatest.axis === 'y') return (greatest.isPositive) ? "Starboard" : "Port"
    return (greatest.isPositive) ? "Up" : "Down"
  }

  render() {

    return (
      <div className="velocity">
        Velocity: {this.getVelocityName(this.props.velocity)}
      </div>
    )
  }
}


function isNullVector(v) {
  return v.x === 0 && v.y === 0 && v.z === 0
}

// {
//   axis: string,
//   isPositive: boolean
// }


function greatestMagnitude(v) {
  const xMag = Math.abs(v.x)
  const yMag = Math.abs(v.y)
  const zMag = Math.abs(v.z)

  if (xMag >= yMag && xMag >= zMag) return {
    axis: "x",
    isPositive: v.x >= 0
  }

  if (yMag >= zMag) return {
    axis: "y",
    isPositive: v.y >= 0
  }

  return {
    axis: "z",
    isPositive: v.z >= 0
  }
}


