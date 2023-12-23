// PlannerItem.js
import React from "react";

const PlannerItem = ({ item, onUpdateItem, onDeleteItem }) => {
  return (
    <div className="flex justify-between items-center py-2 border-b-2 border-[#212b3c]">
      <div className="w-2/3 flex justify-between items-center">
        <div className="w-4/6">
          <h3 className="text-white text-base">{item.text}</h3>
        </div>
        <div className="w-2/6">
          <h3 className="text-white text-base">{item.hours} Hours</h3>
        </div>
      </div>
      <div className="w-1/3 flex justify-end gap-2">
        <button
          onClick={() =>
            onUpdateItem(item.id, { ...item, hours: item.hours + 1 })
          }
          className="btn btn-sm btn-success rounded-xl"
        >
          +
        </button>
        <button
          onClick={() =>
            onUpdateItem(item.id, { ...item, hours: item.hours - 1 })
          }
          className="btn btn-sm btn-success rounded-xl"
        >
          -
        </button>
        <button
          onClick={() => onDeleteItem(item.id)}
          className="btn btn-sm btn-warning rounded-xl"
        >
          X
        </button>
      </div>
    </div>
  );
};

export default PlannerItem;
