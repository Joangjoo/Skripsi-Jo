import { create } from "zustand";
import { getCourses, getCourseDetail } from "../api/CourseService";
import type { Course } from "../types";

interface CourseState {
  ListCourses: Course[];
  CourseDetail: Course | null;
  learnItems: string[];
  moduleItems: string[];
  isLoading: boolean;
  error: string | null;
  fetchAllCourses: () => Promise<void>;
  fetchCourseDetail: (id: number) => Promise<void>;
}

export const useCourseStore = create<CourseState>((set) => ({
  ListCourses: [],
  CourseDetail: null,
  learnItems: [],
  moduleItems: [],
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

  fetchCourseDetail: async (id: number) => {
    set({ isLoading: true, error: null });

    try {
      const data = await getCourseDetail(id);

      const parsedLearn =
        typeof data.learn === "string"
          ? data.learn
              .replace(/[{}]/g, "") 
              .split(",") 
              .map((item: string) => item.trim())
          : [];

      const parsedModule =
        typeof data.module === "string"
          ? data.module
              .replace(/[{}]/g, "") 
              .split(",") 
              .map((item: string) => item.trim())
          : [];

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
