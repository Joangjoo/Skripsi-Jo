import { create } from "zustand";
import type { Review } from "../types/review";
import {
  getReviews,
  createReview,
  updateReview,
  deleteReview,
  type CreateReviewPayload,
} from "../api/ReviewService";

interface ReviewState {
  reviews: Review[];
  isLoading: boolean;
  error: string | null;
  fetchReviews: (courseId: number) => Promise<void>;
  addReview: (courseId: number, payload: CreateReviewPayload) => Promise<void>;
  editReview: (reviewId: number, payload: CreateReviewPayload) => Promise<void>;
  removeReview: (reviewId: number) => Promise<void>;
}

export const useReviewStore = create<ReviewState>((set, get) => ({
  reviews: [],
  isLoading: false,
  error: null,

  fetchReviews: async (courseId: number) => {
    set({ isLoading: true, error: null });
    try {
      const data = await getReviews(courseId);
      set({ reviews: data });
    } catch {
      set({ error: "Gagal memuat ulasan" });
    } finally {
      set({ isLoading: false });
    }
  },

  addReview: async (courseId: number, payload: CreateReviewPayload) => {
    const newReview = await createReview(courseId, payload);
    set({ reviews: [newReview, ...get().reviews] });
  },

  editReview: async (reviewId: number, payload: CreateReviewPayload) => {
    const updated = await updateReview(reviewId, payload);
    set({
      reviews: get().reviews.map((r) => (r.id === reviewId ? updated : r)),
    });
  },

  removeReview: async (reviewId: number) => {
    await deleteReview(reviewId);
    set({ reviews: get().reviews.filter((r) => r.id !== reviewId) });
  },
}));
