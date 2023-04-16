import React from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'


export default function Login() {
    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate("/admin")
    }

    return (
        <>
            <section className="login-section">
                <img className="login-logo" src={require("../images/sgtbimit.png")} alt="" />
                <div className="form-container">
                    <p className="login-title">Login</p>
                    <form className="form" method="POST" action="/login-auth">
                        <div className="input-group">
                            <label for="username">Username</label>
                            <input type="text" name="username" id="username" placeholder="" />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" />
                            <div className="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button className="sign">Sign in</button>
                    </form>
                   
                    </div>
                    
            </section>
            
        </>
    )
}
