// src/components/Login.jsx
import { useState } from 'react'
import './Login.css'

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  const handleLogin = () => {
    if (username && password) {
      setShowAlert(true)
    }
  }

  const handleClear = () => {
    setUsername('')
    setPassword('')
  }

  return (
    <div className="container">

      <div className="top-bar">
        <header className="header">Shana’s Library</header>
      </div>

      {showAlert && (
        <div className="alert">
          <span>ℹ️ Hi {username}!</span>
          <p>Login Successful…</p>
          <button onClick={() => setShowAlert(false)}>Ok</button>
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
          Don’t you have any account ? <button className="register-btn">Register</button>
        </p>
      </div>
    </div>
  )
}

export default Login
