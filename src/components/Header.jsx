import { LogOut, Search } from "lucide-react";
import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

export default function Header() {
  const { session, signOut } = UserAuth();

  const handleSignOut = async (e) => {
    e.preventDefault();
    try {
      await signOut();
      navigate("/");
    } catch (error) {
      console.error("Error signing out: ", error.message);
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#0000FF"],

    })
  }, [])

  console.log(session);

  return (
    <div className="flex items-center justify-between">
      <div className="text-gray-800 font-semibold text-lg">
        <p>Welcome, {session?.user?.email}!</p>
      </div>

      <div className="flex items-center bg-gray-100 rounded-full w-1/3 max-w-md">
        <Search className="ml-3 text-gray-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-full text-gray-700 placeholder-gray-400 py-2 px-4"
        />
      </div>

      <div className="">
        <button
          onClick={handleSignOut}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </button>
      </div>
    </div>
  );
}
