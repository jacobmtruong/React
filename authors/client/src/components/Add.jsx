import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Add = () => {

    const navigate = useNavigate();

    const [name, setName] = useState();

    const [error, setError] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/authors', { name })
            .then(res => {
                console.log(res);
                navigate('/authors');
            })
            .catch(err => {
                // send back validation errors
                // Get the errors from err.response.data
                const errorResponse = err.response.data.errors;
                // Define a temp error array to push the messages in
                const errorArray = [];
                // Loop through all errors and get the messages
                for (const key of Object.keys(errorResponse)) {
                    errorArray.push(errorResponse[key].message);
                }
                // Set Errors
                setError(errorArray);
            })
    };

    const cancelButton = () => {
        navigate('/authors');
    }

    return (
        <div className='m-5'>
            <h3>Add a New Author</h3>
            <form onSubmit={submitHandler}>
                {error.map((err, index) => <p key={index}>{err}</p>)}
                <p>
                    <label>Author's Name: </label>
                    <input
                        onChange={e => setName(e.target.value)}
                        value={name} />
                </p>
                <div className='d-flex justify-content-center gap-3'>
                    <button className='btn btn-danger' onClick={cancelButton}>Cancel</button>
                    <button className='btn btn-success'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Add