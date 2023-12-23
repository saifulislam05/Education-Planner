// App.js
import React, { useState } from "react";
import Header from "./Components/Header/Header";
import PlannerList from "./Components/Planner/PlannerList";

function App() {
  const [plannerItems, setPlannerItems] = useState([]);

  const handleAddItem = (newItem) => {
    setPlannerItems([{ ...newItem, id: Date.now() }, ...plannerItems]);
  };

  const handleUpdateItem = (id, updatedItem) => {
    const updatedItems = plannerItems.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    setPlannerItems(updatedItems);
  };

  const handleDeleteItem = (id) => {
    const updatedItems = plannerItems.filter((item) => item.id !== id);
    setPlannerItems(updatedItems);
  };

  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[600px] bg-[#182234] rounded-xl overflow-hidden p-4">
        <Header onAddItem={handleAddItem} />
        <PlannerList
          plannerItems={plannerItems}
          onUpdateItem={handleUpdateItem}
          onDeleteItem={handleDeleteItem}
        />
      </div>
    </div>
  );
}

export default App;
