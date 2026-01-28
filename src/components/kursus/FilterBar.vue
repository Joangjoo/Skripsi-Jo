<script setup lang="ts">
import { Search, Filter, ChevronDown } from 'lucide-vue-next';
import { useCourseStore } from '../../stores/UseCourseStore';
import { ref } from 'vue';

const courseStore = useCourseStore();
const isOpen = ref(false);

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
}

const selectCategory = (category: string) => {
    if (courseStore.filterCategoryQuery === category) {
        courseStore.setFilterCategoryQuery('');
    } else {
        courseStore.setFilterCategoryQuery(category);
    }
    isOpen.value = false;
}

const applyFilters = () => {
}
</script>

<template>
    <div class="bg-gray-50/50 p-4 rounded-xl mb-8 flex flex-col md:flex-row gap-4 items-center border border-gray-100">
        <!-- Search -->
        <div class="relative flex-1 w-full">
            <Search :size="20" class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input type="text" placeholder="Cari kursus..." v-model="courseStore.searchQuery"
                class="w-full h-12 pl-12 pr-4 rounded-lg border border-gray-200 focus:outline-none focus:border-[#30364F] transition-colors bg-white" />
        </div>

        <!-- Category Dropdown -->
        <div class="relative w-full md:w-64 z-20">
            <button @click="toggleDropdown"
                class="w-full h-12 px-4 bg-white rounded-lg border border-gray-200 flex items-center justify-between text-gray-600 hover:border-gray-300 transition-colors">
                <span class="truncate block max-w-[85%] text-left">
                    {{ courseStore.filterCategoryQuery || 'Semua Kategori' }}
                </span>
                <ChevronDown :size="16" :class="{ 'rotate-180': isOpen }" class="transition-transform duration-200" />
            </button>

            <!-- Dropdown Menu -->
            <div v-if="isOpen" class="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg">

                <button v-for="category in courseStore.uniqueCategories" :key="category"
                    @click="selectCategory(category)"
                    class="w-full px-4 py-2 text-left hover:bg-gray-100 transition-colors"
                    :class="{ 'bg-gray-100 font-medium': courseStore.filterCategoryQuery === category }">
                    {{ category }}
                </button>
            </div>

            <!-- Backdrop to close dropdown -->
            <div v-if="isOpen" @click="isOpen = false" class="fixed inset-0 z-10 cursor-default"></div>
        </div>

        <!-- Apply Filter Button -->
        <button @click="applyFilters"
            class="w-full md:w-auto h-12 px-6 bg-[#30364F] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-[#252a3d] transition-colors shadow-custom hover:shadow-lg">
            <Filter :size="18" />
            <span>Terapkan Filter</span>
        </button>

    </div>
</template>
