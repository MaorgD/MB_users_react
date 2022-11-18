import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Verification() {
    const params = useParams();

    return (
        <div className='container'>
            <div className='text-center'>
                <h1>thank you {params.name} for sign up</h1>
                <h4>please go to your email to Verify the account </h4>
                <h4>must Verify to login </h4>
                <Link to='/login' className='btn btn-primary'>go to login</Link>
            </div>
        </div>
    )
}

export default Verification