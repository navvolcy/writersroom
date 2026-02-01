import { useState } from "react";
import logo from "../images/NewWR.jpg";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const API_URL = process.env.REACT_APP_API_URL;
      console.log("register frontend we hit!")
      const res = await fetch(
        `${API_URL}/api/auth/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Save token
      localStorage.setItem("token", data.token);

      alert("Account created successfully ✅");

      // optional: redirect
      // navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}  className="w-full max-w-sm p-6 border rounded-lg shadow-md bg-white">
        {/* Logo */}
        <img
            className="rounded-full mx-auto mb-4"
            src={logo}
            alt="Writer's Room Logo"
            width="200"
        />
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>

        {error && <p style={styles.error}>{error}</p>}

        <input
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <input
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
        className="w-full border px-3 py-2 rounded focus:outline-none focus:ring focus:ring-orange-300"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button disabled={loading} className="w-full bg-orange-400 hover:bg-orange-500 transition py-2 rounded font-semibold text-white">
          {loading ? "Creating..." : "Register"}
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "300px",
  },
  error: {
    color: "red",
    fontSize: "14px",
  },
};

export default Register;
