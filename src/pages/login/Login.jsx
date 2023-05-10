import React from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/authSlice";
import "./login.css"


export const Login = () => {
    const dispatch = useDispatch()
    const handleSubmit = e => {
        e.preventDefault()
        dispatch(authActions.login())
    }
    return (
        <>
        <section className="login" >
            <div className="container">
                <div className="backImg">
                    <img src="https://img95.699pic.com/photo/50075/3855.jpg_wh300.jpg" alt='' />
                <div className="text">
                    <h3>Login</h3>
                    <h1>My account</h1>
                </div>
                </div>
                <form onSubmit={handleSubmit}>
                    <span>Username or Email Address</span>
                    <input type="text" required/>
                    <span>Password</span>
                    <input type="password" required/>
                    <button className="button">Login</button>

                </form>    
            </div>
        </section>
        </>
    )
}