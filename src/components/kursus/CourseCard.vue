<script setup lang="ts">
import { ArrowRight, Clock } from 'lucide-vue-next';
import type { Course } from '../../types';

defineProps<{
    course: Course
}>();
</script>

<template>
    <RouterLink :to="`/courses/${course.id}`">
        <div
            class="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col h-full">
            <div class="h-48 overflow-hidden relative">
                <div
                    class="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-xs font-bold text-[#30364F] z-10 shadow-sm">
                    {{ course.category_name }}
                </div>
                <img :src="course.thumbnail" :alt="course.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div
                    class="absolute inset-0 bg-linear-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                </div>
            </div>

            <!-- Content -->
            <div class="p-6 flex flex-col grow">
                <h3 class="text-xl font-bold text-[#30364F] mb-3 leading-snug">{{ course.title }}</h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-3 grow">
                    {{ course.description }}
                </p>

                <!-- Footer -->
                <div class="flex items-center justify-between pt-4 border-t border-gray-50 mt-auto">
                    <div class="flex items-center gap-2 text-gray-400 text-xs font-medium">
                        <Clock :size="14" />
                        <span>{{ course.level_name }}</span>
                    </div>
                    <button
                        class="flex items-center gap-1 text-[#30364F] text-sm font-bold group-hover:gap-2 transition-all cursor-pointer">
                        Detail
                        <ArrowRight :size="16" />
                    </button>
                </div>
            </div>
        </div>
    </RouterLink>
</template>
