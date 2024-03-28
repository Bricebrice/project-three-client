import { useContext } from "react";
import { AuthContext } from "../context/auth.context";
import { Navigate } from "react-router-dom";
import VegSpinner from "../components/VegSpinner";

export default function IsAdmin({ children }) {
  const { isAdmin, isLoading } = useContext(AuthContext);

  if (isLoading) {
    return (
      <>
        <VegSpinner />
      </>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/" />;
  } else {
    return children;
  }
}
