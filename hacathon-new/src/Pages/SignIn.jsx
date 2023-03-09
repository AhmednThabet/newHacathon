import React, { useEffect, useState } from 'react';
import Input from '../Components/Input';
import Logo from "../Components/Logo";

const SignIn = () => {
 return(
    <>
      <Logo />
      <h1>Sign in</h1>
      <p>Fill the following information to create an account</p>
      <Input type={"email"}/>
      <p>Already have an account?</p>
    
    </>
 );

}

export default SignIn;