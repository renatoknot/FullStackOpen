import React from "react";

const Filter = ({ search, handleSearch }) => {
  return (
    <div>
      Filter show with:{" "}
      <input value={search} onChange={handleSearch} placeholder="Type a name" />
    </div>
  );
};

export default Filter;
