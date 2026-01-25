import api from "./axiosInstance";
import type { Course } from "../types";

export const getCourses = async (): Promise<Course[]> => {
  const response = await api.get<Course[]>("/courses");
  return response.data;
};
