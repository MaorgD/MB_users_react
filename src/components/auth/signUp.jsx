import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
import { Triangle } from 'react-loader-spinner'
import { useState } from 'react';

import { API_URL, doApiMethodSignUpLogin, regEmail, regPassword } from '../../services/service';
const SignUp = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nav = useNavigate();
    let { register, handleSubmit, getValues, formState: { errors } } = useForm();

    const onSub = (_dataBody) => {

        delete _dataBody.password2
        // console.log(_dataBody);
        setIsSubmitted(true);

        doApi(_dataBody)
    }

    const doApi = async (_dataBody) => {
        try {
            const url = API_URL + '/users';
            const { data } = await doApiMethodSignUpLogin(url, "POST", _dataBody);
            console.log(data);
            if (data.email) {
                nav(`/verification/${data.fullName.firstName}`)
            }
        } catch (err) {
            console.log(err.response);
            alert(err.response.data.msg || err.response.data[0].message)
            setIsSubmitted(false);

        }
    }
    return (
        <div className='d-flex flex-column align-items-center'>
            <h1 className='text-center display-3'>Sign up</h1>
            <div className='col-10 d-flex justify-content-center'>
                <form onSubmit={handleSubmit(onSub)} className='col-12 col-md-4 p-3 shadow '>

                    <label className='mt-2'>First name:</label>
                    <input {...register('fullName[firstName]', { required: true, minLength: 2, maxLength: 25 })} type="text" className='form-control' />
                    {errors.fullName && errors.fullName.firstName && <p className='text-danger m-0'>Enter valid first name! Between 2-20 chars.</p>}
                    <label className='mt-2'>Last name:</label>
                    <input {...register('fullName[lastName]', { required: true, minLength: 2, maxLength: 25 })} type="text" className='form-control' />
                    {errors.fullName && errors.fullName.lastName && <p className='text-danger m-0'>Enter valid last name! Between 2-20 chars.</p>}

                    <label className='mt-2'>email:</label>
                    <input {...register('email', { required: true, minLength: 2, maxLength: 35, pattern: regEmail })} type="text" className='form-control' />
                    {errors.email && <p className='text-danger m-0'>Enter valid email!</p>}

                    <label className='mt-2'>password:</label>
                    <input {...register('password', { required: true, minLength: 2, maxLength: 25, pattern: regPassword })} type="password" className='form-control' />
                    {errors.password && <p className='text-danger m-0'>Enter valid password! Between 6-16 chars Must contain 1 letter and 1 sign. </p>}

                    <label className='mt-2'>confirm password:</label>
                    <input {...register('password2', { required: true, validate: (value) => { return value == getValues('password') } })} type="password" className='form-control' />
                    {errors.password2 && <p className='text-danger m-0'>passwords not match!</p>}

                    {/* <label className='mt-2'>phone:</label>
                    <input {...register('phone', { required: true, minLength: 5, maxLength: 15 })} type="text" className='form-control' />
                    {errors.phone && <p className='text-danger m-0'>Enter Valid Phone!</p>} */}

                    <div className='text-center d-flex flex-column'>
                        {!isSubmitted ?
                            <button className='mt-2 btn btn-primary'>Submit</button>
                            :
                            <Triangle
                                height="80"
                                width="80"
                                radius="9"
                                color='blue'
                                ariaLabel='triangle-loading'
                                wrapperStyle
                                wrapperClass=" justify-content-around" />
                        }

                        <a onClick={() => { nav('/login') }} >to login in </a>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default SignUp