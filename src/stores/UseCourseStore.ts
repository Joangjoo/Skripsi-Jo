import { defineStore } from "pinia";
import { getCourses, getCourseById } from "../api/CourseService";
import type { Course } from "../types";

interface CourseState {
  ListCourses: Course[];
  CourseDetail: Course | null;
  learnItems: string[];
  moduleItems: string[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  filterCategoryQuery: string;
  sortQuery: string;
}

export const useCourseStore = defineStore("course", {
  state: (): CourseState => ({
    ListCourses: [] as Course[],
    CourseDetail: null,
    learnItems: [] as string[],
    moduleItems: [] as string[],
    isLoading: false,
    error: null,
    searchQuery: "",
    filterCategoryQuery: "Semua Kategori",
    sortQuery: "rating-desc",
  }),
  actions: {
    async fetchAllCourses() {
      // Caching Strategy: If data exists, don't re-fetch
      if (this.ListCourses.length > 0) return;

      this.isLoading = true;
      this.error = null;

      try {
        this.ListCourses = await getCourses();
      } catch (error) {
        this.error = "Gagal Mengambil Data";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCourseById(id: number) {
      // Caching Strategy: If current detail matches requested ID, don't re-fetch
      if (this.CourseDetail && this.CourseDetail.id === id) return;

      this.isLoading = true;
      this.error = null;

      try {
        const data = await getCourseById(id);

        // Safe Parsing Logic - Handle both array and string
        const parseList = (input: string | string[] | undefined): string[] => {
          if (Array.isArray(input)) return input;
          if (typeof input === "string") {
            return input
              .replace(/[{}]/g, "")
              .split(",")
              .map((item: string) => item.trim());
          }
          return [];
        };

        const parsedLearn = parseList(data.learn);
        const parsedModule = parseList(data.module);

        this.CourseDetail = {
          ...data,
          learn: parsedLearn,
          module: parsedModule,
        };
        this.learnItems = parsedLearn;
        this.moduleItems = parsedModule;
      } catch (error) {
        this.error = "Gagal Mengambil Data";
      } finally {
        this.isLoading = false;
      }
    },

    setSearchQuery(query: string) {
      this.searchQuery = query;
    },

    setFilterCategoryQuery(query: string) {
      this.filterCategoryQuery = query;
    },

    setSortQuery(query: string) {
      this.sortQuery = query;
    },
  },
  getters: {
    uniqueCategories: (state) => {
      const categories = state.ListCourses.map(
        (course) => course.category_name,
      );
      return [...new Set(categories)];
    },
  },
});
