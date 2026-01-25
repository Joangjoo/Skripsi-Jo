<script setup lang="ts">
import CourseCard from './CourseCard.vue';
import { useCourseStore } from '../../stores/UseCourseStore';
import { onMounted, ref, computed } from 'vue';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';

const courseStore = useCourseStore();
const LIMIT = 8
const STEP = 4
const visibleCount = ref(LIMIT);

const visibleCourses = computed(() => {
    return courseStore.ListCourses.slice(0, visibleCount.value)
});

const isCollapsing = ref(false);

const toogleCourses = () => {
    if (isCollapsing.value) {
        visibleCount.value = Math.max(LIMIT, visibleCount.value - STEP);
        if (visibleCount.value <= LIMIT) {
            isCollapsing.value = false;
        }
    } else {
        visibleCount.value = Math.min(courseStore.ListCourses.length, visibleCount.value + STEP);
        if (visibleCount.value >= courseStore.ListCourses.length) {
            isCollapsing.value = true;
        }
    }
}

onMounted(async () => {
    if (!courseStore.ListCourses.length) {
        await courseStore.fetchAllCourses()
    }
})
</script>

<template>
    <div>
        <!-- Results Count & Mode Badge -->
        <div class="flex justify-between items-center mb-8">
            <div class="text-gray-500">
                Ditemukan <span class="font-bold text-[#30364F]">{{ courseStore.ListCourses.length }}</span> Hasil
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

        <div v-if="courseStore.ListCourses.length > LIMIT" class="flex justify-center mt-10">
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
