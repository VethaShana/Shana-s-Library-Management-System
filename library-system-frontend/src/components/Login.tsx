import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    if (username && password) {
      setShowAlert(true);
    }
  };

  const handleClear = () => {
    setUsername("");
    setPassword("");
  };

  const handleSuccess = () => {
    setShowAlert(false);
    navigate("/home");
  };

  return (
    <div className="container">
      <div className="top-bar">
        <header className="header">Shana’s Library</header>
      </div>

      {showAlert && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Login Successful</h3>
            <p>Hi {username}, welcome to Shana’s Library!</p>

            <button className="ok-btn" onClick={handleSuccess}>
              OK
            </button>
          </div>
        </div>
      )}

      <div className="welcome-box">
        <h4>
          Welcome To <br />
          <span>Shana’s Library</span>
        </h4>

        <div className="login-box">
          <h4>Login using your credentials</h4>

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
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
            />
            {password && (
              <button className="clear-btn" onClick={() => setPassword("")}>
                ×
              </button>
            )}
          </div>

          <div className="button-row">
            <button className="login-btn" onClick={handleLogin}>
              Login
            </button>
            <button className="clear-btn2" onClick={handleClear}>
              Clear
            </button>
          </div>
        </div>

        <p className="register-text">
          Don’t you have any account?{" "}
          <button className="register-btn">Register</button>
        </p>
      </div>
    </div>
  );
}

export default Login;
