<script setup lang="ts">
import CourseCard from './CourseCard.vue';
import { useCourseStore } from '../../stores/UseCourseStore';
import { onMounted, ref, computed, watch } from 'vue';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';

const courseStore = useCourseStore();
const LIMIT = 8;
const STEP = 4;
const visibleCount = ref(LIMIT);
const isCollapsing = ref(false);

// Single computed filter - matches React implementation
const filteredCourses = computed(() => {
    let result = courseStore.ListCourses.filter((course) => {
        const matchesSearch = course.title.toLowerCase().includes(courseStore.searchQuery.toLowerCase());
        const matchesCategory = courseStore.filterCategoryQuery === "Semua Kategori" || course.category_name === courseStore.filterCategoryQuery;
        return matchesSearch && matchesCategory;
    });

    // Sorting Logic - Matches React implementation
    result = [...result].sort((a, b) => {
        switch (courseStore.sortQuery) {
            case "rating-desc":
                return b.rating - a.rating;
            case "rating-asc":
                return a.rating - b.rating;
            case "price-asc":
                return a.price - b.price;
            case "price-desc":
                return b.price - a.price;
            case "title-asc":
                return a.title.localeCompare(b.title);
            case "title-desc":
                return b.title.localeCompare(a.title);
            default:
                return 0;
        }
    });

    return result;
});

const visibleCourses = computed(() => {
    return filteredCourses.value.slice(0, visibleCount.value);
});

// Watch for filter/sort changes to reset visible count and update collapse state
watch([() => courseStore.searchQuery, () => courseStore.filterCategoryQuery, () => courseStore.sortQuery], () => {
    visibleCount.value = LIMIT;
    isCollapsing.value = false;
});

// Update collapse state based on visible count
watch([visibleCount, filteredCourses], () => {
    if (visibleCount.value <= LIMIT) {
        isCollapsing.value = false;
    }
    if (visibleCount.value >= filteredCourses.value.length && filteredCourses.value.length > LIMIT) {
        isCollapsing.value = true;
    }
});

const toogleCourses = () => {
    if (!isCollapsing.value) {
        const nextCount = visibleCount.value + STEP;
        if (nextCount >= filteredCourses.value.length) {
            visibleCount.value = filteredCourses.value.length;
            isCollapsing.value = true;
        } else {
            visibleCount.value = nextCount;
        }
    } else {
        const nextCount = visibleCount.value - STEP;
        if (nextCount <= LIMIT) {
            visibleCount.value = LIMIT;
            isCollapsing.value = false;
        } else {
            visibleCount.value = nextCount;
        }
    }
};

onMounted(async () => {
    await courseStore.fetchAllCourses();
});
</script>

<template>
    <div>
        <!-- Results Count & Mode Badge -->
        <div class="flex justify-between items-center mb-8">
            <div class="text-gray-500">
                Ditemukan <span class="font-bold text-[#30364F]">{{ filteredCourses.length }}</span> Hasil
            </div>
        </div>

        <!-- Grid -->
        <div v-if="courseStore.isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <div v-for="n in 8" :key="n"
                class="bg-white rounded-2xl border border-gray-100 overflow-hidden animate-pulse flex flex-col h-full">
                <div class="h-48 bg-gray-200"></div>
                <div class="p-6 flex flex-col grow gap-4">
                    <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                    <div class="h-4 bg-gray-200 rounded w-full"></div>
                    <div class="h-4 bg-gray-200 rounded w-1/2"></div>
                    <div class="mt-auto pt-4 border-t border-gray-50 flex justify-between">
                        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                        <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CourseCard v-for="course in visibleCourses" :key="course.id" :course="course" />
        </div>

        <div v-if="filteredCourses.length > LIMIT" class="flex justify-center mt-10">
            <button @click="toogleCourses" class="flex items-center gap-2 px-6 py-3 rounded-full
           bg-[#30364F] text-white font-semibold
           transition-all hover:gap-3">
                <span>
                    {{ isCollapsing ? 'Lihat Lebih Sedikit' : 'Lihat Selengkapnya' }}
                </span>

                <component :is="isCollapsing ? ArrowLeft : ArrowRight" :size="18" />
            </button>
        </div>
    </div>
</template>
