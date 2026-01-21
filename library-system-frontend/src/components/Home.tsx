import Header from "./Header";
import Sidebar from "./Sidebar";
import "./Home.css";

export default function Home() {
  return (
    <>
      <Header />

      <div className="home-body">
        <Sidebar />

        <main className="content">
          <h2>Hi Vetharsana!</h2>
          <p className="subtitle">Recently Active…</p>

          <div className="card-grid">
            {[1, 2, 3].map((i) => (
              <div className="info-card" key={i}>
                <h4>📘 Title</h4>
                <p>
                  Body text for whatever you’d like to say. Add main takeaway
                  points, quotes, anecdotes, or even a very short story.
                </p>
                <button>Button</button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}
