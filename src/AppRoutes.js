import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { LanguageSelection } from "./LanguageSelection";

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
        </Routes>
    </Router>
  );
}