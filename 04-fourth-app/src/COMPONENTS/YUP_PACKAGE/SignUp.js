import React from 'react'
import { useFormik } from 'formik';
import * as yup from 'yup';

const SignUp = () => {
    const formik = useFormik({
        initialValues : {
            name:"",
            email:"",
            password:""
        },
        validationSchema: yup.object({
          name: yup.string().min(2,"Too small"),
          email:yup.string().email(),
          password:yup.string().min(6, "Too small")
        }),
        onSubmit : (values, {resetForm})=>{
            console.log(values);
            resetForm({values:""});
        }
    });

    const {handleSubmit, handleChange} = formik;
    const {name, email, password} = formik.values;

    const renderNameError = formik.touched.name && formik.errors.name && <span>{formik.errors.name}</span>;
    const renderEmailError = formik.touched.email && formik.errors.email && <span>{formik.errors.email}</span>;
    const renderPasswordError = formik.touched.password && formik.errors.password && <span>{formik.errors.password}</span>;

  return (
    <div>
      <h2>User SignUp</h2>
      <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='name'>Name : </label>
            <input type="text" onChange={handleChange} value={name} name="name" id="name" required/>
            <br/>{renderNameError}
        </div>
        <div>
            <label htmlFor='email'>Email : </label>
            <input type="email" onChange={handleChange} value={email} name="email" id="email" required/>
            <br/>{renderEmailError}
        </div>
        <div>
            <label htmlFor='password'>Password : </label>
            <input type="password" onChange={handleChange} value={password} name="password" id="password" required/>
            <br/>{renderPasswordError}
        </div>
        <div>
            <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  )
};

export default SignUp;
