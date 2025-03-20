import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import TopUsersPage from "./pages/TopUsersPage";
import TrendingPostsPage from "./pages/TrendingPostsPage";
import FeedsPage from "./pages/FeedsPage.jsx";

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/topUsers" element={<TopUsersPage />} />
          <Route path="/trendingPosts" element={<TrendingPostsPage />} />
          <Route path="/feeds" element={<FeedsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
