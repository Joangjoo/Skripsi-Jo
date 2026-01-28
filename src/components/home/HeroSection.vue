<script setup lang="ts">
import { ArrowRight, Star, Bookmark } from 'lucide-vue-next';
</script>

<template>
    <section class="max-w-[1280px] mx-auto px-8 py-24 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8">
            <!-- Badge -->
            <div class="inline-flex items-center bg-gray-100 gap-2 px-4 py-2 rounded-full">
                <span class="w-2 h-2 rounded-full bg-[#30364F]"></span>
                <span class="text-xs font-bold tracking-widest text-[#30364F] uppercase">Pendaftaran Dibuka: Musim Panas
                    2024</span>
            </div>

            <!-- Heading -->
            <h1 class="text-6xl font-extrabold text-[#30364F] tracking-tight leading-tight">
                Katalog Kursus <br />
                Performa.
            </h1>

            <!-- Description -->
            <p class="text-gray-500 text-lg leading-relaxed max-w-md">
                Platform pengujian efisiensi framework frontend. Pelajari teknik optimasi terdepan di industri dan
                arsitektur internal framework.
            </p>

            <!-- CTA Button -->
            <button
                class="group bg-[#30364F] text-white px-8 py-4 rounded-lg font-bold flex items-center gap-3 hover:bg-[#252a3d] transition-all shadow-lg hover:shadow-xl">
                Jelajahi Kursus
                <ArrowRight :size="20" class="group-hover:translate-x-1 transition-transform" />
            </button>
        </div>

        <!-- Right Content (Visuals) -->
        <div class="relative">
            <!-- Background Card -->
            <div
                class="bg-gray-100 rounded-3xl p-8 pb-32 relative overflow-hidden min-h-[500px] flex flex-col items-center justify-center">
                <!-- Decorative gradient or shape if needed, plain for now as per image look -->

                <!-- Cards Container - Absolute or Grid within -->
                <div class="flex flex-col gap-6 w-full max-w-md relative z-10">

                    <!-- Card 1 -->
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50">
                        <div class="flex justify-between items-start mb-4">
                            <span
                                class="bg-[#E0F2F1] text-[#00BFA5] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Lanjutan</span>
                            <Bookmark :size="20" class="text-gray-300 fill-gray-300" />
                        </div>
                        <h3 class="text-xl font-bold text-[#30364F] mb-4">Pendalaman Performa React</h3>
                        <div class="flex items-center gap-2 text-sm text-gray-500">
                            <Star :size="16" class="text-yellow-400 fill-yellow-400" />
                            <span class="font-bold text-[#30364F]">4.9</span>
                            <span>1.2rb Siswa</span>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div class="bg-white p-6 rounded-2xl shadow-sm border border-gray-100/50 translate-x-8 opacity-90">
                        <div class="flex justify-between items-start mb-4">
                            <span
                                class="bg-gray-200 text-[#30364F] text-[10px] font-bold px-3 py-1 rounded-sm uppercase tracking-wider">Menengah</span>
                            <Bookmark :size="20" class="text-gray-300 fill-gray-300" />
                        </div>
                        <h3 class="text-xl font-bold text-[#30364F]">Internal Vue 3.4</h3>
                        <!-- Truncated/Hidden details as per image style overlapping -->
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>
