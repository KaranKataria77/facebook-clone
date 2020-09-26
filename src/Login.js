import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import { auth, provider } from './Firebase';
import { useStateValue } from './StateProvider';
import { actionType } from './reducer';


const Login = () => {
    const [ state, dispatch] = useStateValue();



    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            dispatch({ 
                type:actionType.SET_USER,
                user:result.user,
            })
        })
        .catch((error) => {alert(error.message)})
    }



    return (
        <div className='login'>
            <div className="login__img">
            <img src="https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19749.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>login</Button>
        </div>
        
    )
}


export default Login