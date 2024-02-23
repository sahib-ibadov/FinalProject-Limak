import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import { useNavigate, useParams } from 'react-router';
import axios from 'axios';
import toast from 'react-hot-toast';
const CauntriesEdit = () => {
    const [errors, setErrors] = useState([])
    const [oneData, setOneData] = useState({})
    const navigate = useNavigate()
    const { id } = useParams()
    useEffect(() => {
        axios.get(`https://localhost:7211/countries/${id}`).then((res) => {
            setOneData(res.data)
        })
    }, [])
    console.log(oneData)
    useEffect(() => {
        formik.setValues({
            name: oneData?.name,
            id: oneData?.id
        })
    }, [oneData])

    const formik = useFormik({
        initialValues: {
            id: id,
            name: '',

        },
        onSubmit: async (values) => {
            try {
                const formData = new FormData();
                // console.log(values)
                formData.append("Name", values.name)

                const response = await axios.put(`https://localhost:7211/countries`, values)
                navigate('/admin/countries')
                toast.success('Countries Successfully Added')
            } catch (e) {
                console.log(e)
                setErrors(e.response.data.errors)
                toast.error('Something Wrong In Countries Edit')

            }
        },
        handleSubmit: async (values)=>{
            const response = await axios.put(`https://localhost:7211/countries`, values)
            navigate('/admin/countries')
            toast.success('Countries Successfully Added')         
         }
    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default CauntriesEdit
