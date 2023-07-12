import instance from "@/util/axios";
import { postReqModel } from "@/model/createPost";

export const createPost = async (postData: postReqModel) => {
  try {
    console.log(postData);

    await instance.post("/feeds", postData);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
