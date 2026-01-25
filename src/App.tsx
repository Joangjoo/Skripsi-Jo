import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Courses from "./pages/Courses/Courses";
import CourseDetail from "./pages/Courses/components/CourseDetail";
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Navbar />
      <div className="grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
