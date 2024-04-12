import React, { useEffect, useState } from "react";
import { ITEMS_END_POINTS } from "../../services/sort-items/api";
import DropdownSelect from "../../components/dropdown-select";
import ItemsTable from "../../components/items-table";
import AddItemForm from "../../components/add-item-form";

interface SortedItemsResponse {
  type: string;
  sortedItems: string[];
}

export interface SortOptions {
  value: string;
  label: string;
}

const ItemsPage = () => {
  const [items, setItems] = useState<string[]>([]);
  const [selectedSortOption, setSelectedSortOption] = useState<SortOptions>({
    label: "",
    value: "",
  });

  // CALL SORT ITEM ON THE BACKEND
  const fetchSortedItems = async () => {
    const requestConfig = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: selectedSortOption.value,
        items: items,
      }),
    };

    try {
      const sortItems = await fetch(
        `http://localhost:5000${ITEMS_END_POINTS.ITEMS_SORT}`,
        requestConfig
      );
      const sortedItemsRes: SortedItemsResponse = await sortItems.json();
      setItems([...sortedItemsRes.sortedItems]);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    if (selectedSortOption !== null && items.length !== 0) {
      fetchSortedItems();
    }
  }, [selectedSortOption]);

  // ADD ITEM
  const handleAddItem = async (item: string) => {
    setItems((prev: string[]) => [...prev, item]);
  };

  // SORT OPTIONS
  const sortOptions: SortOptions[] = [
    {
      value: "bubbleSort",
      label: "Bubble Sort",
    },
    {
      value: "mergeSort",
      label: "Merge Sort",
    },
  ];

  const handleSelectedSortOption = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = e.target.value;
    const selectedLabel =
      sortOptions.find((option) => option.value === selectedValue)?.label || "";
    setSelectedSortOption({
      label: selectedLabel,
      value: selectedValue,
    });
  };

  return (
    <div>
      <AddItemForm onSubmit={handleAddItem} />

      <DropdownSelect
        sortOptions={sortOptions}
        selectedSortOption={selectedSortOption}
        handleSelectedOnChange={handleSelectedSortOption}
      />

      <ItemsTable items={items} />
    </div>
  );
};

export default ItemsPage;
