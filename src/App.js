import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blogs from "./Pages/Blogs/Blogs";
import Contact from "./Pages/Contact/Contact";
import Discovery from "./Pages/Discovery/Discovery";
import Frequent from "./Pages/Frequent/Frequent";

import Home from "./Pages/Home/Home";
import Login from "./Pages/Login";
import Results from "./Pages/Results/Results";
import Services from "./Pages/Services/Services";
import SignUp from "./Pages/SignUp";
import Terms from "./Pages/Terms";
import Vehicle from "./Pages/Vehicle";

function App() {
  return (
    <div className="app ">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/discover" element={<Discovery />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/frequent" element={<Frequent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/vehicle" element={<Vehicle />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
