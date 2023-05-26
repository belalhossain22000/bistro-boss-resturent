import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { AuthContext } from '../../Proider/AuthProvider';

const SignUp = () => {
    const {createUser,updateUser}=useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data);
        createUser(data.email,data.password)
        .then(result=>{
            const user= result.user
            console.log(user)
            updateUser(data.name,data.photoUrl)
            .then(() => {
                // Profile updated!
                alert('user updated successfully')
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
                console.log(error.message)
              });
              
        })
        .catch(error=>console.log(error));
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.name && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo url</span>
                            </label>
                            <input {...register("photoUrl", { required: true })} type="text" placeholder="name" className="input input-bordered" />
                            {errors.photoUrl && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: true })} type="email" placeholder="email" className="input input-bordered" />
                            {errors.email && <span className='text-red-500'>This field is required</span>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: true, minLength: 6, maxLength: 20 })} type="password" placeholder="password" className="input input-bordered" />
                            {errors.password && <span className='text-red-500'>This field is required</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-500'>must be less then 20 character</span>}
                            {errors.password?.type === 'minLength' && <span className='text-red-500'>must be 6 character</span>}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">sign Up</button>
                        </div>
                    </form>
                    <p><small>allrady have an account <Link className='btn btn-link' to="/login">login</Link></small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;