/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar";
import Chart from "./Components/Chart";
import Centralized from "./Components/Centralized";
import Decentralized from "./Components/Decentralized";
import Degen from "./Components/Degen";
import Allcards from "./Components/Allcards";

function App() {
  return (
    <div className="w-full h-full">
      <div>
      <div className="w-full h-fit bg-[#f0f0ff]">
        <Navbar />
        <Chart />
        </div>
        <Decentralized className="" />
      </div>
    </div>
  );
}

export default App;
