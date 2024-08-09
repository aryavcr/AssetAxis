/* eslint-disable no-unused-vars */
import React from "react";
import { MdOutlineLocationSearching } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";
import img4 from "../assets/ring (light).png"


function Navbar() {
  return (
    <div>
    <div className="flex w-full justify-between items-center font-['Onest'] px-7 py-5 text-normal text-[#8c8cb1] font-medium" >
      <div className="h-10 w-10 "> <img className="" src={img4}></img>  </div>
      <div className="">Home</div>
      <div className="">TradFi</div>
      <div className="">DeFi</div>
      <div className=""><BsThreeDots/></div>
      <div className="w-[40%] rounded-xl font-normal bg-white text-[#718096] pt-2.5 shadow-sm text-base flex">< MdOutlineLocationSearching className="my-[3px] text-normal animate-ping mr-4 ml-4 text-[#190037]"/> Search by Symbol, Name or Ticker <span className=" ml-60 h-fit w-fit bg-[#edf2f7] rounded-lg border border-b-2 border-[#e2e8f0] px-2 mb-2 text-[#190037]">/</span> </div>
      <div className="flex gap-6">
      <div className="w-fit h-fit ml-40 my-1.5 px-4 py-1 shadow-sm rounded-xl text-[#190037] text-center bg-white">Portfolio</div>
      <div className="w-fit h-fit px-4 py-1 my-1.5 text-center shadow-md rounded-xl bg-black text-white">Login</div>
    </div></div>
    </div>
  );
}

export default Navbar;
