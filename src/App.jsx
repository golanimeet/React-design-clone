import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import GlobalChapters from "./pages/GlobalChapters";
import Latest from "./pages/Latest";
import Contact from "./pages/Contact";
import Navbar from "./components/NAvbar";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/chapters" element={<GlobalChapters />} />
          <Route path="/latest" element={<Latest />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Navbar />
      </BrowserRouter>
    </>
  );
}

export default App;
