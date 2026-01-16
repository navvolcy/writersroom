import React, { useState } from "react";
import logo from '../assets/NewWR.jpg'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // TEMP: just log values (replace with real auth later)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center"> 
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm p-6 border rounded-lg shadow-md"
      >
        <img 
        className="rounded-full mx-12"
        src={logo}
        alt=" Avatar"
        width='240px'
        />
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border px-3 py-2 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block mb-1">Password</label>
          <input
            type="password"
            className="w-full border px-3 py-2 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-400 py-2 rounded font-semibold"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Login;

























/*import logo from '../assets/NewWR.jpg'

  <div>
            <img 
            className="rounded-full"
            src={logo}
            alt=" Avatar"
            width='240px'
                        />

        </div*/