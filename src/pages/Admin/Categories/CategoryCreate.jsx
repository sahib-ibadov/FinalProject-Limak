import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const CategoryCreate = () => {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate()

    const post = async (e) => {
        e.preventDefault();
        try {

            const formData = new FormData();

            formData.append("Name", name)
            formData.append("Image", image)
            console.log(formData);
            const response = await axios.post('https://localhost:7211/categories', formData)
            const data = response.data
            navigate('/admin/categories')
        } catch (e) {
            console.log(e)
            setErrors(e.response.data.errors)
        }
    }

    return (
        <div>
            <h2>
                Create category
            </h2>
            <form onSubmit={post} encType='multipart/form-data'>
                <div class="form-group">
                    <label for="exampleInputEmail1">Name</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Enter name" />
                    <small id="emailHelp" class="form-text text-danger">{errors?.Name ? errors.Name[0] : ""}</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Photo</label>
                    <input
                        accept='image/*'
                        type="file"
                        class="form-control"
                        onChange={(e) => {
                            setImage(e.target.files[0]);
                        }}
                        id="exampleInputPassword1"
                        placeholder="Photo"
                    />
                    <small id="emailHelp" class="form-text text-danger">{errors?.Image ? errors.Image[0] : ""}</small>
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
                <Link to={'/admin/categories'} class="btn btn-secondary">Cancel</Link>
            </form>
        </div>
    )
}

export default CategoryCreate
