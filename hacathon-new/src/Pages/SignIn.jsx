import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Logo from "../Components/Logo";
import { Link} from 'react-router-dom';
import Button from "../Components/Botton";
import { useAxios } from "../hooks";
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();
  const[Email,setEmail]=useState("");
  const[error,setError]=useState("");
  const onHandleSubmit = (e) =>{
    if(!Email) {
      setError("required");
    }
    e.preventDefault();
    const data = {
      email: Email,
    }
    fetch('https://talentsvalleyhackaton.onrender.com/api/v1/user/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) =>  response.json())
    .then( res => {
      console.log(res)
      localStorage.setItem('Token',(res.data.accessToken))
      if (res.statusCode >= 400)
        setError("user not found")
      else if(res.statusCode < 400)
        { navigate('/Home')}
    })
    .catch( (errr) => console.log(errr))  
  }
  
 
 return(
  <form onSubmit={onHandleSubmit}>

    <div className='w-1/4 m-auto mt-10'>
      <Logo />
      <h1 className='text-xl font-bold'>Login</h1>
      <p className='text-lg font-semibold mb-5'>Fill the following information to create an account</p>
      <div className='mb-7'>
        <p className='text-base font-semibold mb-2'> Email </p>
        <Input type={"email"} onChange={event => setEmail(event.target.value)}  />
        <span>{error}</span>
      </div>  
      <Button title={"Login"} type="submit"/>    
      <p className='text-base font-semibold text-center mt-10'>Don't have an account? <Link className='text-[#2D65E4]' to="/SignUp">  Sign up </Link></p>
    </div>
    </form>
 );

}

export default SignIn;

