<script setup lang="ts">
import CourseCard from './CourseCard.vue';
import { useCourseStore } from '../../stores/UseCourseStore';
import { onMounted } from 'vue';

const courseStore = useCourseStore()

onMounted(() => {
    courseStore.fetchAllCourses()

    console.log(courseStore.ListCourses)
})
</script>

<template>
    <div>
        <!-- Results Count & Mode Badge -->
        <div class="flex justify-between items-center mb-8">
            <div class="text-gray-500">
                Ditemukan <span class="font-bold text-[#30364F]">{{ courseStore.ListCourses.length }}</span> Hasil
            </div>
            <div class="bg-[#E0F2F1] text-[#00BFA5] px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider">
                Mode Performa: Aktif
            </div>
        </div>

        <!-- Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <CourseCard v-for="course in courseStore.ListCourses" :key="course.id" :course="course" />
        </div>
    </div>
</template>
