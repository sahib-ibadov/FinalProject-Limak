import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';


const DeliveryAreas = () => {
  const [deliveries, setdeliveries] = useState([])
  useEffect(() => {

    axios.get('https://localhost:7211/categories').then(res => {
      setdeliveries(res.data)
      console.log(res.data);
    }).catch(e => {
      console.log(e);
    })
  }, [])

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
                  deliveries?.map((deliveries, i) => {
                    return <tr key={i}>
                      <td>{deliveries.id}</td>
                      <td className="py-1">
                      </td>
                      <td>{deliveries.name}</td>
                      <td></td>
                      <td>
                        <Link to={`update/${deliveries.id}`} className="btn btn-warning">
                          Update
                        </Link>
                        <Link to={`delete/${deliveries.id}`} className="btn btn-danger">
                          Delete
                        </Link>
                        <Link to={`${deliveries.id}`} className="btn btn-primary">
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
  </div>
  )
}

export default DeliveryAreas
