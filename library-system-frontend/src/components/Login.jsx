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
      <header className="header">Shana’s Library</header>

      {showAlert && (
        <div className="alert">
          <span>ℹ️ Hi {username}!</span>
          <p>Login Successful…</p>
          <button onClick={() => setShowAlert(false)}>Ok</button>
        </div>
      )}

      <div className="login-box">
        <p>Welcome To<br /><strong>Shana’s Library</strong></p>

        <div className="form">
          <h3>Login using your credentials</h3>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div className="buttons">
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleClear}>Clear</button>
          </div>

          <p className="register">
            Don’t have any account?
            <button>Register</button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
