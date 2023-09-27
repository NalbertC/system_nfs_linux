import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Files } from "../pages/Files";



export function WebRoutes() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Files />} />
      </Routes>
    </Router>
  );
}