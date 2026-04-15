import { create } from "zustand";
import type { Curriculum } from "../types";
import { getCurriculum } from "../api/CurriculumService";

interface CurriculumState {
  data: Curriculum[];
  loading: boolean;
  error: string | null;
  fetchCurriculum: () => Promise<void>;
}

export const useCurriculumStore = create<CurriculumState>((set) => ({
  data: [],
  loading: false,
  error: null,

  fetchCurriculum: async () => {
    set({ loading: true, error: null });

    try {
      const result = await getCurriculum();
      set({ data: result, loading: false });
    } catch (error: any) {
      set({
        error: error.response?.data?.message || "Gagal mengambil data",
        loading: false,
      });
    }
  },
}));
