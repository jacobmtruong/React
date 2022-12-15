import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {

    const [idInput, setIdInput] = useState('');

    const [nounInput, setNounInput] = useState('people');

    const redirect = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault();
        // console.log(idInput);
        redirect ("/" + nounInput +  "/" + idInput );
    }

  return (
    <form onSubmit={onSubmit} className='d-flex gap-3 m-5 align-items-center'>
        {/* {JSON.stringify(nounInput)} <br />
        {JSON.stringify(idInput)} <br /> */}
        
        <h6>Search For: </h6>
        <select className='form-select w-3' style={{width: '150px'}} onChange={(e) => setNounInput(e.target.value)}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
        </select>


        <h6>ID: </h6> <input 
        className='form-control' style={{width: '150px'}}
        type="number" 
        onChange={(e) => setIdInput(e.target.value)}
        value={idInput} />

        <button className='btn btn-primary'>Search</button>
    </form>
  )
}

export default Form