import { instance } from "./axios";

export const getUserId = async () => {
  const res = await instance.get(`/me?fields=id,username&access_token=${import.meta.env.VITE_MOANDAVE_TOKEN}`);
  return res;
};

export const getInstagramPost = async () => {
  const res = await instance.get(
    `${import.meta.env.VITE_MOANDAVE_USER_ID}/media?fields=id,media_type,media_url,caption&access_token=${
      import.meta.env.VITE_MOANDAVE_TOKEN
    }`,
  );
  return res;
};
