import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";

const Signup = () => {

    return (
        
        <div className="signup-bg">
            <Header/>
            <div className="signup">
                <div className="heading">
                    <h1>SIGNUP FORM</h1>
                </div>
                <input type="text" placeholder="username"/>
                <p></p>
                <input type="email" placeholder="gmail"/>
                <p></p>
                <input type="tel" placeholder="mobile" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
                <p></p>
                <input type="password" placeholder="password"/>
                <p></p>
                <button type="submit">SIGN UP</button>
                <div className="login-signup"><Link to="/login-user"><p>Click here to Login</p></Link>
            </div></div>
        </div>
    )
}

export default Signup;