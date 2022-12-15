import React, { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';



const Display = () => {

    const { personId, noun } = useParams();

    const [data, setData] = useState({});



    axios.get(`https://swapi.dev/api/${noun}/${personId}/`)
        .then(res => {
            // console.log(res.data);
            setData(res.data);
        })
        .catch(err => console.log(err, { replace: true }));



    return (
        <div>
            {
                noun === 'people' ? (<>
                    <h1>{data.name}</h1>
                    <p><b>Height: </b>{data.height}</p>
                    <p><b>Mass: </b>{data.mass}</p>
                    <p><b>Hair Color: </b>{data.hair_color}</p>
                    <p><b>Skin Color: </b>{data.skin_color}</p>
                </>) : (<>
                    <h1>{data.name}</h1>
                    <p><b>Climate: </b>{data.climate}</p>
                    <p><b>Terrain: </b>{data.terrain}</p>
                    <p><b>Surface Water: </b>{data.surface_water}</p>
                    <p><b>Population: </b>{data.population}</p>
                </>)
            }


        </div>
    )
}

export default Display