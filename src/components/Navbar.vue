<script setup lang="ts">
import { GraduationCap } from 'lucide-vue-next';
import { RouterLink, useRoute } from 'vue-router';

// useRoute is available if we need to check active route explicitly to style
const route = useRoute();

// Simple helper to check if link is active, though router-link-active class exists, 
// the user had a specific design for active state (border-b-2)
const isActive = (path: string) => route.path === path;
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 font-sans">
    <!-- Left: Logo Section -->
    <div class="flex-1 flex items-center gap-3">
      <div class="w-10 h-10 bg-[#30364F] rounded-lg flex items-center justify-center text-white shadow-sm">
        <GraduationCap :size="24" />
      </div>
      <div class="font-bold text-xl flex items-center tracking-tight">
        <span class="text-[#30364F]">Analisis</span>
        <span class="text-[#00BFA5] ml-1">Catalog</span>
      </div>
    </div>

    <!-- Center: Navigation Links -->
    <div class="flex items-center gap-8">
      <RouterLink to="/" class="text-sm transition-colors"
        :class="isActive('/') ? 'text-[#30364F] font-bold border-b-2 border-[#30364F] pb-1' : 'text-gray-500 hover:text-gray-900 font-medium'">
        Beranda
      </RouterLink>
      <RouterLink to="/kursus" class="text-sm transition-colors"
        :class="isActive('/kursus') ? 'text-[#30364F] font-bold border-b-2 border-[#30364F] pb-1' : 'text-gray-500 hover:text-gray-900 font-medium'">
        Kursus
      </RouterLink>
    </div>

    <!-- Right: User Avatar -->
    <div class="flex-1 flex justify-end">
      <div
        class="w-9 h-9 rounded-full bg-gray-100 flex items-center justify-center text-xs font-bold text-[#30364F] border border-gray-200">
        JO
      </div>
    </div>
  </nav>
</template>
