import React, { useState } from 'react'

const AnotherBox = (props) => {
    const [boxesList, setBoxesList] = useState(props.boxes)
    return (
        <div>
            {JSON.stringify(boxesList)}
            {boxesList.map((box) => {
                return <div style= {{
                    width: '100px',
                    height: '100px',
                    backgroundColor: `${box}`,
                }}>{box}</div>
            })}
        </div>
    )
}
export default AnotherBox