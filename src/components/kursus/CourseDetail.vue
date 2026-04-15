<script setup lang="ts">
import { onMounted } from "vue";
import { useCourseStore } from "../../stores/UseCourseStore";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import {
    Clock, User,
    RotateCw,
    CheckCircle2,
    Globe,
    MonitorSmartphone,
    Infinity,
    Share2,
    Bookmark,
    AlertCircle,
    BarChart,
    ArrowLeft,
    ChevronRight,
} from "lucide-vue-next";
import CourseReviews from "./CourseReviews.vue";

const courseStore = useCourseStore()
const { CourseDetail, learnItems, moduleItems } = storeToRefs(courseStore)

const route = useRoute()
const id = route.params.id

const MOCK_DATA = {
    term: "Fall 2024",
    features: [
        { icon: CheckCircle2, label: "Verified Certificate" },
        { icon: Globe, label: "English (Subtitle available)" },
        { icon: MonitorSmartphone, label: "Desktop, Mobile, Tablet" },
        { icon: Infinity, label: "Full Lifetime Access" },
    ],
}

onMounted(() => {
    courseStore.fetchCourseById(Number(id))
})

</script>

<template>
<div class="min-h-screen bg-[#F9FAFB] font-sans pb-20">
      <!-- HEADER SECTION -->
      <div class="bg-[#F9FAFB]  pb-12">
        <div class="max-w-6xl mx-auto px-6">
          <!-- Back Navigation -->
          <div class="flex items-center gap-4 text-sm mb-8 font-sans">
            <RouterLink
              to="/courses"
              class="flex items-center gap-2 text-[#30364F] font-bold hover:underline"
            >
              <ArrowLeft :size="16" />
              Kembali ke Katalog
            </RouterLink>
            <span class="text-gray-300">|</span>
            <div class="flex items-center gap-2 text-gray-500">
              <span>Kursus</span>
              <ChevronRight :size="14" />
              <span class="text-gray-900 font-medium truncate max-w-[200px]">
                {{ CourseDetail?.title }}
              </span>
            </div>
          </div>

          <div class="border-l-4 border-[#30364F] pl-6">
            <!-- Tags -->
            <div class="flex items-center gap-3 mb-6">
              <span class="bg-emerald-50 text-[#00BFA5] text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide flex items-center gap-1">
                <MonitorSmartphone :size="12" />
                {{ CourseDetail?.category_name }}
              </span>
              <span class="bg-gray-100 text-gray-600 text-xs font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide flex items-center gap-1">
                <BarChart :size="12" />
                {{ CourseDetail?.level_name }}
              </span>
            </div>

            <!-- Title -->
            <h1 class="text-4xl md:text-5xl font-extrabold text-[#111827] mb-6 leading-tight max-w-4xl tracking-tight">
              {{ CourseDetail?.title }}
            </h1>

            <!-- Subtitle / Short Description -->
            <p class="text-lg text-gray-500 mb-8 max-w-2xl leading-relaxed">
              {{ CourseDetail?.subtitle }}
            </p>

            <!-- Meta Info -->
            <div class="flex flex-wrap items-center gap-8 text-sm font-medium text-gray-500">
              <div class="flex items-center gap-2">
                <Clock :size="18" class="text-[#30364F]" />
                <span>{{ CourseDetail?.duration }}</span>
              </div>
              <div class="flex items-center gap-2">
                <User :size="18" class="text-[#30364F]" />
                <span>{{ CourseDetail?.instructor }}</span>
              </div>
              <div class="flex items-center gap-2">
                <RotateCw :size="18" class="text-[#30364F]" />
                <span>Last Updated {{ CourseDetail?.last_updated }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        <!-- LEFT COLUMN - MAIN CONTENT -->
        <div class="lg:col-span-2 space-y-10">
          <!-- Overview Section -->
          <div class="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 class="text-xl font-bold text-[#111827] mb-6">
              Ringkasan Kursus
            </h2>
            <div class="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
              <p>
                {{ CourseDetail?.overview }}
              </p>
              <p>{{ CourseDetail?.description }}</p>
            </div>

            <div class="mt-8">
              <h3 class="text-base font-bold text-[#111827] mb-4">
                Apa yang akan Anda pelajari:
              </h3>
              <ul class="space-y-3">
                <li v-for="(point, idx) in learnItems" :key="idx" class="flex items-start gap-3">
                  <div class="min-w-1.5 h-1.5 rounded-full bg-[#00BFA5] mt-2" />
                  <span class="text-gray-600 text-sm leading-relaxed">
                    {{ point }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- Modules Section -->
          <div>
            <h2 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-6">
              Module Highlights
            </h2>
            <ul class="space-y-4">
              <li v-for="(module, idx) in moduleItems" :key="idx" class="bg-white p-6 rounded-xl border border-gray-100 flex items-center gap-5 hover:shadow-md transition-shadow group">
                  <div class="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-500 group-hover:bg-[#30364F] group-hover:text-white transition-colors">
                    {{ idx + 1 }}
                  </div>
                  <div class="grow">
                    <h3 class="font-bold text-[#111827] text-base mb-1">
                      {{ module }}
                    </h3>
                  </div>
                </li>
            </ul>
          </div>

          <CourseReviews :courseId="Number(id)" />
        </div>

        <!-- RIGHT COLUMN - SIDEBAR -->
        <div class="lg:col-span-1">
          <div class="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg sticky top-24">

            <p class="text-gray-500 text-sm font-medium mb-1">
              Course Registration
            </p>
            <div class="text-4xl font-extrabold text-[#30364F] mb-6">
              {{ CourseDetail?.price }}
            </div>

            <!-- Includes -->
            <div class="mb-8">
              <h4 class="text-xs font-bold text-gray-400 uppercase tracking-wider mb-4">
                Includes
              </h4>
              <ul class="space-y-4">
                  <li v-for="(feature, idx) in MOCK_DATA.features" :key="idx" class="flex items-center gap-3">
                    <component :is="feature.icon" :size="18" class="text-[#00BFA5]" />
                    <span class="text-sm text-gray-600 font-medium">
                      {{ feature.label }}
                    </span>
                  </li>
              </ul>
            </div>

            <!-- Footer Actions -->
            <div class="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
              <button class="text-gray-400 hover:text-[#30364F] transition-colors">
                <Share2 :size="20" />
              </button>
              <button class="text-gray-400 hover:text-[#30364F] transition-colors">
                <Bookmark :size="20" />
              </button>
              <button class="text-gray-400 hover:text-[#30364F] transition-colors">
                <AlertCircle :size="20" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>