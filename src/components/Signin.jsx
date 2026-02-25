import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import hero from "../assets/hero.png";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { session, signInUser } = UserAuth();
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const result = await signInUser(email, password);
      if (result.success) {
        navigate("/dashboard");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-gray-50 flex-col">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight drop-shadow-sm">
          Dashboard Panel
        </h1>
        <div className="w-full max-w-md px-8 py-10">
          <form onSubmit={handleSignIn}>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Sign in Today!
            </h2>
            <p className="text-gray-500 mb-6 text-sm">
              Don't have an account?{" "}
              <Link className="text-blue-600 hover:underline" to="/signup">
                Sign up!
              </Link>
            </p>

            <div className="flex flex-col gap-4">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                type="email"
                className="border border-gray-300 rounded-xl p-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                type="password"
                className="border border-gray-300 rounded-xl p-3 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 text-white font-semibold p-3 rounded-xl hover:bg-blue-700 transition disabled:opacity-50 mt-4 cursor-pointer"
              >
                Sign Up
              </button>

              {error && <p className="text-red-500">{error}</p>}
            </div>
          </form>
        </div>
      </div>

      <div className="flex-1 hidden md:block h-screen">
        <img
          src={hero}
          alt="Productivity illustration"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
