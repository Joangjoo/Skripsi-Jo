<script setup lang="ts">
import { Zap, Server, Package } from 'lucide-vue-next';
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
            <!-- Card 1 -->
            <div
                class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                <div class="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                    <Zap :size="24" class="fill-current" />
                </div>
                <h3 class="text-xl font-bold text-[#30364F] mb-3">Kecepatan Runtime</h3>
                <p class="text-gray-500 leading-relaxed text-sm">
                    Pelajari cara mengidentifikasi dan mengeliminasi rendering bottleneck untuk mencapai pembaruan frame
                    sub-milidetik.
                </p>
            </div>

            <!-- Card 2 -->
            <div
                class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                <div class="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                    <Server :size="24" />
                </div>
                <h3 class="text-xl font-bold text-[#30364F] mb-3">Logika Hidrasi</h3>
                <p class="text-gray-500 leading-relaxed text-sm">
                    Kuasai partial hydration dan streaming SSR untuk meminimalkan Time to Interactive bagi pengguna
                    Anda.
                </p>
            </div>

            <!-- Card 3 -->
            <div
                class="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-transparent hover:border-gray-100">
                <div class="w-12 h-12 bg-[#30364F] rounded-lg flex items-center justify-center text-white mb-6">
                    <Package :size="24" />
                </div>
                <h3 class="text-xl font-bold text-[#30364F] mb-3">Efisiensi Bundle</h3>
                <p class="text-gray-500 leading-relaxed text-sm">
                    Teknik tree-shaking, code-splitting, dan audit dependensi untuk menjaga aset Anda tetap ringan.
                </p>
            </div>
        </div>
    </section>
</template>
