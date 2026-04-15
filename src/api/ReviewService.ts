import api from "./axiosInstance";
import type { Review } from "../types/review";

export interface CreateReviewPayload {
  reviewer: string;
  rating: number;
  comment: string;
}

export const getReviews = async (courseId: number): Promise<Review[]> => {
  const response = await api.get<Review[]>(`/courses/${courseId}/reviews`);
  return response.data;
};

export const createReview = async (
  courseId: number,
  payload: CreateReviewPayload,
): Promise<Review> => {
  const response = await api.post<Review>(
    `/courses/${courseId}/reviews`,
    payload,
  );
  return response.data;
};

export const updateReview = async (
  reviewId: number,
  payload: CreateReviewPayload,
): Promise<Review> => {
  const response = await api.put<Review>(`/reviews/${reviewId}`, payload);
  return response.data;
};

export const deleteReview = async (reviewId: number): Promise<void> => {
  await api.delete(`/reviews/${reviewId}`);
};
