import React from "react";
import { useAuth } from "../context/Auth";
import toast from "react-hot-toast";

function Logout() {
  const [authUser, setAuthUser] = useAuth();
  const handleLOgout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("User");
      toast.success("Logout successfully");

      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      toast.error("Error: " + error);
      setTimeout(()=>{},2000)
    }
  };

  return (
    <div>
      <button
        className="py-3 px-2 bg-red-500 text-white rounded-md cursor-pointer"
        onClick={handleLOgout}
      >
        Logout
      </button>
    </div>
  );
}

export default Logout;
