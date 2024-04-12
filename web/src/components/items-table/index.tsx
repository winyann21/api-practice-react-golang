import React from "react";

interface ItemsTable {
  items: string[];
}

const ItemsTable: React.FC<ItemsTable> = (props) => {
  const { items } = props;
  return (
    <div>
      <ul style={{ listStyle: "none", textDecoration: "none" }}>
        {items.length !== 0 && (
          <>
            {items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default ItemsTable;
