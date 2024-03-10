import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AboutUs from "./pages/Aboutus";
import Treatments from "./pages/Treatments";
import Blog from "./pages/Blog";
import ContactUs from "./pages/Contactus";

function App() {
  return (
    <>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path="/aboutus" element={<AboutUs/>}/>
      <Route path="/treatments" element={<Treatments/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/contactus" element={<ContactUs/>}/>
    </Routes>
    
    </>
  );
}

export default App;
