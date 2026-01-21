import "./Sidebar.css";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <button>Home</button>
      <button>About</button>
      <button>Categories</button>

      <hr />

      <button>Reserve Book</button>
      <button>History</button>
    </aside>
  );
}


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
