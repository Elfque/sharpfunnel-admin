import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import WebsiteManagement from "./pages/WebsiteManagement";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user-management" element={<UserManagement />} />
        <Route path="/website-management" element={<WebsiteManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/ststistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;