import React from "react";

function Header() {
  return (
    <header className="header p-3 rounded-e-md bg-[#1e293b]">
      <h1 className="name text-center uppercase text-white text-2xl mb-3">
        Education Planner
      </h1>
      <div className="flex justify-between items-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-sm input-bordered input-success w-4/6"
        />
        <input
          type="number"
          className="input input-sm input-bordered input-success w-2/12"
        />
        <button className="btn btn-sm btn-success">Add</button>
      </div>
    </header>
  );
}

export default Header;
