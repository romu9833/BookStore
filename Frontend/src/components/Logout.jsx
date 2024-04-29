import React from "react";
import { useAuth } from "../context/AuthProvider";
import toast from "react-hot-toast";
import {  useLocation, useNavigate } from "react-router-dom";

const Logout = () => {

  const location = useLocation();
  const Navigate = useNavigate();
  const from = location?.from?.pathname || "/";
  const [authUser, setAuthUser] = useAuth();
  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("Users");
      toast.success("Logged out successfully");
      setTimeout(() => { window.location.reload(); 
     }, 3000);

    } catch (error) {
      toast.error("Error" + error.message);
      setTimeout(() => {},3000);
    }
  };

  return (
    <div
      className="px-3 py-2 bg-red-500 text-white rounded-md "
      onClick={handleLogout}
    >
      Logout
    </div>
  );
};

export default Logout;
