// src/components/Register.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css"; // reuse same CSS

function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

  const handleRegister = () => {
    if (username && email && password) {
      alert("Registration Successful!");
      navigate("/"); // back to login
    }
  };

  const handleClear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="top-bar">
        <header className="header">Shana’s Library</header>
      </div>

      <div className="container">
        <div className="welcome-box">
          <h4>
            Create Account <br />
            <span>Shana’s Library</span>
          </h4>

          <div className="login-box">
            <h4>Register using your details</h4>

            <div className="input-group">
              <label>Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              {username && (
                <button className="clear-btn" onClick={() => setUsername("")}>
                  ×
                </button>
              )}
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
              {email && (
                <button className="clear-btn" onClick={() => setEmail("")}>
                  ×
                </button>
              )}
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
              />
              {password && (
                <button className="clear-btn" onClick={() => setPassword("")}>
                  ×
                </button>
              )}
            </div>

            <div className="button-row">
              <button className="login-btn" onClick={handleRegister}>
                Register
              </button>
              <button className="clear-btn2" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>

          <p className="register-text">
            Already have an account?{" "}
            <button
              className="register-btn"
              onClick={() => navigate("/")}
            >
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
