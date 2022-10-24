import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Box from './components/Box';
import AnotherBox from './components/AnotherBox';
import BoxForm from './components/BoxForm';

function App() {

  const [boxes, setBoxes] = useState([
    {
      color: "red",
      height: 100,
      width: 100,
    },
    {
      color: "blue",
      height: 100,
      width: 100,
    }
  ])

  // const [boxes, setBoxes] = useState (["red", "blue", "green"])






  return (
    <div className="App">
      <BoxForm boxes = {boxes} setBoxes = {setBoxes}/> <br />

      <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center'}}>
        {boxes.map((box, index) => {
          return <Box box={box} key={index} />
        })}
      </div>

      {/* <AnotherBox boxes = {boxes}/> */}

    </div>
  );
}

export default App;
