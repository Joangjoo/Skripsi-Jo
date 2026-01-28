import { defineStore } from "pinia";
import { getCourses, getCourseById } from "../api/CourseService";
import type { Course } from "../types";
import { ref } from "vue";

interface CourseState {
  ListCourses: Course[];
  CourseDetail: Course | null;
  learnItems: string[];
  moduleItems: string[];
  isLoading: boolean;
  error: string | null;
  searchQuery: string;
  filterCategoryQuery: string;
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
    filterCategoryQuery: "",
  }),
  actions: {
    async fetchAllCourses() {
      this.isLoading = true;
      try {
        this.ListCourses = await getCourses();
      } catch (error) {
        this.error = "Gagal Mengambil Data";
      } finally {
        this.isLoading = false;
      }
    },

    async fetchCourseById(id: number) {
      this.isLoading = true;
      this.error = null;

      try {
        const data = await getCourseById(id);
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

        this.CourseDetail = data;
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
