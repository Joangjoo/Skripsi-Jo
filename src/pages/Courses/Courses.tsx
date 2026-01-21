import CourseHeader from "./components/CourseHeader";
import FilterBar from "./components/FilterBar";
import CourseGrid from "./components/CourseGrid";

const Courses = () => {
    return (
        <div className="pt-28 pb-16 px-8 max-w-[1280px] mx-auto min-h-screen">
            <CourseHeader />
            <FilterBar />
            <CourseGrid />
        </div>
    );
};

export default Courses;
