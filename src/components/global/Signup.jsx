import React, { useState } from "react";
import { storeApi } from "../helpers/storeapi";
import { Link, useNavigate } from "react-router-dom";

function Signup (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [email,setEmail] = useState("");
    const [error,setError] = useState(null);

    const navigate = useNavigate();
    const api = storeApi();

    const handleCreate =(e)=>{
        e.preventDefault();
        api.create(username,email,password)
        .then((response)=>{
            if(response !== null){
            console.log(response);
            sessionStorage.setItem("loginStatus",JSON.stringify(true));
            navigate("/estore");
            }
            else{
                setError("Try after sometime");
                console.log("Try after sometime"); 
            }
        })
        .catch((error)=>{
            setError("Try after sometime");
            console.log(error + "Internal error")
        })
    };

    return(
        <div className="signup-layout">
        <div className="account"> 

        <div className="content"> 
    
         <h2>Sign Up</h2> 
         <span style={{color:"red", paddingBottom:"10px"}}>{error}</span>

         <div className="form"> 
         <form  name="login-form" autoComplete="off" onSubmit={handleCreate}>
    
          <div className="inputBox">    
           <input type="text" value={username} id="username" onChange={(e)=>setUsername(e.target.value)} required /> <label htmlFor="username">Username</label>    
          </div> 

          <div className="inputBox">    
           <input type="email" value={email} id="email" onChange={(e)=>setEmail(e.target.value)} required /> <label htmlFor="email">Email</label>    
          </div> 
    
          <div className="inputBox">    
           <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> <label htmlFor="password">Password</label> 
          </div> 
    
          <div className="links"> 
          <span><input type="checkbox" id="showpassword" onChange={(e)=> setShowPassword(!showPassword)}/>show password </span>
          <Link to="/Login">Login</Link> 
          </div> 
    
          <div className="inputBox">     
           <input type="submit" value="Create"/>    
          </div> 

          <div className="additionalinfo">
            <span>*Create with dummy details</span>
          </div>
          </form>
         </div> 
    
        </div>   
       </div> 
       </div>
    )
}
export default React.memo(Signup);