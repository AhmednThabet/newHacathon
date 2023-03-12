import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import Logo from "../components/Logo";
import { Link } from "react-router-dom";
import Button from "../components/Botton";
import { useAxios } from "../hooks";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [messagehandle1, setMessagehandle1] = useState("");
  const namevalidate = new RegExp(/^(?=.*[a-z A-Z]).{2,}/);
  const onHandleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: Name,
      email: Email,
    };
    if (!Email) {
      setError("required");
    }
    fetch("https://hakathon2023.onrender.com/api/auth/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        localStorage.setItem("Token", result.data.accessToken);
        navigate("/SignIn");
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <form onSubmit={onHandleSubmit}>
      <div className="border-solid  w-1/4 m-auto mt-[150px] rounded shadow-lg p-10">
        <Logo />
        <h1 className="text-xl font-bold">Sign Up</h1>
        <p className="text-lg font-semibold mb-5">
          Fill the following information to create an account
        </p>
        <div className="flex  flex-col mb-8">
          <div className="mb-4 ">
            <p className="text-base font-semibold mb-2"> Name </p>
            <Input
              type={"text"}
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </div>
          <div>
            <p className="text-base font-semibold mb-2"> Email </p>
            <Input
              type={"email"}
              onChange={(event) => setEmail(event.target.value)}
            />
            <>{error}</>
          </div>
        </div>
        <Button title={"Sign up"} type="submit" />
        <p className="text-base font-semibold text-center mt-10">
          Already have an account?
          <Link className="text-[#2D65E4]" to="/SignIn">
            {" "}
            login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default SignUp;
