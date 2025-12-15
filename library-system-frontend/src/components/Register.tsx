import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const navigate = useNavigate();

  // Dynamic password match check
  useEffect(() => {
    if (confirmPassword && password !== confirmPassword) {
      setError("Passwords do not match");
    } else {
      setError("");
    }
  }, [password, confirmPassword]);

  const handleRegister = () => {
    if (!username || !email || !password || !confirmPassword) {
      setError("All fields are required");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    alert("Registration Successful!");
    navigate("/");
  };

  const handleClear = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setError("");
  };

  const passwordError = confirmPassword && password !== confirmPassword;

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
            </div>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Create password"
                style={{
                  borderColor: passwordError ? "red" : "#ccc",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              />
            </div>

            <div className="input-group">
              <label>Confirm Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Re-enter password"
                style={{
                  borderColor: passwordError ? "red" : "#ccc",
                  borderWidth: "1px",
                  borderStyle: "solid",
                }}
              />
            </div>

            {/* Error message */}
            {error && (
              <p style={{ color: "red", fontSize: "13px", marginBottom: "10px" }}>
                {error}
              </p>
            )}

            <div className="button-row">
              <button
                className="login-btn"
                onClick={handleRegister}
                disabled={
                  (!username || !email || !password || !confirmPassword || passwordError) as boolean
                }
                style={{
                  opacity:
                    !username || !email || !password || !confirmPassword || passwordError
                      ? 0.6
                      : 1,
                  cursor:
                    !username || !email || !password || !confirmPassword || passwordError
                      ? "not-allowed"
                      : "pointer",
                }}
              >
                Register
              </button>

              <button className="clear-btn2" onClick={handleClear}>
                Clear
              </button>
            </div>
          </div>

          <p className="register-text">
            Already have an account?{" "}
            <button className="register-btn" onClick={() => navigate("/")}>
              Login
            </button>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
