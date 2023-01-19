import React from 'react'
import { useFormik } from 'formik';

const SignUp = () => {
    const formik = useFormik({
        initialValues : {
            name:"",
            email:"",
            password:""
        },
        onSubmit : (values, {resetForm})=>{
            console.log(values);
            resetForm({values:""});
        }
    });
    const {handleSubmit, handleChange} = formik;
    const {name,email,password} = formik.values;

  return (
    <div>
      <h2>User SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type="text" onChange={handleChange} value={name} name="name" id="name"/>
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type="email" onChange={handleChange} value={email} name="email" id="email"/>
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type="password" onChange={handleChange} value={password} name="password" id="password"/>
        </div>
        <div>
            <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
};

export default SignUp;
