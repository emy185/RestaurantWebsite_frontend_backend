import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [agree, setAgree] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/register/", {
        username,
        email,
        password,
        password2,
        first_name: firstName,
        last_name: lastName,
      });

      if (response.status === 201 && response.data.access) {
        localStorage.setItem("access", response.data.access);
        localStorage.setItem("refresh", response.data.refresh);
        localStorage.setItem("role", "normal");
        navigate("/profile");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error(
        "Registration error:",
        error.response ? error.response.data : error.message
      );
      setError(
        error.response?.data?.non_field_errors ||
          "Registration failed. Please try again."
      );
    }
  };

  return (
    <div className="py-28">
      <div className="h-fit text-center flex justify-center">
        <div className="px-20 py-10 shadow-[0px_0px_10px_rgba(0,0,0,0.2)] w-fit rounded-lg">
          <div>
            <h1 className="text-5xl font-playfair mb-7 text-center">
              Create An Account
            </h1>
          </div>
          <div className="font-poppins">
            <form className="grid" onSubmit={handleSubmit}>
              <input
                type="text"
                id="first_name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <input
                type="text"
                id="last_name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
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
              <input
                type="password"
                id="confirm_password"
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                placeholder="Confirm Password"
                className="h-[50px] px-[15px] py-[8px] placeholder:text-gray-500 font-small border rounded-lg mb-5"
                required
              />
              <div className="text-start mb-5">
                <input
                  type="checkbox"
                  checked={agree}
                  id="agree"
                  required
                  onChange={(e) => setAgree(e.target.checked)}
                  className="w-[17px] h-[17px] rounded-none border-[1px] font-lg mr-[8px] align-middle"
                />
                <label
                  htmlFor="agree"
                  className="text-start text-[#687188] text-[16px] mr-44"
                >
                  I agree to terms & policy
                </label>
              </div>
              <button
                type="submit"
                name="submit"
                className="hover:duration-700 rounded-lg px-5 py-2 bg-[#AD343E] text-white hover:border-black hover:text-black hover:border hover:bg-transparent"
              >
                Register
              </button>
            </form>
            {error && <p style={{ color: "red" }}>{error}</p>}
          </div>
          <div className="text-[16px] font-poppins mt-5">
            <span className="text-[#687188] text-[16px] mr-1">
              Already Have An Account?
            </span>
            <Link to="/login" className="hover:underline">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
