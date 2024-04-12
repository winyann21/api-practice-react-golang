import { ITEMS_END_POINTS } from "./api";

interface SortedItemsResponse {
  type: string;
  sortedItems: string[];
}

export const fetchSortedItems = async (sortOption: string, items: string[]) => {
  const requestConfig = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      type: sortOption,
      items: items,
    }),
  };

  try {
    const sortItems = await fetch(
      `http://localhost:5000${ITEMS_END_POINTS.ITEMS_SORT}`,
      requestConfig
    );
    const sortedItemsRes: SortedItemsResponse = await sortItems.json();
    return sortedItemsRes.sortedItems;
  } catch (error) {
    alert(error);
    return items;
  }
};
