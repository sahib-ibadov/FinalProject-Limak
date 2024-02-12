import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const CauntriesCreate = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const post = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData();

            formData.append("Name", name)
            console.log(formData);
            const response = await axios.post('https://localhost:7211/countries', formData)
            const data = response.data
            navigate('/admin/countries')
        } catch (e) {
            console.log(e)
            setErrors(e.response.data.errors)
        }
    }
    return (
        <div>

            <form onSubmit={post} encType='multipart/form-data'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
                    <small id="emailHelp" class="form-text text-danger">{errors?.Name ? errors.Name[0] : ""}</small>
                </div>


                <button type="submit" class="btn btn-primary">Submit</button>
                <Link to={'/admin/Cauntries'} class="btn btn-secondary">Cancel</Link>
            </form>

        </div>
    )
}

export default CauntriesCreate
