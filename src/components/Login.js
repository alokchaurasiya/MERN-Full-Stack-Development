import {Formik } from 'formik'
import React from 'react'

const Login = () => {
   
  const loginSubmit = (formdata ,{resetForm}) =>{
    console.log(formdata)
    resetForm();
  }


  return (
    <div>
        <Formik initialValues={{email : '',password:''}}
          onSubmit={loginSubmit}>

          { ({handleSubmit, values , handleChange}) => (
        
        <form onSubmit={handleSubmit}>
          <label>Email</label>
          <input className='form control' id='email' value={values.email} onChange={handleChange}></input>

          <label>Password</label>
          <input type='password'className='form control' id='password' value={values.password} onChange={handleChange}></input>

          <button type='submit' className="btn btn-primary mt-4">Submit</button>


        </form>
          ) }
        </Formik>
    </div>
  )
}

export default Login