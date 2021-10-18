import axios from "axios";

const instance = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_BASE_URL,
});

export const getMessage = async (): Promise<string> => {
  return await instance.get("/").then((res) => {
    return res.data as string;
  });
};
