import React from "react";
import Header from "./Components/Header/Header";
import PlannerList from "./Components/Planner/PlannerList";


function App() {
  return (
    <div className="w-screen h-screen overflow-hidden flex justify-center items-center">
      <div className="w-[500px] bg-[#182234] rounded-xl overflow-hidden p-4">
        <Header />
        <PlannerList />
      </div>
    </div>
  );
}

export default App;
