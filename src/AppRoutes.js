import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { LanguageSelection } from "./LanguageSelection";
import { Dashboard } from "./Dashboard";
import { AuthProvider } from "./contexts/AuthProvider";

export const AppRoutes = () => {
  return (
    <Router>
    <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </AuthProvider>
    </Router>
  );
}