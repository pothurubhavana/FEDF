import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <h2>📖 Librarian Dashboard</h2>

      <p className="subtitle">
        Manage your library books efficiently
      </p>

      <div className="dashboard-links">
        <Link to="/deletebook">
          🗑️ Delete Books
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;