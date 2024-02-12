import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Countries = () => {

  const [countries, setCountries] = useState([])
  useEffect(() => {

    axios.get('https://localhost:7211/countries').then(res => {
      setCountries(res.data)
      console.log(res.data);
    }).catch(e => {
      console.log(e);
    })
  }, [])
  const handleDeleteFromCountries = async (item) => {

  }
  return (
    <div>
      <div className="col-lg-12 grid-margin stretch-card">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Products</h4>
            <p className="card-description">
              <Link to="create" className="btn btn-primary">Create</Link>
            </p>
            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th></th>

                    <th>Name</th>


                  </tr>
                </thead>
                <tbody>
                  {
                    countries?.map((country, i) => {
                      return <tr key={i}>
                        <td>{countries.id}</td>
                        <td className="py-1">
                        </td>
                        <td>{country.name}</td>
                        <td></td>
                        <td>
                          <Link to={`update/${country.id}`} className="btn btn-warning">
                            Update
                          </Link>
                          <button onClick={() => {
                            handleDeleteFromCountries(country)
                          }} className="btn btn-danger">
                            Delete
                          </button>
                          <Link to={`${country.id}`} className="btn btn-primary">
                            Read
                          </Link>
                        </td>
                      </tr>
                    })
                  }

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>)
}

export default Countries
