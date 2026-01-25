import { create } from "zustand";
import { getCourses } from "../api/CourseService";
import type { Course } from "../types";

interface CourseState {
  ListCourses: Course[];
  isLoading: boolean;
  error: string | null;
  fetchAllCourses: () => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  ListCourses: [],
  isLoading: false,
  error: null,

  fetchAllCourses: async () => {
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
}));
