import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Files } from "../pages/Files";
import { Home } from "../pages/Home";



export function WebRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/files" element={<Files />} />
      </Routes>
    </Router>
  );
}