export interface Course {
  id: number;
  title: string;
  category: string;
  categoryColor: string;
  image: string;
  description: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Algoritma Lanjutan",
    category: "Teknologi",
    categoryColor: "bg-[#00BFA5]",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb", // Circuit board/tech
    description:
      "Studi mendalam tentang pola desain algoritmik, analisis kompleksitas, dan optimasi kode untuk aplikasi skala besar.",
    duration: "12 Minggu",
  },
  {
    id: 2,
    title: "Genetika Molekuler",
    category: "Sains",
    categoryColor: "bg-[#00BFA5]", // Using same teal color for consistency or can vary
    image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69", // DNA/Science
    description:
      "Eksplorasi ekspresi gen, regulasi, dan mekanisme molekuler pewarisan sifat pada tingkat sel.",
    duration: "10 Minggu",
  },
  {
    id: 3,
    title: "Teori Makroekonomi",
    category: "Bisnis",
    categoryColor: "bg-[#00BFA5]",
    image: "https://images.unsplash.com/photo-1611974765270-ca12586343bb", // Charts/Business
    description:
      "Analisis pendapatan nasional, pengangguran, dan dinamika inflasi dalam ekonomi global modern.",
    duration: "15 Minggu",
  },
  {
    id: 4,
    title: "Kecerdasan Buatan",
    category: "Teknologi",
    categoryColor: "bg-[#00BFA5]",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485", // AI/Neural network
    description:
      "Konsep dasar dalam pembelajaran mesin, jaringan saraf, dan sistem cerdas masa depan.",
    duration: "14 Minggu",
  },
  {
    id: 5,
    title: "Strategi Pertahanan Siber",
    category: "Keamanan",
    categoryColor: "bg-[#00BFA5]",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3", // Lock/Security
    description:
      "Protokol tingkat lanjut untuk melindungi sistem jaringan dari ancaman digital modern.",
    duration: "8 Minggu",
  },
  {
    id: 6,
    title: "Desain UX Interaktif",
    category: "Seni",
    categoryColor: "bg-[#00BFA5]",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5", // 3D/Design abstract
    description:
      "Prinsip psikologis desain antarmuka dan pengujian pengalaman pengguna yang efektif.",
    duration: "10 Minggu",
  },
];
