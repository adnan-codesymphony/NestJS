import React, { useState } from "react";
import Navbar from "./Navbar";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  let handleLogin = (event) => {
    event.preventDefault();

    console.log(`${email} , ${password}`);

    loginUser();
  };

  async function loginUser() {
    const user = {
      email: email,
      password: password,
    };

    try {

      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const userDetails = await response.json();
      const {currUser} = userDetails
      const {fullname} = currUser

      console.log();
      if (response.ok) {

        localStorage.setItem('currentUser', fullname)
        navigate("/dashboard");
        
      }

    }
    catch (error)
    {
      navigate("/login");
      console.log(error);
    }
  }

  return (
    <div>
      <Header />
      <h2 className="text-[30px] mt-5">Login</h2>
      <form onSubmit={handleLogin} className="text-[25px]">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="mt-5 border"
        />
        <br></br>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="mt-5 border"
        />
        <br></br>
        <button
          type="submit"
          className="mt-5 bg-amber-300 py-2 px-3 cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
