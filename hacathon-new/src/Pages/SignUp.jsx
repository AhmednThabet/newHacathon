import React, { useEffect, useState } from "react";
import Input from "../Components/Input";
import Logo from "../Components/Logo";
import { Link } from "react-router-dom";
import Button from "../Components/Botton";
import { useAxios } from "../hooks";
import { useNavigate } from 'react-router-dom';


const SignUp = () => {
  const { fetchData, response, error, loading } = useAxios();
  const END_POINT ="https://api.postman.com/collections/23085561-d03e5c1a-be56-46b0-ba54-816771e14cfa?access_key=PMAT-01GV32ZKZTZH2JDJE3NJPW877W"
  const namevalidate = new RegExp(/^(?=.*[a-z A-Z]).{2,}/);
  const emailvalidate = new RegExp(/^\w+@[a-zA-Z_]+?.[a-zA-Z]{2,3}$/);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const[messagehandle1,setMessagehandle1]=useState("");
  const[messagehandle2,setMessagehandle2]=useState("");
  const handlename = () => {
    if(namevalidate.test(fullName)){
        setMessagehandle1 ("");
    }else{
        setMessagehandle1 (<span>the name must be at least 3 char </span>);
    }
}
const handleEmail = () => {
    if(emailvalidate.test(email)){
        setMessagehandle2 ("");            
    }else{
        setMessagehandle2 (<p> Your email is not</p>);
    }
}
  const setEmaill = () => {
    (event) => setEmail(event.target.value);
  };
  const setName = () => {
    (event) => setFullName(event.target.value);
  };
  // const navigate = useNavigate();
  const onHandleSubmit = (e) =>{
    e.preventDefault(); 
    fetchData({
        url: `${END_POINT}user/signup`,
        method: "post",
        data: {
        name: { fullName },
        email: { email },
        },
    });
//     .then((response) => response.json())
//         .then((result) => {
//             console.log(result)
//             localStorage.setItem('Token',(result.data.accessToken))
//             localStorage.setItem('User',JSON.stringify(result.data.user))
//             navigate('/SignIn') 
//         }
//         )
//         .catch((error) => console.log('error', error)); 
// }
}

  return (
    <form onSubmit={onHandleSubmit}>
    <div className="border-solid  w-1/4 m-auto mt-10">
      <Logo />
      <h1 className="text-xl font-bold">Sign Up</h1>
      <p className="text-lg font-semibold mb-5">
        Fill the following information to create an account
      </p>
      <div className="flex  flex-col mb-8">
        <div className="mb-4 ">
          <p className="text-base font-semibold mb-2"> Name </p>
          <Input type={"text"} value={value} onChange={setName} />
          <span>{messagehandle1}</span>
        </div>
        <div>
          <p className="text-base font-semibold mb-2"> Email </p>
          <Input type={"email"} value={value} onChange={setEmaill} />
          <span>{messagehandle2}</span>
        </div>
      </div>
      <Button title={"Sign up"} />
      <p className="text-base font-semibold text-center mt-10">
        Already have an account?
        <Link className="text-[#2D65E4]" to="/SignIn"> login</Link>
      </p>
    </div>
    </form>
  );
};

export default SignUp;
