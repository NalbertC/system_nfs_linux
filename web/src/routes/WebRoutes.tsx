import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Files } from "../pages/Files";
import { Home } from "../pages/Home";



export function WebRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/files" element={<Home />} />
        <Route path="/" element={<Files />} />
      </Routes>
    </Router>
  );
}