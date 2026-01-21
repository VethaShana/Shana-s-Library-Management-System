import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header className="home-topbar">
      {/* LEFT: Title */}
      <div className="header-left">
        <h1>Shana’s Library</h1>
      </div>

      {/* RIGHT: Profile */}
      <div className="header-right">
        <div
          className="profile-area"
          onClick={() => setOpenMenu((prev) => !prev)}
        >
          <img
            src="https://i.pravatar.cc/40"
            alt="profile"
            className="avatar"
          />

          {openMenu && (
            <div className="profile-menu">
              <button onClick={() => navigate("/profile")}>
                My Profile
              </button>
              <button>Membership</button>
              <button>Donate</button>
              <button className="logout" onClick={() => navigate("/")}>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
