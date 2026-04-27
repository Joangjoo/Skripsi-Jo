import CourseHeader from "./components/CourseHeader";
import FilterBar from "./components/FilterBar";
import CourseGrid from "./components/CourseGrid";

const Courses = () => {

    return (
        <div className="max-w-[1280px] mx-auto px-8 py-12">
            <CourseHeader />
            <FilterBar />
            <CourseGrid />
        </div>
    );
};

export default Courses;
