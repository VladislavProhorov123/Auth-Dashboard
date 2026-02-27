import React from 'react'
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from 'react-router-dom';

export default function Dashboard() {
  const { session, signOut } = UserAuth();
  const navigate = useNavigate();

  const handleSignOut = async (e) => {
    e.preventDefault()
    try {
      await signOut()
      navigate("/")
    } catch (error) {
      console.error("Error signing out: ", error.message)
    }
  }

  console.log(session)
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome, {session?.user?.email}!</p>
      <div className="">
        <p onClick={handleSignOut} className='border w-24 p-2 cursor-pointer'>Sign out</p>

      </div>
    </div>
  )
}
