import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../images/NewWR.jpg";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      console.log("API URL:", API_URL);

      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Login failed");
      }

      // store JWT
      localStorage.setItem("token", data.token);

      console.log("Login success:", data);

      // redirect after login
      navigate("/episodes");

    } catch (err) {
      console.error("Login error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded-lg shadow-md bg-white"
      >
        {/* Logo */}
        <img
          className="rounded-full mx-auto mb-4"
          src={logo}
          alt="Writer's Room Logo"
          width="200"
        />

        <h2 className="text-2xl font-bold mb-6 text-center">
          Login
        </h2>

        {/* Email */}
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block mb-1 font-medium">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-orange-400 hover:bg-orange-500 transition py-2 rounded font-semibold text-white"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

        {/* Error */}
        {error && (
          <p className="text-red-500 text-center mt-4 text-sm">
            {error}
          </p>
        )}

        {/* Register link */}
        <p className="text-center text-sm mt-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-500 font-semibold hover:underline"
          >
            Create one
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
