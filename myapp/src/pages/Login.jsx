import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login =()=>{
    
    const [err, setErr] = useState(false);
    // const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit= async (e)=>{
    // setLoading(true);
    e.preventDefault()
  
    const email = e.target[0].value;
    const password = e.target[1].value;
   
    
    try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate("/")

    }catch(err){
      setErr(true);
    }
 };

    return(
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">chat-app</span>
                <span className="title">Login</span>
                <form onSubmit={handleSubmit}>
                   
                    <input className="email" placeholder="email"/>
                    <input className="password" placeholder="password"/>
                   
                    <button>Signin</button>
                    {err && <span>Something went wrong</span>}
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
            </div>
        </div>
    );
};
export default Login;