import React, { useState, useEffect } from "react";
import authService from "../services/auth.service";

const AuthContext = React.createContext();

function AuthProviderWrapper(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  };

  const authenticateUser = async () => {
    // Get the stored token from the localStorage
    const storedToken = localStorage.getItem("authToken");

    // If the token exists in the localStorage
    if (storedToken) {
      try {
        // We must send the JWT token in the request's "Authorization" Headers
        const response = await authService.verify();
        const userData = response.data;
        await setIsLoggedIn(true);
        if (userData.role === "admin") {
          await setIsAdmin(true);
        }
        await setUser(userData);
      } catch (error) {
        setIsLoggedIn(false);
      }
    } else {
      // If the token is not available
      await setIsLoggedIn(false);
      await setUser(null);
    }

    // Set loading state to false after the authentication process is completed
    await setIsLoading(false);
  };

  const removeToken = () => {
    // Upon logout, remove the token from the localStorage
    localStorage.removeItem("authToken");
  };

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        setUser,
        isAdmin,
        storeToken,
        authenticateUser,
        logOutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProviderWrapper, AuthContext };
