import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Authors = (props) => {

    const [authors, setAuthors] = useState([]);

    const navigate = useNavigate();


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => setAuthors(res.data))
            .catch(err => console.error(err))
    }, [authors]);

    const goToEdit = (authorId) => {
        navigate ('/authors/' + authorId + '/edit');
    };

    const deleteButton = (authorId) => {
        if(window.confirm('Are you sure you want to delete this author?')) {    
            axios.delete('http://localhost:8000/api/authors/' + authorId)
            .then(res => {
                console.log(res.data); console.log("DELETE SUCCESS");
                setAuthors(authors.filter(author => author._id !== authorId));
            })
            .catch(err => console.error(err));
        }
    };

    return (
        <div>
            <table className='table' style={{ width: "70%", margin: "auto", marginTop: "50px" }}>
                <thead>
                    <tr>
                        <th>Author</th>
                        <th>Actions Available</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        authors.map(author =>
                            <tr key={author._id}>
                                <td>{author.name}</td>
                                <td className='d-flex justify-content-center gap-3'>
                                    <Button variant='success' onClick={() => goToEdit(author._id)}>Edit</Button>
                                    <Button variant='danger' onClick={() => deleteButton(author._id)}>Delete</Button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Authors