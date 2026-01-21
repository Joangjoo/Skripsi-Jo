import { GraduationCap, Globe, MessageCircle } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white py-8 mt-auto border-t border-gray-100">
            <div className="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                {/* Left: Brand */}
                <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-[#30364F]">
                        <GraduationCap size={18} />
                    </div>
                    <span className="text-[#30364F] font-bold text-sm">Katalog Kursus © 2024</span>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-3">
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#30364F] hover:bg-gray-50 transition-colors cursor-pointer">
                        <Globe size={18} />
                    </button>
                    <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#30364F] hover:bg-gray-50 transition-colors cursor-pointer">
                        <MessageCircle size={18} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
