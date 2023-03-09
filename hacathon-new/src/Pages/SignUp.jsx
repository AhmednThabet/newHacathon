import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Logo from "../Components/Logo";
import { Link} from 'react-router-dom';

import Button from "../Components/Botton";




const SignUp = () => {
    const namevalidate = new RegExp(/^(?=.*[a-z A-Z]).{2,}/);
    const emailvalidate = new RegExp(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/);
    const navigate = useNavigate();
    const[fullName,setFirstName]=useState("");
    const[email,setEmail]=useState("");
 return(
    <div className='border-solid  w-1/4 m-auto mt-10'>
    <Logo />
        <h1 className='text-xl font-bold'>Sign Up</h1>
        <p className='text-lg font-semibold mb-5'>Fill the following information to create an account</p>
        <div className='flex  flex-col mb-8'>
            <div className='mb-4 '>
                <p className='text-base font-semibold mb-2'> Name </p>
                <Input type={"text"}/>      
            </div>
            <div>
                <p className='text-base font-semibold mb-2'> Email </p>
                <Input type={"email"}/>
            </div>
        </div>
        <Button title={"Sign up"}/>
        <p className='text-base font-semibold text-center mt-10'>Already have an account? <Link className='text-[#2D65E4]' to="/SignIn"> login </Link></p>
    
    </div>
 );

}

export default SignUp;