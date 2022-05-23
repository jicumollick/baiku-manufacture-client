import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import Blogs from "./Pages/Blogs/Blogs";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Login from "./Pages/Login/Login";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/portfolio" element={<Portfolio></Portfolio>} />
        <Route path="/blogs" element={<Blogs></Blogs>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>} />
        <Route path="/login" element={<Login></Login>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
