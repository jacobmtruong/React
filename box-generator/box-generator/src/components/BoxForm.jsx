import React, {useState} from 'react'

const BoxForm = (props) => {

    const [color, setColor] = useState("");
    const [height, setHeight] = useState("");
    const [width, setWidth] = useState("");

    const submitBoxes = (e) => {
        e.preventDefault();
        const newBox = {color, width, height}
        props.setBoxes ([...props.boxes, newBox]);
        console.log(newBox);
    }

  return (
    <div>
        <form onSubmit={submitBoxes}>
            <div>
                <label htmlFor="color">Color: </label>
                <input type="text" onChange={(e) => setColor(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="height">Height: </label>
                <input type="number" onChange={(e) => setHeight(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="widthr">Width: </label>
                <input type="number" onChange={(e) => setWidth(e.target.value)}/>
            </div>
            <button>Create Box</button>
        </form>

        {JSON.stringify(props.boxes)}
    </div>
  )
}

export default BoxForm