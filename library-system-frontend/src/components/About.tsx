import Header from "./Header";
import Sidebar from "./Sidebar";
import "./About.css";

export default function About() {
  return (
    <div className="page">
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="about-content">
          <h2 className="about-title">About Us</h2>
          <hr className="divider" />

          <div className="about-card">
            <div className="about-text">
              <h3>Welcome to Shana’s Library</h3>
              <p className="subheading">
                Empowering knowledge through books.
              </p>

              <p>
                Shana’s Library is a modern digital library platform designed
                to help readers explore, reserve, and manage books easily.
                Our goal is to create a peaceful and organized space where
                knowledge becomes accessible to everyone.
              </p>

              <p>
                We provide categorized collections, book reservation features,
                membership tracking, and reading history management — all in
                one place.
              </p>

              <p>
                Whether you're a student, researcher, or casual reader,
                Shana’s Library supports your learning journey.
              </p>
            </div>

            <div className="about-image">
              <img
                src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da"
                alt="Library"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}