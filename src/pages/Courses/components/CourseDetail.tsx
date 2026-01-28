import { useParams, Link } from "react-router-dom";
import {
  Clock,
  User,
  RotateCw,
  CheckCircle2,
  Globe,
  MonitorSmartphone,
  Infinity,
  Share2,
  Bookmark,
  AlertCircle,
  BarChart,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect } from "react";
import { useCourseStore } from "../../../store/UseCourseStore";

const MOCK_DATA = {
  term: "Fall 2024",
  features: [
    { icon: CheckCircle2, label: "Verified Certificate" },
    { icon: Globe, label: "English (Subtitle available)" },
    { icon: MonitorSmartphone, label: "Desktop, Mobile, Tablet" },
    { icon: Infinity, label: "Full Lifetime Access" },
  ],
};

const CourseDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { CourseDetail, fetchCourseDetail, isLoading, error } = useCourseStore();
  const learnItems = Array.isArray(CourseDetail?.learn) ? CourseDetail?.learn : [];
  const moduleItems = Array.isArray(CourseDetail?.module) ? CourseDetail?.module : [];

  const getRandomHours = () => {
    const hours = Math.floor(Math.random() * 3) + 1;
    return `${hours} hours`;
  };

  useEffect(() => {
    if (id) {
      fetchCourseDetail(Number(id));
    }
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-gray-500 text-lg">Loading course details...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-red-500 font-medium">Error: {error}</p>
      </div>
    );
  }

  if (!CourseDetail) {
    return (
      <div className="flex h-[50vh] items-center justify-center">
        <p className="text-gray-500 font-medium">Course not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans pb-20">
      {/* HEADER SECTION */}
      <div className="bg-[#F9FAFB] pt-8 pb-12 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          {/* Back Navigation */}
          <div className="flex items-center gap-4 text-sm mb-8 font-sans">
            <Link
              to="/courses"
              className="flex items-center gap-2 text-[#30364F] font-bold hover:underline"
            >
              <ArrowLeft size={16} />
              Kembali ke Katalog
            </Link>
            <span className="text-gray-300">|</span>
            <div className="flex items-center gap-2 text-gray-500">
              <span>Kursus</span>
              <ChevronRight size={14} />
              <span className="text-gray-900 font-medium truncate max-w-[200px]">
                {CourseDetail.title}
              </span>
            </div>
          </div>

          <div className="border-l-4 border-[#30364F] pl-6">
            {/* Tags */}
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-emerald-50 text-[#00BFA5] text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide flex items-center gap-1">
                <MonitorSmartphone size={12} />
                {CourseDetail.category_name}
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide flex items-center gap-1">
                <BarChart size={12} />
                {CourseDetail.level_name}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 leading-tight max-w-4xl tracking-tight">
              {CourseDetail.title}
            </h1>

            {/* Subtitle / Short Description */}
            <p className="text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed">
              {CourseDetail.subtitle}
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-8 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <Clock size={18} className="text-[#30364F]" />
                <span>{CourseDetail.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={18} className="text-[#30364F]" />
                <span>{CourseDetail.instructor}</span>
              </div>
              <div className="flex items-center gap-2">
                <RotateCw size={18} className="text-[#30364F]" />
                <span>Last Updated {CourseDetail.last_updated}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* LEFT COLUMN - MAIN CONTENT */}
        <div className="lg:col-span-2 space-y-10">
          {/* Overview Section */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-xl font-bold text-[#111827] mb-6">
              Ringkasan Kursus
            </h2>
            <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                {CourseDetail.overview}
              </p>
              <p>{CourseDetail.description}</p>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-[#111827] mb-4">
                Apa yang akan Anda pelajari:
              </h3>
              <ul className="space-y-3">
                {learnItems?.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="min-w-1.5 h-1.5 rounded-full bg-[#00BFA5] mt-2" />
                    <span className="text-gray-600 text-sm leading-relaxed">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Modules Section */}
          <div>
            <h2 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
              Module Highlights
            </h2>
            <ul className="space-y-4">
              {moduleItems?.map((module, idx) => (
                <li
                  key={idx}
                  className="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow group"
                >
                  <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:bg-[#30364F] group-hover:text-white transition-colors">
                    {idx + 1}
                  </div>
                  <div className="grow">
                    <h3 className="font-bold text-[#111827] text-base mb-1">
                      {module}
                    </h3>
                  </div>
                  <span className="text-xs font-medium text-gray-400">
                    {getRandomHours()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* RIGHT COLUMN - SIDEBAR */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg sticky top-24">

            <p className="text-gray-500 text-sm font-medium mb-1">
              Course Registration
            </p>
            <div className="text-4xl font-extrabold text-[#30364F] mb-6">
              {CourseDetail.price}
            </div>

            {/* Includes */}
            <div className="mb-8">
              <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Includes
              </h4>
              <ul className="space-y-4">
                {MOCK_DATA.features.map((Feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <Feature.icon size={18} className="text-[#00BFA5]" />
                    <span className="text-sm text-gray-600 font-medium">
                      {Feature.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Footer Actions */}
            <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
              <button className="text-gray-400 hover:text-[#30364F] transition-colors">
                <Share2 size={20} />
              </button>
              <button className="text-gray-400 hover:text-[#30364F] transition-colors">
                <Bookmark size={20} />
              </button>
              <button className="text-gray-400 hover:text-[#30364F] transition-colors">
                <AlertCircle size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
