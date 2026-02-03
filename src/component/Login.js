import React, { useRef, useState } from 'react'
import Header from './Header'
import { validateLoginData, validateSignupData } from '../utils/validate';
import { auth } from '../utils/firebase';
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_URL, USER_AVATAR } from '../utils/constants';


const Login = () => {

    const [isSignupForm, setIsSignupForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const fullName = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const hndleButtonClick = () => {
        if (!isSignupForm) {
            const message = validateSignupData(fullName.current.value, email.current.value, password.current.value);
            setErrorMessage(message);
            if (message) return;
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    updateProfile(auth.currentUser, {
                        displayName: fullName.current.value, 
                        photoURL: USER_AVATAR
                        }).then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid,
                                    email,
                                    displayName,
                                    photoURL,
                                })
                            );
                        }).catch((error) => {
                        // An error occurred
                        // ...
                        });
                   
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });


        } else {
            const message = validateLoginData(email.current.value, password.current.value);
            setErrorMessage(message);
            if (message) return;
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + ": " + errorMessage);
                });

        }
    }

    const handleToggleSignUp = () => {
        setIsSignupForm(!isSignupForm);
    }
  return (
    <div>
        <Header />
        <div className='absolute'>
            <img src={BG_URL}
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