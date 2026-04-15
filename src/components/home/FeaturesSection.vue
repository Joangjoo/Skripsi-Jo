<script setup lang="ts">
import { Zap, Server, Package } from 'lucide-vue-next';
import { useCurriculumStore } from '../../stores/UseCuriculumStore';
import { onMounted } from 'vue';

const curiculum = useCurriculumStore()

onMounted(async () => {
    if (!curiculum.ListCurriculum.length) {
        await curiculum.fetchAllCurriculum()
    }
})
</script>

<template>
    <section class="max-w-[1280px] mx-auto px-8 py-20">
        <!-- Section Header -->
        <div class="text-center mb-16">
            <h3 class="text-[#00BFA5] font-bold text-sm tracking-widest uppercase mb-3">Hasil Pembelajaran</h3>
            <h2 class="text-4xl font-extrabold text-[#30364F]">Kurikulum Terarah oleh Ahli</h2>
        </div>

        <!-- Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="itemCuriculum, index in curiculum.ListCurriculum" :key=index
                class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                <div class="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                    <Zap v-if="index === 0" :size="24" class="fill-current" />
                    <Server v-if="index === 1" :size="24" class="fill-current" />
                    <Package v-if="index === 2" :size="24" class="fill-current" />
                </div>
                <h3 class="text-xl font-bold text-[#30364F] mb-3">{{ itemCuriculum.title }}</h3>
                <p class="text-gray-500 leading-relaxed text-sm">
                    {{ itemCuriculum.description }}
                </p>
            </div>
        </div>
    </section>
</template>
