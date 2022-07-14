import React from 'react'

const OperatingHour = (props) => {
  return (
    <tr><th>{props.day}</th><td>{props.times}</td></tr>
  )
}

export default OperatingHour