import React from 'react'
import { UserAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({children}) {
  const {session} = UserAuth();

  if(session === undefined) {
    return <div className="">Loading...</div>
  }


  return (
    <div>{session ? <>{children}</> : <Navigate to="/signup" />}</div>
  )
}
