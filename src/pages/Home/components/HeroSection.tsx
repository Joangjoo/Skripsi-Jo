import { ArrowRight, Star, Bookmark } from "lucide-react";

const HeroSection = () => {
    return (
        <section className="pt-32 pb-16 max-w-[1280px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-[#30364F]"></span>
                    <span className="text-xs font-bold tracking-widest text-[#30364F] uppercase">
                        Pendaftaran Dibuka: Musim Panas 2024
                    </span>
                </div>

                {/* Heading */}
                <h1 className="text-6xl font-extrabold text-[#30364F] tracking-tight leading-tight">
                    Katalog Kursus <br />
                    Performa.
                </h1>

                {/* Description */}
                <p className="text-gray-500 text-lg leading-relaxed max-w-md">
                    Platform pengujian efisiensi framework frontend. Pelajari teknik optimasi terdepan di industri dan
                    arsitektur internal framework.
                </p>

                {/* CTA Button */}
                <button className="group bg-[#30364F] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#252a3d] transition-all shadow-lg hover:shadow-xl cursor-pointer">
                    Jelajahi Kursus
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
            </div>

            {/* Right Content (Visuals) */}
            <div className="relative">
                {/* Background Card */}
                <div className="bg-gray-100 rounded-3xl p-8 pb-32 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center">

                    {/* Cards Container */}
                    <div className="flex flex-col gap-6 w-full max-w-md relative z-10">

                        {/* Card 1 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-[#E0F2F1] text-[#00BFA5] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                                    Lanjutan
                                </span>
                                <Bookmark size={20} className="text-gray-300 fill-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[#30364F] mb-4">
                                Pendalaman Performa React
                            </h3>
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Star size={16} className="text-yellow-400 fill-yellow-400" />
                                <span className="font-bold text-[#30364F]">4.9</span>
                                <span>1.2rb Siswa</span>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 translate-x-8 opacity-90">
                            <div className="flex justify-between items-start mb-4">
                                <span className="bg-gray-200 text-[#30364F] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">
                                    Menengah
                                </span>
                                <Bookmark size={20} className="text-gray-300 fill-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-[#30364F]">
                                Internal Vue 3.4
                            </h3>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
