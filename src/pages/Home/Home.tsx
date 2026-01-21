import { ArrowRight, Star, Bookmark, Zap, Server, Package } from "lucide-react";

const Home = () => {
    return (
        <div className="w-full">
            {/* Hero Section */}
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

            {/* Features Section */}
            <section className="max-w-[1280px] mx-auto px-8 py-20">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-[#00BFA5] font-bold text-sm tracking-widest uppercase mb-3">
                        Hasil Pembelajaran
                    </h3>
                    <h2 className="text-4xl font-extrabold text-[#30364F]">
                        Kurikulum Terarah oleh Ahli
                    </h2>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                        <div className="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                            <Zap size={24} className="fill-current" />
                        </div>
                        <h3 className="text-xl font-bold text-[#30364F] mb-3">Kecepatan Runtime</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Pelajari cara mengidentifikasi dan mengeliminasi rendering bottleneck untuk mencapai pembaruan frame
                            sub-milidetik.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                        <div className="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                            <Server size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#30364F] mb-3">Logika Hidrasi</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Kuasai partial hydration dan streaming SSR untuk meminimalkan Time to Interactive bagi pengguna
                            Anda.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                        <div className="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                            <Package size={24} />
                        </div>
                        <h3 className="text-xl font-bold text-[#30364F] mb-3">Efisiensi Bundle</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            Teknik tree-shaking, code-splitting, dan audit dependensi untuk menjaga aset Anda tetap ringan.
                        </p>
                    </div>
                </div>
            </section>
            {/* Stats Section */}
            <section className="max-w-[1280px] mx-auto px-8 pb-20">
                <div className="bg-[#30364F] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl">
                    {/* Background Glow/Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#00BFA5] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                    {/* Left Content */}
                    <div className="max-w-xl z-10 mb-10 md:mb-0 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                            Bergabung dengan <br />
                            50.000+ Developer
                        </h2>
                        <p className="text-gray-300 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                            Kursus kami dibangun berdasarkan data benchmarking empiris untuk memastikan Anda mempelajari apa
                            yang benar-benar bekerja di lingkungan produksi.
                        </p>
                    </div>

                    {/* Right Stats */}
                    <div className="flex items-center gap-12 z-10">
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">24+</div>
                            <div className="text-[10px] tracking-widest text-[#00BFA5] uppercase font-bold">Kursus Ahli</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">4.9/5</div>
                            <div className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Rating Rata-Rata</div>
                        </div>
                        <div className="text-center">
                            <div className="text-3xl font-bold mb-1">Sertifikat</div>
                            <div className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Profil Terverifikasi
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
