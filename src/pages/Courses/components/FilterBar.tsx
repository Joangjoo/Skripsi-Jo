import { Search, Filter, ChevronDown } from "lucide-react";

const FilterBar = () => {
    return (
        <div className="bg-gray-50/50 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
            {/* Search */}
            <div className="relative flex-1 w-full">
                <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="text"
                    placeholder="Cari kursus..."
                    className="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#30364F] transition-colors bg-white"
                />
            </div>

            {/* Category Dropdown */}
            <div className="relative w-full md:w-64">
                <button
                    className="w-full h-12 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between text-gray-600 hover:border-gray-300 cursor-pointer"
                >
                    <span>Semua Kategori</span>
                    <ChevronDown size={16} />
                </button>
            </div>

            {/* Apply Filter Button */}
            <button
                className="w-full md:w-auto h-12 px-6 bg-[#30364F] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#252a3d] transition-colors cursor-pointer"
            >
                <Filter size={18} />
                <span>Terapkan Filter</span>
            </button>
        </div>
    );
};

export default FilterBar;
