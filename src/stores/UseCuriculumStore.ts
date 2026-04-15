import { defineStore } from "pinia";
import { getCurriculum } from "../api/CurriculumService";
import type { Curriculum } from "../types";

interface CurriculumState {
  ListCurriculum: Curriculum[];
  isLoading: boolean;
  error: string | null;
}

export const useCurriculumStore = defineStore("curriculum", {
  state: (): CurriculumState => ({
    ListCurriculum: [] as Curriculum[],
    isLoading: false,
    error: null,
  }),
  actions: {
    async fetchAllCurriculum() {
      this.isLoading = true;
      try {
        this.ListCurriculum = await getCurriculum();
      } catch (error) {
        this.error = "Gagal Mengambil Data";
      } finally {
        this.isLoading = false;
      }
    },
  },
});
