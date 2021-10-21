import axios from "axios";
import { BACKEND_BASE_URL } from "../config/config";

const instance = axios.create({
  baseURL: BACKEND_BASE_URL,
});

export const getMessage = async (): Promise<string> => {
  return await instance.get("/").then((res) => {
    return res.data as string;
  });
};
