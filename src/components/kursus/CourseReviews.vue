<script setup lang="ts">
import { ref, onMounted, watch } from "vue";
import { useReviewStore } from "../../stores/UseReviewStore";
import { Star, Edit, Trash2 } from "lucide-vue-next";
import type { Review, CreateReviewPayload } from "../../types/review";

const props = defineProps<{
    courseId: number;
}>();

const reviewStore = useReviewStore();

const formData = ref<CreateReviewPayload>({
    reviewer: "",
    rating: 5,
    comment: "",
});

const editingId = ref<number | null>(null);

const handleSubmit = async () => {
    try {
        if (editingId.value) {
            await reviewStore.editReview(editingId.value, formData.value);
            editingId.value = null;
        } else {
            await reviewStore.addReview(props.courseId, formData.value);
        }
        formData.value = { reviewer: "", rating: 5, comment: "" };
    } catch (err) {
        console.error("Failed to submit review:", err);
    }
};

const handleEdit = (review: Review) => {
    editingId.value = review.id;
    formData.value = {
        reviewer: review.reviewer,
        rating: review.rating,
        comment: review.comment,
    };
};

const handleCancelEdit = () => {
    editingId.value = null;
    formData.value = { reviewer: "", rating: 5, comment: "" };
};

const handleDelete = async (reviewId: number) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus ulasan ini?")) {
        await reviewStore.removeReview(reviewId);
    }
};

onMounted(() => {
    reviewStore.fetchReviews(props.courseId);
});

watch(() => props.courseId, (newId) => {
    reviewStore.fetchReviews(newId);
});
</script>

<template>
    <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm mt-8">
        <h2 class="text-xl font-bold text-[#111827] mb-6">Ulasan Kursus</h2>

        <div v-if="reviewStore.error" class="text-red-500 mb-4">
            {{ reviewStore.error }}
        </div>

        <!-- Form Tambah/Edit Ulasan -->
        <form @submit.prevent="handleSubmit" class="mb-8 space-y-4">
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Nama Reviewer
                </label>
                <input
                    v-model="formData.reviewer"
                    type="text"
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                    placeholder="Masukkan nama Anda"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Rating (1-5)
                </label>
                <input
                    v-model.number="formData.rating"
                    type="number"
                    min="1"
                    max="5"
                    required
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                />
            </div>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1">
                    Komentar
                </label>
                <textarea
                    v-model="formData.comment"
                    required
                    rows="3"
                    class="w-full border border-gray-300 rounded-lg px-4 py-2 text-sm focus:ring-[#00BFA5] focus:border-[#00BFA5] outline-none"
                    placeholder="Tulis ulasan Anda tentang kursus ini..."
                ></textarea>
            </div>
            <div class="flex gap-3">
                <button
                    type="submit"
                    class="bg-[#30364F] text-white px-5 py-2 rounded-lg text-sm font-semibold hover:bg-[#1a1e2d] transition-colors"
                >
                    {{ editingId ? "Simpan Perubahan" : "Kirim Ulasan" }}
                </button>
                <button
                    v-if="editingId"
                    type="button"
                    @click="handleCancelEdit"
                    class="bg-gray-100 text-gray-600 px-5 py-2 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors"
                >
                    Batal
                </button>
            </div>
        </form>

        <!-- Daftar Ulasan -->
        <div class="space-y-6">
            <div v-if="reviewStore.isLoading && reviewStore.reviews.length === 0" class="text-gray-500">
                Memuat ulasan...
            </div>

            <div v-else-if="reviewStore.reviews.length === 0" class="text-gray-500 text-sm">
                Belum ada ulasan untuk kursus ini.
            </div>

            <div v-else class="space-y-6">
                <div
                    v-for="review in reviewStore.reviews"
                    :key="review.id"
                    class="border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                >
                    <div class="flex justify-between items-start mb-2">
                        <div>
                            <h4 class="font-bold text-[#111827]">{{ review.reviewer }}</h4>
                            <div class="flex items-center gap-1 mt-1">
                                <Star
                                    v-for="n in 5"
                                    :key="n"
                                    :size="14"
                                    :class="n <= review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'"
                                />
                            </div>
                        </div>
                        <div class="flex gap-2">
                            <button
                                @click="handleEdit(review)"
                                class="text-gray-400 hover:text-blue-500 transition-colors"
                                title="Edit Ulasan"
                            >
                                <Edit :size="16" />
                            </button>
                            <button
                                @click="handleDelete(review.id)"
                                class="text-gray-400 hover:text-red-500 transition-colors"
                                title="Hapus Ulasan"
                            >
                                <Trash2 :size="16" />
                            </button>
                        </div>
                    </div>
                    <p class="text-gray-600 text-sm leading-relaxed mt-2">
                        {{ review.comment }}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
