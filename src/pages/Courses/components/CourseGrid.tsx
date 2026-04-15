import { useEffect, useState, useMemo } from "react";
import CourseCard from "./CourseCard";
import { useCourseStore } from "../../../store/UseCourseStore";
import { ArrowRight, ArrowLeft } from "lucide-react";

const LIMIT = 8;
const STEP = 4;


const CourseGrid = () => {
    const { ListCourses, isLoading, error, fetchAllCourses, searchQuery, filterCategoryQuery, sortQuery } = useCourseStore();
    const [visibleCount, setVisibleCount] = useState<number>(LIMIT);

    useEffect(() => {
        fetchAllCourses();
    }, [fetchAllCourses]);

    const filteredCourses = useMemo(() => {
        let result = ListCourses.filter(course => {
            const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesCategory = filterCategoryQuery === "Semua Kategori" || course.category_name === filterCategoryQuery;
            return matchesSearch && matchesCategory;
        });

        // Sorting Logic
        result = [...result].sort((a, b) => {
            switch (sortQuery) {
                case "rating-desc":
                    return b.rating - a.rating;
                case "rating-asc":
                    return a.rating - b.rating;
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "title-asc":
                    return a.title.localeCompare(b.title);
                case "title-desc":
                    return b.title.localeCompare(a.title);
                default:
                    return 0;
            }
        });

        return result;
    }, [ListCourses, searchQuery, filterCategoryQuery, sortQuery]);

    const visibleCourses = useMemo(() => {
        return filteredCourses.slice(0, visibleCount);
    }, [filteredCourses, visibleCount]);

    const [isCollapsing, setIsCollapsing] = useState(false);
    useEffect(() => {
        setVisibleCount(LIMIT);
    }, [searchQuery, filterCategoryQuery, sortQuery]);

    useEffect(() => {
        if (visibleCount <= LIMIT) setIsCollapsing(false);
        if (visibleCount >= filteredCourses.length && filteredCourses.length > LIMIT) setIsCollapsing(true);
    }, [visibleCount, filteredCourses.length]);

    const toggleCourses = () => {
        if (!isCollapsing) {
            const nextCount = visibleCount + STEP;
            if (nextCount >= filteredCourses.length) {
                setVisibleCount(filteredCourses.length);
                setIsCollapsing(true);
            } else {
                setVisibleCount(nextCount);
            }
        } else {
            const nextCount = visibleCount - STEP;
            if (nextCount <= LIMIT) {
                setVisibleCount(LIMIT);
                setIsCollapsing(false);
            } else {
                setVisibleCount(nextCount);
            }
        }
    };

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {[...Array(8)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse flex flex-col h-full"
                    >
                        <div className="h-48 bg-gray-200"></div>
                        <div className="p-6 flex flex-col grow gap-4">
                            <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="mt-auto pt-4 border-t border-gray-50 flex justify-between">
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center py-10 text-red-500">
                {error}
            </div>
        );
    }

    return (
        <div>
            {/* Results Count & Mode Badge */}
            <div className="flex justify-between items-center mb-8">
                <div className="text-gray-500">
                    Ditemukan <span className="font-bold text-[#30364F]">{filteredCourses.length}</span> Hasil
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {visibleCourses.map((course) => (
                    <CourseCard key={course.id} course={course} />
                ))}
            </div>

            {filteredCourses.length > LIMIT && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={toggleCourses}
                        className="flex items-center gap-2 px-6 py-3 rounded-full
                       bg-[#30364F] text-white font-semibold
                       transition-all hover:gap-3 cursor-pointer"
                    >
                        <span>
                            {!isCollapsing ? "Lihat Selengkapnya" : "Lihat Lebih Sedikit"}
                        </span>
                        {!isCollapsing ? (
                            <ArrowRight size={18} />
                        ) : (
                            <ArrowLeft size={18} />
                        )}
                    </button>
                </div>
            )}
        </div>
    );
};

export default CourseGrid;
