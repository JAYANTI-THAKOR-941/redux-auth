import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Login = () => {

    const dispatch = useDispatch();

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [error,setError] = useState("");


    const validEmail = "jayantithakor245@gmail.com";
    const validPassword = "123@pipl";

    const handleLogin = (e)=>{
        e.preventDefault();

        if(email == validEmail && password == validPassword){
            const userData = {
                name:"Jayanti Thakor",
                email,
                isAdmin:true
            }
            dispatch({
                type:'LOGIN',
                payload:userData
            });

            setError("");
        }
        else{
            setError("Please enter valid email & password.!!")
        }

    }

  return (
    <div>
        <form onSubmit={handleLogin}>
            <input type="text" placeholder='Enter Email.' value={email} onChange={(e)=>setEmail(e.target.value)} />
             <input type="text" placeholder='Enter Password.' value={password} onChange={(e)=>setPassword(e.target.value)} />
            <button>Login</button>
        </form>

        {error && <h2 style={{color:"red"}}>{error}</h2>}
    </div>
  )
}

export default Login