<script setup lang="ts">
import CourseHeader from '../components/kursus/CourseHeader.vue';
import FilterBar from '../components/kursus/FilterBar.vue';
import CourseGrid from '../components/kursus/CourseGrid.vue';
</script>

<template>
    <div class="max-w-[1280px] mx-auto px-8 py-3">
        <CourseHeader />
        <FilterBar />
        <CourseGrid />
    </div>
</template>