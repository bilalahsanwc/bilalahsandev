// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./pages/Home";
function App() {
  return (
    <>
      {/* <NavBar></NavBar> */}
      <Home></Home>
    </>
    // <Router>
    //   <NavBar />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/about" element={<About />} />
    //     <Route path="/projects" element={<Projects />} />
    //     <Route path="/contact" element={<Contact />} />
    //   </Routes>
    //   <Footer />
    // </Router>
  );
}

export default App;
