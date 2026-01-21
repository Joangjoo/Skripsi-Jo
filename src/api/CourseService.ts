import api from "./axiosInstance";

export const getCourses = async () => {
    const response = await api.get('/courses')
    return response.data
}
