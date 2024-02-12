import React from 'react'
import Userleft from '../../../components/Userleft/Userleft'

const User = () => {
    return (
        <div className='container'>

            <div className="row">
                <div className='d-none d-md-block col-md-4 col-lg-3 col-12'>
                    <Userleft />
                </div>
                <div className='col-sm-12 col-md-8 col-lg-9'> </div>
            </div>

        </div>
    )
}

export default User
