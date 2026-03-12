import { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { getCategories } from "../services/categoryService";
import "./Categories.css";

interface Category {
  id: number;
  name: string;
  description: string;
}

export default function Categories() {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    loadCategories();
  }, []);

  const loadCategories = async () => {
    try {
      const res = await getCategories();
      setCategories(res.data);
    } catch (error) {
      console.error("Error loading categories");
    }
  };

  return (
    <div className="page">
      <Header />

      <div className="layout">
        <Sidebar />

        <main className="categories-content">
          <h2 className="page-title">Categories</h2>
          <hr className="divider" />

          <div className="category-container">
            {categories.map((cat) => (
              <div key={cat.id} className="category-card">
                <div className="category-icon">ℹ️</div>

                <div className="category-text">
                  <h3>{cat.name}</h3>
                  <p>{cat.description}</p>

                  <button className="category-btn">
                    View Books
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}