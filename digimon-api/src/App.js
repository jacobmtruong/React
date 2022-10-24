import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {

  const [dataDigimons, setDataDigimons] = useState([]);

  // function Fetch API use VANILLA JS;
  const fetchDigimonsVanilla = () => {
    fetch('https://digimon-api.vercel.app/api/digimon') // fetch data from server API
      .then(response => response.json()) // convert the data into JSON (raw)
      // .then (response => console.log(response)) // show it in the console just to see, do do without this line
      .then(response => setDataDigimons(response)) // set state dataDigimons with response (from API after converted to JSON)
      .catch(err => console.log('chech API route', err)) // if there was an error, this line will run and show in the console
  }

  // function Fetch API use AXIOS;
  const fetchAxios = () => {
    axios.get('https://digimon-api.vercel.app/api/digimon')
    .then (res => setDataDigimons(res.data))
    .catch (err => console.log('chech API route', err)) // if there was an error, this line will run and show in the console just to see, do do without this line
  }



  return (
    <div className="App">

      <h1 style={{marginBottom: '100px'}}>Generate Digimon API</h1>
      
      {/* button to fetch API using Vanilla */}
      <button onClick={fetchDigimonsVanilla} style={{marginBottom: '20px'}}>Fetch Digimons</button> <br />

      {/* button to fetch API using Axios */}
      <button onClick={fetchAxios} style={{marginBottom: '100px'}}>Axios Fetch</button>

      {/* table to display data from API */}
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Level</th>
          </tr>
        </thead>
        <tbody>
          {/* loop through state dataDigimons to display in table */}
          {dataDigimons.map((d, i) => {
            return (
              <tr key={i} className='table-success'>
                <td>{d.name}</td>
                <td><img src={d.img} alt="image" width = '150px'/></td>
                <td>{d.level}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

    </div>
  );
}

export default App;
