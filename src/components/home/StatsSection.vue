<script setup lang="ts">
// No icons needed for stats strictly, but can add if decorative
</script>

<template>
    <section class="max-w-[1280px] mx-auto px-8 pb-20">
        <div
            class="bg-[#30364F] rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between text-white relative overflow-hidden shadow-2xl">
            <!-- Background Glow/Effect (Optional) -->
            <div
                class="absolute top-0 right-0 w-64 h-64 bg-[#00BFA5] opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
            </div>

            <!-- Left Content -->
            <div class="max-w-xl z-10 mb-10 md:mb-0 text-center md:text-left">
                <h2 class="text-3xl md:text-4xl font-extrabold mb-6 leading-tight">
                    Bergabung dengan <br />
                    50.000+ Developer
                </h2>
                <p class="text-gray-300 text-sm leading-relaxed max-w-md mx-auto md:mx-0">
                    Kursus kami dibangun berdasarkan data benchmarking empiris untuk memastikan Anda mempelajari apa
                    yang benar-benar bekerja di lingkungan produksi.
                </p>
            </div>

            <!-- Right Stats -->
            <div class="flex items-center gap-12 z-10">
                <div class="text-center">
                    <div class="text-3xl font-bold mb-1">24+</div>
                    <div class="text-[10px] tracking-widest text-[#00BFA5] uppercase font-bold">Kursus Ahli</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold mb-1">4.9/5</div>
                    <div class="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Rating Rata-Rata</div>
                </div>
                <div class="text-center">
                    <div class="text-3xl font-bold mb-1">Sertifikat</div>
                    <div class="text-[10px] tracking-widest text-gray-400 uppercase font-bold">Profil Terverifikasi
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
