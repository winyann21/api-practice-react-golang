import React, { useState } from "react";

interface AddItemFormProps {
  onSubmit: (item: string) => void;
}

const AddItemForm: React.FC<AddItemFormProps> = (props) => {
  const { onSubmit } = props;

  const [input, setInput] = useState<string>("");

  const handleSubmit = () => {
    if (input.trim() !== "") {
      onSubmit(input); //append input in to the array of strings
      setInput("");
    }
  };

  const handleSubmitOnKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        onKeyDown={handleSubmitOnKeyPress}
      />
      <button type="submit" onClick={handleSubmit}>
        Add Item
      </button>
    </div>
  );
};

export default AddItemForm;
