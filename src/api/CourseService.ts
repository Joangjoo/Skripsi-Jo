import api from "./axiosInstance";
import type { Course } from "../types";

export const getCourses = async (): Promise<Course[]> => {
    const response = await api.get('/courses')
    return response.data
}

export const getCourseById = async (id: number): Promise<Course> => {
    const response = await api.get(`/courses/${id}`)
    return response.data
}
