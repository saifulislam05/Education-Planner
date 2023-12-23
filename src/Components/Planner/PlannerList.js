import React from "react";

const PlannerList = () => {
  return (
    <div className="min-h-16 p-3 flex flex-col gap-2">
      <div className="flex justify-between items-center py-2 border-b-2 border-[#212b3c]">
        <div className="w-2/3 flex justify-between items-center">
          <div className="w-4/6">
            <h3 className="text-white text-base">Web Dev</h3>
          </div>
          <div className="w-2/6">
            <h3 className="text-white text-base">4 Hours</h3>
          </div>
        </div>
        <div className="w-1/3 flex justify-end gap-2">
          <button className="btn btn-sm btn-success rounded-xl">+</button>
          <button className="btn btn-sm btn-success rounded-xl">-</button>
          <button className="btn btn-sm btn-warning rounded-xl">X</button>
        </div>
      </div>
      <div className="flex justify-between items-center py-2 border-b-2 border-[#212b3c]">
        <div className="w-2/3 flex justify-between items-center">
          <div className="w-4/6">
            <h3 className="text-white text-base">Web Dev</h3>
          </div>
          <div className="w-2/6">
            <h3 className="text-white text-base">4 Hours</h3>
          </div>
        </div>
        <div className="w-1/3 flex justify-end gap-2">
          <button className="btn btn-sm btn-success rounded-xl">+</button>
          <button className="btn btn-sm btn-success rounded-xl">-</button>
          <button className="btn btn-sm btn-warning rounded-xl">X</button>
        </div>
      </div>
    </div>
  );
};

export default PlannerList;
