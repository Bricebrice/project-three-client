import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

export default function CreateMealPage() {
  const [form, setForm] = useState({
    name: "",
    calories: 0,
    proteins: 0,
    fats: 0,
    carbs: 0,
    imageUrl: "",
  });
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };

  const handleCreateMealSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    // if (password !== passVerify) {
    //   setErrorMessage("Passwords do not match");
    //   return;
    // }

    const requestBody = { form };

    try {
      const response = await axios.post(`${API_URL}/`, requestBody);
      // console.log("Signup response:", response.data);
      setForm({
        email: "",
        password: "",
        passVerify: "",
        firstName: "",
        lastName: "",
      });
      navigate("/login");
    } catch (error) {
      if (error.response) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
        return;
      }
    }
  };

  return (
    <div className="SignupPage bg-yellow-300 flex flex-col h-dvh items-center">
      <h1 className="text-3xl p-4">Sign Up</h1>

      <form
        onSubmit={handleCreateMealSubmit}
        className="max-w-sm mx-auto flex flex-col items-center mb-5 bg-yellow-400 rounded p-7"
      >
        <div className="mb-5 flex gap-3">
          <div>
            <label
              htmlFor="firstName"
              className="block mb-2 text-sm font-medium"
            >
              First name:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              type="text"
              name="firstName"
              id="firstName"
              value={form.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="block mb-2 text-sm font-medium"
            >
              Last name:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              id="lastName"
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="w-full mb-5">
          <label htmlFor="email" className="block mb-2 text-sm font-medium">
            Email:
          </label>
          <input
            className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-5 flex gap-3">
          <div>
            <label className="block mb-2 text-sm font-medium">Password:</label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium">
              Verify password:
            </label>
            <input
              className="bg-gray-100 border border-gray-400 text-sm rounded-lg w-full p-2.5 "
              type="password"
              name="passVerify"
              value={form.passVerify}
              onChange={handleChange}
            />
          </div>
        </div>

        <button
          className="bg-orange-400 border-2 shadow border-orange-500 rounded w-full py-2.5 hover:bg-orange-600 hover:border-orange-700 hover:border-2"
          type="submit"
        >
          Sign Up
        </button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div className="flex gap-2">
        <p>Already have account?</p>
        <Link className="text-orange-700" to={"/login"}>
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}
