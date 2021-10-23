import axios from "axios";
import { BACKEND_IP, BACKEND_PORT } from "../config/config";

const instance = axios.create({
  baseURL: `${BACKEND_IP}:${BACKEND_PORT}`,
});

export const getMessage = async (): Promise<string> => {
  return await instance.get("/").then((res) => {
    return res.data as string;
  });
};
