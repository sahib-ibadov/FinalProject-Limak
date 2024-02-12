import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
import axios from 'axios';
import { useNavigate } from 'react-router';

const Deliveries = () => {
  const [error, setError] = useState([])
  // const [del, setDel] = useState([])
  // useEffect(() => {
  //   axios.get('https://localhost:7211/deliveries').then((res) => {
  //     setDel(res.data)
  //     console.log(res.data)
  //   })
  // }, [])
  const navigate = useNavigate()
  const formik = useFormik({
    initialValues: {
      region: '',
      village: '',
      street: '',
      homeNo: '',
      phone: '',
      notes: '',
    },

    onSubmit: async (values) => {
      try {
        const formData = new FormData();
        formData.append("region", values.region)
        formData.append("village", values.village)
        formData.append("street", values.street)
        formData.append("homeNo", values.homeNo)
        formData.append("phone", values.phone)
        formData.append("notes", values.notes)
        console.log(formData);
        const response = await axios.post('https://localhost:7211/deliveries', formData)
        const data = response.data
        console.log(data)
        navigate('/Admin/Deliveries')
      } catch (e) {
        console.log(e)
        setError(e.response.data.errors)
      }
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="region">Region</label>
        <input
          id="region"
          name="region"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.region}
        />

        <label htmlFor="village">Village</label>
        <input
          id="village"
          name="village"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.village}
        />


        <label htmlFor="street">Street</label>
        <input
          id="street"
          name="street"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.street}
        />
        <label htmlFor="homeNo">Home No</label>
        <input
          id="homeNo"
          name="homeNo"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.homeNo}
        />
        <label htmlFor="phone">Phone</label>
        <input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <label htmlFor="notes">Notes</label>
        <input
          id="notes"
          name="notes"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.notes}
        />
        <button className='btn btn-success' type="submit">Submit</button>
      </form>

      {/* <ul>
        {
          del.map(item => {
            return <li> {item.notes}</li>
          })
        }
      </ul> */}
    </div>
  )
}

export default Deliveries
