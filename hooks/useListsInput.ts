import { ChangeEvent, useMemo, useState } from "react";
import { item } from "@/docs/facility/listDocs";
export const useListsInput = () => {
    const [userInput, setUserInput] = useState<string>("");
    const searched = useMemo(
      () => item.filter((item) => item.name.includes(userInput)),
      [userInput]
    );
      const getSearchData = (e: ChangeEvent<HTMLInputElement>) => {
      setUserInput(e.target.value);
    };
    return {searched, getSearchData};
}