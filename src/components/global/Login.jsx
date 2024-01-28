import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { storeApi } from "../helpers/storeapi";

function Login (){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const api = storeApi();

    const handleLogin =(e)=>{
      e.preventDefault();
      api.login(username,password)
      .then((response)=>{
          if(response !== null){
          // console.log(response);
          sessionStorage.setItem("loginStatus",JSON.stringify(true));
          navigate("/snapshoppe");
          }
          else{
              setError("Enter valid details")
              console.log("Enter valid details"); 
          }
      })
      .catch((error)=>{
          setError("Try after sometime");
          console.log(error + "Internal error")
      })
    }

    return(
        <div className="login-layout">
        <div className="account"> 

        <div className="content"> 
    
         <h2>Sign In</h2> 
          <span style={{color:"red", paddingBottom:"10px"}}>{error}</span>
         <div className="form"> 

        <form name="signin-form" autoComplete="off" onSubmit={handleLogin}>

          <div className="inputBox">    
           <input type="text" value={username} id="username" onChange={(e)=>setUsername(e.target.value)} required /> <label htmlFor="username">Username</label>    
          </div> 
    
          <div className="inputBox">    
           <input type={showPassword ? "text" : "password"} id="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/> <label htmlFor="password">Password</label> 
          </div> 
    
          <div className="links"> 
          <span><input type="checkbox" id="showpassword" onChange={(e)=> setShowPassword(!showPassword)}/>show password </span>
          <a href="/snapshoppe/signup">Signup</a> 
          </div> 
    
          <div className="inputBox">     
           <input type="submit" value="Login"/>    
          </div> 

          <div className="additionalinfo">
            <span>*view console for default login details</span>
          </div>
          </form>
         </div> 
    
        </div> 
    
       </div> 
       </div>
    )
}
export default React.memo(Login);