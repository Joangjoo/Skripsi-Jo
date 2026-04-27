import { Search, Filter, ChevronDown, ArrowUpDown } from "lucide-react";
import { useCourseStore } from "../../../store/UseCourseStore";
import { useState } from "react";

const SORT_OPTIONS = [
    { value: "rating-desc", label: "Rating Tertinggi" },
    { value: "rating-asc", label: "Rating Terendah" },
    { value: "price-asc", label: "Harga Terendah" },
    { value: "price-desc", label: "Harga Tertinggi" },
    { value: "title-asc", label: "Judul (A-Z)" },
    { value: "title-desc", label: "Judul (Z-A)" },
];

const FilterBar = () => {
    const { searchQuery, setSearchQuery, setFilterCategoryQuery, setSortQuery, sortQuery, ListCourses } = useCourseStore();
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("Semua Kategori");
    const [isSortOpen, setIsSortOpen] = useState(false);

    const handleSortSelect = (value: string) => {
        setSortQuery(value);
        setIsSortOpen(false);
    };

    const getSortLabel = (value: string) => {
        const option = SORT_OPTIONS.find(opt => opt.value === value);
        return option ? option.label : "Urutkan";
    };

    return (
        <div className="bg-gray-50/50 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
            {/* Search */}
            <div className="relative flex-1 w-full">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Cari kursus..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#30364F] transition-colors bg-white"
                />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full md:w-64 z-20">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between text-gray-600 hover:border-gray-300 transition-colors cursor-pointer"
                >
                    <span className="truncate block max-w-[85%] text-left">{selectedCategory}</span>
                    <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
                </button>

                {isOpen && (
                    <>
                        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {["Semua Kategori", ...new Set(ListCourses.map(course => course.category_name))].map((category, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setSelectedCategory(category)
                                        setIsOpen(false)
                                    }}
                                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-gray-700 ${selectedCategory === category ? "bg-gray-100 font-medium" : ""
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                        {/* Backdrop to close dropdown */}
                        <div onClick={() => setIsOpen(false)} className="fixed inset-0 z-10 cursor-default"></div>
                    </>
                )}
            </div>

            {/* Apply Filter Button */}
            <button
                className="w-full md:w-auto h-12 px-6 bg-[#30364F] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#252a3d] transition-colors shadow-lg hover:shadow-xl cursor-pointer"
                onClick={() => setFilterCategoryQuery(selectedCategory)}
            >
                <Filter size={18} />
                <span>Terapkan Filter</span>
            </button>

            {/* Sort Dropdown */}
            <div className="relative w-full md:w-56 z-20">
                <button
                    onClick={() => setIsSortOpen(!isSortOpen)}
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between text-gray-600 hover:border-gray-300 transition-colors cursor-pointer"
                >
                    <span className="truncate block max-w-[85%] text-left">{getSortLabel(sortQuery)}</span>
                    <ArrowUpDown size={16} className={`transition-transform duration-200 ${isSortOpen ? "rotate-180" : ""}`} />
                </button>

                {isSortOpen && (
                    <>
                        <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                            {SORT_OPTIONS.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => handleSortSelect(option.value)}
                                    className={`w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors text-gray-700 ${sortQuery === option.value ? "bg-gray-100 font-medium" : ""
                                        }`}
                                >
                                    {option.label}
                                </button>
                            ))}
                        </div>
                        {/* Backdrop to close dropdown */}
                        <div onClick={() => setIsSortOpen(false)} className="fixed inset-0 z-10 cursor-default"></div>
                    </>
                )}
            </div>
        </div>
    );
};

export default FilterBar;
