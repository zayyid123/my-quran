/* eslint-disable @typescript-eslint/no-explicit-any */
import { axiosInstance } from "../config/axios/fetchAxos";

export const getAllSurah = async () => {
    const response = axiosInstance.get(`/api/surah`);
    return response;
};

export const getDetailSurah = async (nomor: any) => {
    const response = axiosInstance.get(`/api/surah/${nomor}`);
    return response;
};