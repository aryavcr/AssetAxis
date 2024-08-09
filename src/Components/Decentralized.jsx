// eslint-disable-next-line no-unused-vars
import React from "react";
import { MdOutlineElectricBolt } from "react-icons/md";

function Decentralized() {
  return (
    <div className="h-fit w-full bg-[#fbfbff]">
      <div className="px-20 py-10">
        <div className="h-fit w-[1400px] p-3 rounded-2xl text-[#8c8cb1] flex justify-between items-center">
        <div className=" w-[5%]"></div>
            <button className="w-[25%] pl-1 text-left">Name</button>
            <button className="w-[20%] text-left">Entity</button>
            <button className="w-[10%] text-left">Liquidity</button>
            <button className="w-[10%] text-left">Volume</button>
            <button className="w-[10%] text-left">Risk Level</button>
            <button className="w-[10%] text-left">APY</button>
            <button className="w-[10%] text-left">Popularity</button>   
        </div>
        <div className="shadow-sm h-fit w-[1400px] p-3 rounded-2xl bg-white border1 text-[#190037] flex justify-between items-center">
            <div className=" w-[5%] bg-[#f8e4fb]">h</div>
            <button className="w-[25%] text-left">Gold Bonds</button>
            <button className="w-[20%] text-left">US Government</button>
            <button className="w-[10%] text-left">$1.2M</button>
            <button className="w-[10%] text-left">$33.2M</button>
            <button className="w-[10%] flex items-center pl-6"><span className=" bg-[#feeacb] text-[#5f2700] h-fit w-fit px-2 py-[1px] rounded-md">A</span></button>
            <button className="w-[10%] text-left">5.22%</button>
            <div className="w-[10%]"><span className=" flex items-center gap-1 h-fit w-fit font-['Inter'] bg-[#dcf8d9] py-1 px-3 text-sm rounded-full text-[#055607]"><MdOutlineElectricBolt/>  Trending</span></div>
        </div>
      </div>
    </div>
  );
}

export default Decentralized;
