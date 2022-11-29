import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const Edit = (props) => {

    const { id } = useParams();

    const [name, setName] = useState();

    const navigate = useNavigate();

    const [error, setError] = useState([]);

    //useEffect to get exist infos
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => setName(res.data.name))
            .catch(err => console.log(err));
    }, [id])

    // create submit with axios for put request
    const updateHandler = (e) => {
        e.preventDefault();
        axios.put ('http://localhost:8000/api/authors/' + id, { name })
        .then (res => {
            console.log(res);
            navigate('/authors');
        })
        .catch(err => {
            // send back validation errors
            // Get the errors from err.response.data
            const errResponse = err.response.data.errors;
            // Define a temp error array to push the messages in
            const errorArray = [];
            // Loop through all errors and get the messages
            for (const key of Object.keys(errResponse)) {
                errorArray.push(errResponse[key].message);
            }
            // Set Errors
            setError(errorArray)
        });
    };

    const cancelButton = () => {
        navigate ('/authors');
    };

    return (
        <div style={{ marginTop: '50px' }}>
            <h3>Edit this Author:</h3>
            <form onSubmit={updateHandler}>
            {error.map((err, index) => <p key={index}>{err}</p>)}
                <label>Author: </label>
                <input 
                onChange={e => setName(e.target.value)}
                value={name}/>
                <div className='d-flex gap-3 justify-content-center m-4'>
                    <button onClick={cancelButton} className='btn btn-danger'>Cancel</button>
                    <button className='btn btn-success'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Edit