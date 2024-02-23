import React, { useEffect, useState } from 'react';
import './Categories.css'; 
import axios from 'axios';
import { Link } from 'react-router-dom';
const Categories = () => {

  const [categories, setCategories] = useState([])
  useEffect(
    () => {

    axios.get('https://localhost:7211/categories').then(res => {
      setCategories(res.data)
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
                    <th>Id</th>
                    <th>Image</th>
                    <th>Name</th>
                   
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    categories.map((category,i)=>{
                      return  <tr key={i}>
                      <td>{category.id}</td>
                      <td className="py-1">
                        <img style={{height:"200px",width:"250px"}} src={category.imagePath} alt="Product" />
                      </td>
                      <td>{category.name}</td>
                      <td></td>
                      <td>
                        <Link to={`update/${category.id}`} className="btn btn-warning">
                          Update
                        </Link>
                        <Link to={`delete/${category.id}`} className="btn btn-danger">
                          Delete
                        </Link>
                        <Link to={`${category.id}`} className="btn btn-primary">
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

export default Categories;
