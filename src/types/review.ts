export interface Review {
    id: number;
    course_id: number;
    reviewer: string;
    rating: number;
    comment: string;
    created_at: string;
}

export interface CreateReviewPayload {
    reviewer: string;
    rating: number;
    comment: string;
}
