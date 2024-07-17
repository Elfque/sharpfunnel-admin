import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import UserManagement from "./pages/UserManagement";
import WebsiteManagement from "./pages/WebsiteManagement";
import Profile from "./pages/Profile";
import Statistics from "./pages/Statistics";
import TemplateManagement from "./pages/TemplateManagement";
import UserAnalytics from "./pages/UserAnalytics";
import WebsiteAnalytics from "./pages/WebsiteAnalytics";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users" element={<UserManagement />} />
        <Route path="/user/:d" element={<UserAnalytics />} />
        <Route path="/websites" element={<WebsiteManagement />} />
        <Route path="/website/:id" element={<WebsiteAnalytics />} />
        <Route path="/template-management" element={<TemplateManagement />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/statistics" element={<Statistics />} />
      </Routes>
    </Router>
  );
}

export default App;
