import React, { useState } from "react";

function Header({ onAddItem }) {
  const [newItem, setNewItem] = useState({ text: "", hours: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({
      ...newItem,
      [name]: name === "hours" ? parseInt(value, 10) : value,
    });
  };

  const handleAddButtonClick = () => {
    if (newItem.text && newItem.hours) {
      onAddItem(newItem);
      setNewItem({ text: "", hours: "" });
    }
  };
  return (
    <header className="header p-3 rounded-e-md bg-[#1e293b]">
      <h1 className="name text-center uppercase text-white text-2xl font-bold mb-3">
        Education Planner
      </h1>
      <div className="flex justify-between items-center">
        <input
          type="text"
          name="text"
          value={newItem.text}
          onChange={handleInputChange}
          placeholder="Type your plan"
          className="input input-sm input-bordered input-success w-4/6"
        />
        <input
          type="number"
          name="hours"
          value={newItem.hours}
          onChange={handleInputChange}
          placeholder="Hour"
          className="input input-sm input-bordered input-success w-2/12"
        />
        <button
          onClick={handleAddButtonClick}
          className="btn btn-sm btn-success"
        >
          Add
        </button>
      </div>
    </header>
  );
}

export default Header;
