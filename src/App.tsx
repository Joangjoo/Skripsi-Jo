import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.css";

const Home = lazy(() => import("./pages/Home/Home"));
const Courses = lazy(() => import("./pages/Courses/Courses"));
const CourseDetail = lazy(() => import("./pages/Courses/components/CourseDetail"));

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans">
      <Navbar />
      <div className="pt-[80px] grow">
        <Suspense fallback={<div className="flex h-[50vh] items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:id" element={<CourseDetail />} />
          </Routes>
        </Suspense>
      </div>
      <Footer />
    </div>
  );
}

export default App;
