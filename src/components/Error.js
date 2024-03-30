import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

    const history = useNavigate();

  return (
    <>
    <div className='container pt-5'>
        <div className='error d-flex flex-column justify-content-lg-center align-items-center'>
            <h4>404 Error ! Page Not Found! </h4>
            <button className='btn btn-primary mt-3' onClick={()=>history("/")}>Redirect Login Page</button>
        </div>
    </div>
    </>
  )
}

export default Error