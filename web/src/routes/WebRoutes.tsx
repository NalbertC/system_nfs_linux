import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import { Home } from "../pages/Home"



export function WebRoutes(){
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  )
}