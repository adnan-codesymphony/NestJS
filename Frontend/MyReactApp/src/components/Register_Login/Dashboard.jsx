import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {

  const curr_user = localStorage.getItem("currentUser");
  const navigate = useNavigate();
  if (curr_user == null) {
        return navigate("/login");
  }
  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h1 className="text-[25px]">Dashboard</h1>
        </div>
        {curr_user ? (
          <div className="flex gap-5">
            <h2 className="text-[25px]">Welcome, {curr_user}</h2>
            <button
              onClick={handleLogout}
              className="text-[25px] bg-red-500 text-white px-3 cursor-pointer"
            >
              Logout
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Dashboard;
