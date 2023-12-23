// PlannerList.js
import React from "react";
import PlannerItem from "./Planneritem";


const PlannerList = ({ plannerItems, onUpdateItem, onDeleteItem }) => {
  return (
    <div className="min-h-16 p-3 flex flex-col gap-2">
      {plannerItems.map((item) => (
        <PlannerItem
          key={item.id}
          item={item}
          onUpdateItem={onUpdateItem}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default PlannerList;
