import { Zap, Server, Package } from "lucide-react";
import { useCurriculumStore } from "../../../store/useCuriculumStore";
import { useEffect } from "react";

const FeaturesSection = () => {

    const { data, fetchCurriculum } =
        useCurriculumStore();

    useEffect(() => {
        fetchCurriculum();
    }, []);
    return (
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
                {data.map((item, index) => (
                    <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100"
                    key={item.id}
                    >
                        <div className="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                            {index === 0 && <Zap size={24} className="fill-current" />}
                            {index === 1 && <Server size={24} className="fill-current" />}
                            {index === 2 && <Package size={24} className="fill-current" />}
                        </div>
                        <h3 className="text-xl font-bold text-[#30364F] mb-3">{item.title}</h3>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {item.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
