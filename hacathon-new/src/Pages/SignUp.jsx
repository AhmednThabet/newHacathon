import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Logo from "../Components/Logo";
// import Button from "../Components/Botton";




const SignUp = () => {
    // const navigate = useNavigate();
    // const[fullName,setFirstName]=useState("");
    // const[email,setEmail]=useState("");
 return(
    <div className=''>
    <Logo />
        <h1>Sign Up</h1>
        <p>Fill the following information to create an account</p>
        <div className='flex '>
            <div className='flex flex-col'>
                <p className='text-lg font-bold'> Name </p>
                <Input type={"text"}/>      
            </div>
            <div>
                <p className='flex flex-col'> Email </p>
                <Input type={"email"}/>
            </div>
        </div>
        {/* <Button /> */}
        
    </div>
 );

}

export default SignUp;