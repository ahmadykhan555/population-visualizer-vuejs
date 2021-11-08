import axios from "axios";

export const httpGET = async (url) => {
  return await (await axios.get(url)).data;
};
export const httpPOST = () => {};
