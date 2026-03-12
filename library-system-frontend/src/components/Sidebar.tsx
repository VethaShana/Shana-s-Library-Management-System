import "./Sidebar.css";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <Link to="/home"><button>Home</button></Link>
      <Link to="/about"><button>About</button></Link>
      <Link to="/categories"><button>Categories</button></Link>

      <hr />

      <button>Reserve Book</button>
      <button>History</button>
    </aside>
  );
}

// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <button>Home</button>
//       <button>About</button>
//       <button>Categories</button>

//       <hr />

//       <button>Reserve Book</button>
//       <button>History</button>
//     </aside>
//   );
// }


// export default function Sidebar() {
//   return (
//     <aside className="sidebar">
//       <button className="active">Home</button>
//       <button>About</button>
//       <button>Categories</button>
//       <hr />
//       <button>Reserve Book</button>
//       <button>History</button>
//     </aside>
//   );
// }
