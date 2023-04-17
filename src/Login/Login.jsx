import React, { useState } from 'react'
import './login.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { useAuth } from '../Context/auth';


export default function Login() {

    const [email,setEamil] = useState();
    const [password , setPassword] = useState();
    const navigate = useNavigate();
    const [auth,setAuth] = useAuth();


    const handleLogin = async () => {
        try {

            const data = (await axios.post("http://localhost:5000/Admin/Login",{email,password})).data;
            console.log(data);
            if(data.token){
                setAuth({
                    ...auth,
                    _id : data.admin._id,
                    token : data.token,
                })
                localStorage.setItem("authorization", JSON.stringify(data.token));
                localStorage.setItem("_id",data.admin._id);

                navigate("/admin/dashboard")

            }
        } catch (error) {
            console.log(error);
        }
    }

    // const handleClick = ()=>{
    //     navigate("/admin")
    // }

    return (
        <>
            <section className="login-section">
                <img className="login-logo" src={require("../images/sgtbimit.png")} alt="" />
                <div className="form-container">
                    <p className="login-title">Login</p>
                    <div className="form" >
                        <div className="input-group">
                            <label for="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="" onChange={(e) => {
                                setEamil(e.target.value);
                            }}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label for="password">Password</label>
                            <input type="password" name="password" id="password" placeholder="" onChange={(e) => {
                                setPassword(e.target.value);
                            }}
                            maxLength="12"
                             />
                            <div className="forgot">
                                <a rel="noopener noreferrer" href="#">Forgot Password ?</a>
                            </div>
                        </div>
                        <button className="sign" onClick={handleLogin}>Sign in</button>
                    </div>

                </div>

            </section>

        </>
    )
}
