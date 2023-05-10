import React from "react";
import "./login.css"
import { Link } from "react-router-dom"



export const Register = () => {
    return(
        <>
        <section className="login" >
            <div className="container">
                <div className="backImg">
                    <img src="https://img95.699pic.com/photo/50075/3855.jpg_wh300.jpg" alt='' />
                <div className="text">
                    <h3>Register</h3>
                    <h1>My account</h1>
                </div>
                </div>
                <form>
                    <span>Email Address</span>
                    <input type="text" required/>
                    <span>User name</span>
                    <input type="text" required/>
                    <span>Password</span>
                    <input type="text" required/>
                    <span>Confirm Password</span>
                    <input type="text" required/>
                    <button className="button">Register</button>
                    <Link to="/login">
                        sign IN
                    </Link>
                </form>    
            </div>
        </section>
        </>
    )
}