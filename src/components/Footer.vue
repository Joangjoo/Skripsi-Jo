<script setup lang="ts">
import { GraduationCap, Globe, MessageCircle } from 'lucide-vue-next';
</script>

<template>
    <footer class="bg-white py-8 mt-auto">
        <div class="max-w-[1280px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <!-- Left: Brand -->
            <div class="flex items-center gap-3">
                <div class="w-9 h-9 bg-gray-200 rounded-lg flex items-center justify-center text-[#30364F]">
                    <GraduationCap :size="18" />
                </div>
                <span class="text-[#30364F] font-bold text-sm">Katalog Kursus © 2024</span>
            </div>

            <!-- Right: Actions -->
            <div class="flex items-center gap-3">
                <button
                    class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#30364F] hover:bg-gray-50 transition-colors">
                    <Globe :size="18" />
                </button>
                <button
                    class="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-[#30364F] hover:bg-gray-50 transition-colors">
                    <MessageCircle :size="18" />
                </button>
            </div>
        </div>
    </footer>
</template>
