import axios from "axios";

const createInstance = () => {
  const instance = axios.create({
    baseURL: "https://graph.instagram.com/v18.0",
    timeout: 10000,
    headers: {
      "Content-Type": "application/json",
    },
  });

  return instance;
};
export const instance = createInstance();
