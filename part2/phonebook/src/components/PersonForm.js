import React from "react";

const PersonForm = ({
  handleSubmit,
  newName,
  handleChangeName,
  newNumber,
  handleChangeNumber,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        Name: <input value={newName} onChange={handleChangeName} />
      </div>
      <div>
        Number: <input value={newNumber} onChange={handleChangeNumber} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default PersonForm;
