import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Login = () => {

    return (
        <div className="login-bg">
            <Header/>
            <div className="login">
                <div className="heading">
                    <h1>LOGIN FORM</h1>
                </div>
                <input type="text" placeholder="username"/>
                <p></p>
                <input type="email" placeholder="gmail"/>
                <p></p>
                <input type="password" placeholder="password"/>
                <p></p>
                <button type="submit">LOGIN</button>
                <div className="login-signup"><p>Or doesn't have an account</p>
                <Link to='/signup-user'>Click here to register</Link>
            </div></div>
        </div>
    )
}

export default Login;