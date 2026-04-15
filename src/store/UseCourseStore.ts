import { create } from "zustand";
import { getCourses, getCourseDetail } from "../api/CourseService";
import type { CourseState } from "../types";

export const useCourseStore = create<CourseState>((set, get) => ({
  ListCourses: [],
  CourseDetail: null,
  learnItems: [],
  moduleItems: [],
  isLoading: false,
  error: null,
  searchQuery: "",
  filterCategoryQuery: "Semua Kategori",
  sortQuery: "rating-desc",
  setSearchQuery: (query) => set({ searchQuery: query }),
  setFilterCategoryQuery: (query) => set({ filterCategoryQuery: query }),
  setSortQuery: (query) => set({ sortQuery: query }),

  fetchAllCourses: async () => {
    // Caching Strategy: If data exists, don't re-fetch
    if (get().ListCourses.length > 0) return;

    set({ isLoading: true, error: null });

    try {
      const data = await getCourses();
      set({ ListCourses: data });
    } catch {
      set({ error: "Gagal Mengambil Data" });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchCourseDetail: async (id: number) => {
    // Caching Strategy: If current detail matches requested ID, don't re-fetch
    const currentDetail = get().CourseDetail;
    if (currentDetail && currentDetail.id === id) return;

    set({ isLoading: true, error: null });

    try {
      const data = await getCourseDetail(id);

      // Safe Parsing Logic
      const parseList = (input: string | string[]) => {
        if (Array.isArray(input)) return input;
        if (typeof input === "string") {
          return input
            .replace(/[{}]/g, "")
            .split(",")
            .map((item) => item.trim());
        }
        return [];
      };

      const parsedLearn = parseList(data.learn);
      const parsedModule = parseList(data.module);

      set({
        CourseDetail: {
          ...data,
          learn: parsedLearn,
          module: parsedModule,
        },
      });
    } catch {
      set({ error: "Gagal Mengambil Data" });
    } finally {
      set({ isLoading: false });
    }
  },
}));
