import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Logo from "../Components/Logo";
import { Link} from 'react-router-dom';
import Button from "../Components/Botton";


const SignIn = () => {
  // const[email,setEmail]=useState("");

 return(
    <div className='w-1/4 m-auto mt-10'>
      <Logo />
      <h1 className='text-xl font-bold'>Login</h1>
      <p className='text-lg font-semibold mb-5'>Fill the following information to create an account</p>
      <div className='mb-7'>
        <p className='text-base font-semibold mb-2'> Email </p>
        <Input type={"email"}/>
      </div>  
      <Button title={"Login"}/>    
      <p className='text-base font-semibold text-center mt-10'>Don't have an account? <Link className='text-[#2D65E4]' to="/SignUp">  Sign up </Link></p>
    
    </div>
 );

}

export default SignIn;