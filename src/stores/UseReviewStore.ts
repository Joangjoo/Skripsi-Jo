import { defineStore } from "pinia";
import { ref } from "vue";
import {
    getReviews,
    createReview,
    updateReview,
    deleteReview,
    type CreateReviewPayload,
} from "../api/ReviewService";
import type { Review } from "../types/review";

export const useReviewStore = defineStore("review", () => {
    const reviews = ref<Review[]>([]);
    const isLoading = ref(false);
    const error = ref<string | null>(null);

    const fetchReviews = async (courseId: number) => {
        isLoading.value = true;
        error.value = null;
        try {
            const data = await getReviews(courseId);
            reviews.value = data;
        } catch {
            error.value = "Gagal memuat ulasan";
        } finally {
            isLoading.value = false;
        }
    };

    const addReview = async (courseId: number, payload: CreateReviewPayload) => {
        const newReview = await createReview(courseId, payload);
        reviews.value = [newReview, ...reviews.value];
    };

    const editReview = async (reviewId: number, payload: CreateReviewPayload) => {
        const updated = await updateReview(reviewId, payload);
        reviews.value = reviews.value.map((r) => (r.id === reviewId ? updated : r));
    };

    const removeReview = async (reviewId: number) => {
        await deleteReview(reviewId);
        reviews.value = reviews.value.filter((r) => r.id !== reviewId);
    };

    return {
        reviews,
        isLoading,
        error,
        fetchReviews,
        addReview,
        editReview,
        removeReview,
    };
});
