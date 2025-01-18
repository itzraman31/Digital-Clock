import React from 'react'
import './clock.css'

const Display = (props) => {
  return (
    <>
    <h2 className='numbers' style={props.clrs}>{props.time}</h2>
    </>
  )
}

export default Display