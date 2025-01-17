"use client";

import axios from "axios";

const axiosInstance = axios.create({
  timeout: 10000,
  baseURL: "https://sharp-funnels.vercel.app/api/v1",
  headers: {
    Authorization:
      typeof window !== "undefined"
        ? `Bearer ${localStorage.getItem("token")}`
        : "",
  },
});

export const getRequest = async (
  url: string,
  params = {},
  setTime?: (e: boolean) => void
) => {
  try {
    const response = await axiosInstance.get(url, { params });
    return response.data;
  } catch (error: any) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    if (axios.isCancel(error)) {
      console.log("Canceled due to timeout");
      setTime?.(true);
    }
    throw error;
  }
};

export const delRequest = async (url: string, params = {}) => {
  try {
    const response = await axiosInstance.delete(url, { params });
    return response.data;
  } catch (error: any) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const postRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.post(url, data);
    return response.data;
  } catch (error: any) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const putRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.put(url, data);
    return response.data;
  } catch (error: any) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};

export const patchRequest = async (url: string, data: any) => {
  try {
    const response = await axiosInstance.patch(url, data);
    return response.data;
  } catch (error: any) {
    if (error.response.data === "Unauthorized") {
      window.location.replace("/auth/login");
    }
    throw error;
  }
};
