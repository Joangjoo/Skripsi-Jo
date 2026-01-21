import CourseCard from "./CourseCard";
import { courses } from "../../../data/courses";

const CourseGrid = () => {
    return (
        <div>
            {/* Results Count & Mode Badge */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-gray-500">
                    Ditemukan <span className="font-bold text-[#30364F]">{courses.length}</span> Hasil
                </div>
                <div className="bg-[#E0F2F1] text-[#00BFA5] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                    Mode Performa: Aktif
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>
        </div>
    );
};

export default CourseGrid;
