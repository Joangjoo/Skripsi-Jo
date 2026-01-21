import { defineStore } from 'pinia'
import { getCourses } from '../api/CourseService'
import type { Course } from '../types'

export const useCourseStore = defineStore('course', {
    state: () => ({
        ListCourses: [] as Course[],
        isLoading: false,
        error: null as string | null
    }),
    actions: {
        async fetchAllCourses() {
            this.isLoading = true
            try {
                this.ListCourses = await getCourses()
            } catch (error) {
                this.error = "Gagal Mengambil Data"
            } finally {
                this.isLoading = false
            }
        }
    }
})