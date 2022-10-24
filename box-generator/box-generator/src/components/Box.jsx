import React from 'react'

const Box = (props) => {
  return (
    <div style={{
        width: `${props.box.width}px` ,
        height: `${props.box.height}px`,
        backgroundColor: `${props.box.color}`
    }}></div>
  )
}

export default Box