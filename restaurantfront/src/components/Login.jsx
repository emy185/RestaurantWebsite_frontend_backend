import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/token/", {
        username,
        password,
      });

      const { access, is_superuser } = response.data;
      onLogin(access, is_superuser);
      if (is_superuser) {
        navigate("/admin");
      } else {
        navigate("/profile");
      }
    } catch (error) {
      console.error("Login failed:", error);
      if (error.response && error.response.status === 401) {
        setError("Invalid username or password.");
      } else {
        setError("An error occurred during login. Please try again.");
      }
    }
  };

  return (
    <div className="py-28">
      <div className="h-fit text-center flex justify-center">
        <div className="px-20 py-10 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] w-fit rounded-lg">
          <div>
            <h1 className="text-5xl font-playfair mb-7 text-center">Login</h1>
          </div>
          <div className="font-poppins">
            <form className="grid" onSubmit={handleSubmit}>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder=" Username"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <div className="text-start mb-5">
                <a
                  href="#"
                  className="text-[#687188] text-[16px] hover:underline"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                name="submit"
                className="hover:duration-700 rounded-lg px-5 py-2 bg-[#AD343E] text-white hover:border-black hover:text-black hover:border hover:bg-transparent"
              >
                Log In
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="text-[16px] font-poppins mt-5">
            <span className="text-[#687188] text-[16px] mr-1">
              Don't Have An Account?
            </span>
            <Link to="/register" className="hover:underline">
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
