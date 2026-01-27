import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateLoginData, validateSignupData } from '../utils/validate';

const Login = () => {

    const [isSignupForm, setIsSignupForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const hndleButtonClick = () => {
        if (isSignupForm) {
            const message = validateLoginData(email.current.value, password.current.value);
            setErrorMessage(message);
            if (!message) {
                alert("Login Successful");
            }
        }
        if (!isSignupForm) {
            const message = validateSignupData(fullName.current.value, email.current.value, password.current.value);
            setErrorMessage(message);
            if (!message) {
                alert("Signup Successful");
            }
        }
    }

    const handleToggleSignUp = () => {
        setIsSignupForm(!isSignupForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/3d31dac6-aaf0-4e6e-8bd7-e16c5d9cd9a3/web/IN-en-20260119-TRIFECTA-perspective_cce70d60-69c5-428f-99cf-44c212fcec3f_large.jpg"
            alt="bg-image"
            />
        </div>
        <form 
        onSubmit={(e) => e.preventDefault()}
        className='w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
            <h1 className='text-3xl font-bold mb-6'>{isSignupForm ? "Sign In" : "Sign Up"}</h1>

            {!isSignupForm && (
                <input
                ref={fullName}
                type='text' 
                placeholder='Full Name'
                className="p-4 my-4 w-full bg-gray-700" 
            />
            )}

            <input 
            ref={email}
            type='text' 
            placeholder='Email Address'
            className="p-4 my-4 w-full bg-gray-700" 
            />
            <input 
            ref={password}
            type='password' 
            placeholder='Password' 
            className="p-4 my-4 w-full bg-gray-700"
            />
            <p className='text-red-600 font-bold py-2'>{errorMessage}</p>
            <button className='bg-red-600 w-full p-4 my-4 font-bold'
            onClick={hndleButtonClick}
            >
               {isSignupForm ? "Sign In" : "Sign Up"}
            </button>
            <p className='cursor-pointer text-center py-5'
             onClick={handleToggleSignUp}>
                New to Netflix-gpt? Sign up
            </p>
        </form>
        
    </div>
  )
}

export default Login