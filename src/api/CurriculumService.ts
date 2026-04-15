import api from "./axiosInstance";
import type { Curriculum } from "../types";


export const getCurriculum = async (): Promise<Curriculum[]> => {
    const response = await api.get<Curriculum[]>("/curriculum");
    return response.data;
};
