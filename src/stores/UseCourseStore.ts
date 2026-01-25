import { defineStore } from 'pinia'
import { getCourses } from '../api/CourseService'
import type { Course } from '../types'

interface CourseState {
    ListCourses: Course[];
    isLoading: boolean;
    error: string | null;
}

export const useCourseStore = defineStore('course', {
    state: (): CourseState => ({
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