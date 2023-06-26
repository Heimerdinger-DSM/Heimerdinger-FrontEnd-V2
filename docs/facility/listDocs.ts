import { tags } from "./../main/facilitySearchDocs";
import { listDocsType } from "@/util/interface/facility/listDocsType";
import axios from "axios";
export const items = async () => {
  try {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_BASE_URL + "/facility/main"
    );

    console.log(response.data);
    const data = response.data;
    const item: listDocsType[] = data.map((itemData: any) => ({
      tag: itemData.tag,
      name: itemData.name,
      phone: itemData.phone,
    }));
    return item;
  } catch (error) {
    console.error(error);
    return [];
  }
};
export const item: listDocsType[] = [
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 대덕구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 동구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 서구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
  {
    tag: "중앙센터",
    name: "대전광역시 중구 치매 안심센터",
    phone: "042-288-8180",
  },
];
