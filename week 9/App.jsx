import { useState } from "react";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="app-label">System</div>
          <div className="app-name">Library Portal</div>
        </div>
        <nav className="sidebar-nav">
          <div className="nav-section-label">Catalogue</div>
          <div
            className={`nav-item ${page === "home" ? "active" : ""}`}
            onClick={() => setPage("home")}
          >
            Home
          </div>
          <div
            className={`nav-item ${page === "addbook" ? "active" : ""}`}
            onClick={() => setPage("addbook")}
          >
            Add Book
          </div>
        </nav>
      </aside>

      <div className="main-content">
        <div className="topbar">
          <div className="topbar-info">
            <div className="page-title">Library Management System</div>
            <div className="page-subtitle">Manage and track all registered books</div>
          </div>
        </div>
        <div className="page-content">
          {page === "home" ? <Home /> : <AddBook />}
        </div>
      </div>
    </div>
  );
}

export default App;
