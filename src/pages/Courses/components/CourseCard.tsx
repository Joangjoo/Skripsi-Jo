import { ArrowRight, Clock } from "lucide-react";
import type { Course } from "../../../data/courses";

interface CourseCardProps {
    course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => {
    return (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            {/* Image */}
            <div className="h-48 overflow-hidden relative">
                <span
                    className={`${course.categoryColor} absolute top-4 left-4 text-white text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider z-10`}
                >
                    {course.category}
                </span>
                <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold text-[#30364F] mb-3 leading-snug">
                    {course.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                    {course.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-medium">
                        <Clock size={14} />
                        <span>{course.duration}</span>
                    </div>
                    <button className="flex items-center gap-1 text-[#30364F] text-sm font-bold group-hover:gap-2 transition-all cursor-pointer">
                        Detail
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
