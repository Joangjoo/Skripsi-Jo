import React, { useEffect, useState } from "react";
import { useReviewStore } from "../../../store/useReviewStore";
import { Star, Edit, Trash2 } from "lucide-react";
import type { Review } from "../../../types/review"; // "riview" typo based on user file

interface CourseReviewsProps {
    courseId: number;
}

const CourseReviews: React.FC<CourseReviewsProps> = ({ courseId }) => {
    const {
        reviews,
        isLoading,
        error,
        fetchReviews,
        addReview,
        editReview,
        removeReview,
    } = useReviewStore();

    const [formData, setFormData] = useState({
        reviewer: "",
        rating: 5,
        comment: "",
    });
    const [editingId, setEditingId] = useState<number | null>(null);

    useEffect(() => {
        fetchReviews(courseId);
    }, [courseId, fetchReviews]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (editingId) {
                await editReview(editingId, formData);
                setEditingId(null);
            } else {
                await addReview(courseId, formData);
            }
            setFormData({ reviewer: "", rating: 5, comment: "" });
        } catch (err) {
            console.error("Failed to submit review:", err);
        }
    };

    const handleEdit = (review: Review) => {
        setEditingId(review.id);
        setFormData({
            reviewer: review.reviewer,
            rating: review.rating,
            comment: review.comment,
        });
    };

    const handleCancelEdit = () => {
        setEditingId(null);
        setFormData({ reviewer: "", rating: 5, comment: "" });
    };

    if (isLoading && reviews.length === 0) {
        return <p className="text-gray-500">Memuat ulasan...</p>;
    }

    return (
        <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mt-8">
            <h2 className="text-xl font-bold text-[#111827] mb-6">Ulasan Kursus</h2>

            {error && <p className="text-red-500 mb-4">{error}</p>}

            {/* Form Tambah/Edit Ulasan */}
            <form onSubmit={handleSubmit} className="mb-8 space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Nama Reviewer
                    </label>
                    <input
                        type="text"
                        value={formData.reviewer}
                        onChange={(e) => setFormData({ ...formData, reviewer: e.target.value })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                        placeholder="Masukkan nama Anda"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Rating (1-5)
                    </label>
                    <input
                        type="number"
                        min="1"
                        max="5"
                        value={formData.rating}
                        onChange={(e) => setFormData({ ...formData, rating: Number(e.target.value) })}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Komentar
                    </label>
                    <textarea
                        value={formData.comment}
                        onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                        required
                        rows={3}
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                        placeholder="Tulis ulasan Anda tentang kursus ini..."
                    ></textarea>
                </div>
                <div className="flex gap-3">
                    <button
                        type="submit"
                        className="bg-[#30364F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a1e2d] transition-colors"
                    >
                        {editingId ? "Simpan Perubahan" : "Kirim Ulasan"}
                    </button>
                    {editingId && (
                        <button
                            type="button"
                            onClick={handleCancelEdit}
                            className="bg-gray-100 text-gray-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                        >
                            Batal
                        </button>
                    )}
                </div>
            </form>

            {/* Daftar Ulasan */}
            <div className="space-y-6">
                {reviews.length === 0 && !isLoading ? (
                    <p className="text-gray-500 text-sm">Belum ada ulasan untuk kursus ini.</p>
                ) : (
                    reviews.map((review) => (
                        <div key={review.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                            <div className="flex justify-between items-start mb-2">
                                <div>
                                    <h4 className="font-bold text-[#111827]">{review.reviewer}</h4>
                                    <div className="flex items-center gap-1 mt-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                size={14}
                                                className={i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <button
                                        onClick={() => handleEdit(review)}
                                        className="text-gray-400 hover:text-blue-500 transition-colors"
                                        title="Edit Ulasan"
                                    >
                                        <Edit size={16} />
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (window.confirm("Apakah Anda yakin ingin menghapus ulasan ini?")) {
                                                removeReview(review.id);
                                            }
                                        }}
                                        className="text-gray-400 hover:text-red-500 transition-colors"
                                        title="Hapus Ulasan"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mt-2">{review.comment}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default CourseReviews;
