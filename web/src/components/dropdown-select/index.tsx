import React from "react";
import { SortOptions } from "../../pages/items";

interface DropdownSelectProps {
  selectedSortOption: SortOptions;
  sortOptions: SortOptions[];
  handleSelectedOnChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DropdownSelect: React.FC<DropdownSelectProps> = (props) => {
  const { selectedSortOption, sortOptions, handleSelectedOnChange } = props;

  return (
    <div>
      <select
        value={selectedSortOption.value}
        onChange={(e) => handleSelectedOnChange(e)}
      >
        <option value="">Select Sort Method...</option>
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownSelect;
