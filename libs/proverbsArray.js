import { useState } from "react";
import shanProverb from "../constants/shan_proverbs.json";

// Extract the array of proverbs
export const proverbsArray = shanProverb.all_proverbs.flatMap((item) =>
  item.proverb_list.map((proverb) => ({
    key: proverb.proverb,
    proverb_key: item.proverb_key,
  }))
);

//Find proverb by key and proverbs_key
export function useSearchProverb() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getSearchProverb = (query) => {
    setIsLoading(true);
    setTimeout(() => {
      const filterProverb = proverbsArray.filter(
        (proverb) =>
          proverb.key.includes(query) || proverb.proverb_key.includes(query)
      );
      setData(filterProverb);
      setIsLoading(false);
    }, 500);
  };
  return { data, isLoading, getSearchProverb };
}
