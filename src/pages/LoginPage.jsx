import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

const API_URL = "http://localhost:5005";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();


    try {
      const response = await axios.post(`${API_URL}/auth/login`, form);
      // console.log('Login response:', response.data);
      //console.log("JWT token", response.data.authToken);
      storeToken(response.data.authToken);

      // Verify the token by sending a request to the server's JWT validation endpoint.
      await authenticateUser();

      //console.log("Navigate to the profile page");
      navigate("/profile");
    } catch (err) {
      const errorDescription = err.response.data.message;
      setErrorMessage(errorDescription);
    }
  };

  return (
    <div className="LoginPage bg-mustard-100 flex flex-col h-dvh items-center ">
      <h1 className="text-3xl p-4">Login</h1>

      <form
        className="max-w-md mx-auto flex flex-col items-center mb-5 bg-mustard-400 rounded p-7"
        onSubmit={handleLoginSubmit}
      >
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium" htmlFor="email">
            Email:
          </label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">Password:</label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5"
            type="password"
            name="password"
            id="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>

        <button
          className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
          type="submit"
        >
          Login
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <div className="flex gap-2">
        <p>Not a member yet?</p>
        <Link className="text-orange-700" to={"/signup"}>
          {" "}
          Sign up
        </Link>
      </div>
    </div>
  );
}
