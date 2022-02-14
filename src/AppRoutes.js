import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { App } from "./App";
import { LanguageSelection } from "./LanguageSelection";

export const AppRoutes = () => {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="/language-selection" element={<LanguageSelection />} />
        </Routes>
    </Router>
  );
}