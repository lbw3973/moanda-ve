import axios from "axios";
import { instance } from "./axios";
import { IResInstagramList } from "@/types/insta";

export const getUserId = async () => {
  const res = await instance.get(`/me?fields=id,username&access_token=${import.meta.env.VITE_MOANDAVE_TOKEN}`);
  return res;
};

export const getInstagramPost = async (limit: number) => {
  const res = await instance.get(
    `${
      import.meta.env.VITE_MOANDAVE_USER_ID
    }/media?fields=id,media_type,media_url,thumbnail_url,caption,timestamp,permalink,children{media_type,media_url,permalink}&access_token=${
      import.meta.env.VITE_MOANDAVE_TOKEN
    }&limit=${limit}`,
  );
  return res.data;
};

export const getInstagramNextPost = async (url: string): Promise<IResInstagramList> => {
  const res = await axios.get(url);
  return res.data;
};
