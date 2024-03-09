import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = "http://localhost:5005";

function SignupPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passVerify, setPassVerify] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handlePassVerify = (e) => setPassVerify(e.target.value);
  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    // Check if passwords match
    // if (password !== passVerify) {
    //   setErrorMessage("Passwords do not match");
    //   return;
    // }

    const requestBody = { firstName, lastName, email, password, passVerify };

    try {
      const response = await axios.post(`${API_URL}/auth/signup`, requestBody);
      // console.log("Signup response:", response.data);

      navigate("/login");
    } catch (error) {
      if (error.response) {
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      }
    }
  };

  return (
    <div className="SignupPage">
      <h1>Sign Up</h1>

      <form onSubmit={handleSignupSubmit}>
        <label>First name:</label>
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={handleFirstName}
        />

        <label>Last name:</label>
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={handleLastName}
        />

        <label>Email:</label>
        <input type="email" name="email" value={email} onChange={handleEmail} />

        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />

        <label>Verify password:</label>
        <input
          type="password"
          name="passVerify"
          value={passVerify}
          onChange={handlePassVerify}
        />

        <button type="submit">Sign Up</button>
      </form>

      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <p>Already have account?</p>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;
