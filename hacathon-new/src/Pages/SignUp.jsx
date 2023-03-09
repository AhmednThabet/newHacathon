import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';

const SignUp = () => {
 return(
    <>
        <h1>Sign Up</h1>
        <p>Fill the following information to create an account</p>
        <Input type={"text"}/>
        <Input type={"email"}/>
    </>
 );

}

export default SignUp;