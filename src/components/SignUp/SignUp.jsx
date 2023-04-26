import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../providers/AuthProvider';

const SignUp = () => {
    const [error,setError]=useState('');
    const {createUser}= useContext(UserContext)

    const handleSignUp=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password= form.password.value;
        const confirm = form.confirm.value;
        const displayName = form.name.value;
        console.log(email,password,confirm,displayName)
        setError('');
        if(password != confirm){

            setError('Your password did not match')
            return;

        }
        else if (password.length<8){
            setError('password should be at least 8 characters ')
            return;
        }

        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser)
        })
        .catch(error=>{
            setError(error);
            console.log(error.message)
        })
    }
    return (
        <div className="hero min-h-screen mx-auto bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
      <p className="py-6 text-center">Wellcome to Ema-Jhon !!</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name='displayName' required className="input input-bordered  " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' required className="input input-bordered  " />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' required className="input input-bordered" />
         
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Confirm Password</span>
          </label>
          <input type="password" placeholder="Confirm password" name='confirm' required className="input input-bordered" />
          <label className="label">
            <Link to='/login' className="label-text-alt link link-hover">Already have an account?<br />Please LogIn</Link>
          </label>
        </div>
        <div>
            <span className='text-red-600'>{error}</span>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up</button>
        </div>
      </form >
    </div>
  </div>
</div>
    );
};

export default SignUp;