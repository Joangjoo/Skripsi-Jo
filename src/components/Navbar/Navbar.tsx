import { Link, useLocation } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
    const location = useLocation();

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 font-sans">
            {/* Left: Logo Section */}
            <div className="flex-1 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#30364F] rounded-lg flex items-center justify-center text-white shadow-sm">
                    <GraduationCap size={24} />
                </div>
                <div className="font-bold text-xl flex items-center tracking-tight">
                    <span className="text-[#30364F]">Analisis</span>
                    <span className="text-[#00BFA5] ml-1">Catalog</span>
                </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="flex items-center gap-8">
                <Link
                    to="/"
                    className={
                        isActive("/")
                            ? "text-[#30364F] font-bold text-sm border-b-2 border-[#30364F] pb-1"
                            : "text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
                    }
                >
                    Beranda
                </Link>
                <Link
                    to="/courses"
                    className={
                        isActive("/courses")
                            ? "text-[#30364F] font-bold text-sm border-b-2 border-[#30364F] pb-1"
                            : "text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors"
                    }
                >
                    Kursus
                </Link>
            </div>

            {/* Right: User Avatar */}
            <div className="flex-1 flex justify-end">
                <div className="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-[#30364F] border border-gray-200">
                    JO
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
