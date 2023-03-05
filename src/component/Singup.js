import React from 'react'
import { useFormik } from 'formik';
import validationSchema from './validations';

function Singup() {

    const { handleSubmit, handleChange,handleBlur, values, errors, touched } = useFormik({
        initialValues: {
            password: '',
            passwordConfirm: '',
            email: '',

        },
        onSubmit: values => {
            console.log(values);
        },
        validationSchema: validationSchema
    })
    return (
        <div>
            <form onSubmit={handleSubmit}>

                <label htmlFor="email">Email Address</label>
                <input

                    name="email"
                    type="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                {errors.email && touched.email && <div className='error'>{errors.email}</div>}
                <label htmlFor="password">password Address</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />{errors.password && touched.password && <div className='error'>{errors.password}</div>}
                <label htmlFor="passwordConfirm">Email Address</label>
                <input
                    id="passwordConfirm"
                    name="passwordConfirm"
                    type="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.passwordConfirm}
                /><br></br>
                {errors.passwordConfirm && touched.passwordConfirm && <div className='error'>{errors.passwordConfirm}</div>}
                <button type="submit">Submit</button>
            </form>
            <code> {JSON.stringify(values)}
            </code>
        </div>
    )
}

export default Singup
