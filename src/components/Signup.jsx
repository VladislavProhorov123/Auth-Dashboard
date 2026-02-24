import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const {session} = UserAuth()

  return (
    <div>
      <form  className='max-w-md m-auto pt-24'>
        <h2 className="font-bold pb-2">Sign up Today!</h2>
        <p>Already have an account? <Link className='text-blue-600 underline' to="/signin">Sign in!</Link></p>

        <div className="flex flex-col gap-4 pt-4">
          <input placeholder='Email' type="email" className='border p-2' />
          <input placeholder='Password' type="password" className='border p-2' />
          <button type="submit" disabled={loading} className='bg-blue-600 text-white p-2 rounded'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}
