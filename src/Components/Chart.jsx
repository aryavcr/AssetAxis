/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import img6 from "../assets/three-small.png";
import { PiBankBold } from "react-icons/pi";
import { SiBitcoinsv } from "react-icons/si";
import { GiReceiveMoney } from "react-icons/gi";
import { FaStar } from "react-icons/fa6";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const dayss = ["7D", "30D", "90D", "180D"];
function Chart() {
  var [focus, setfocus] = useState(false);

  return (
    <div className="pt-5  px-24 text-[#1a202c]">
      <div className="heading tracking-tight font-['Lora'] text-4xl">
        Asset<span className="italic">axis</span>{" "}
      </div>
      <div className="subheading text-[#8c8cb1] text-sm">
        Invest & earn passive yields on your assets.
      </div>
      <div className="charts mt-10 flex gap-20">
        <div className="chart1 ">
          <div className="flex">
            <div>
              <div className="tvl-heading text-[#8c8cb1] text-sm ">
                Total Value Locked
              </div>
              <div className="tvl text-xl font-medium ">$325,180,200</div>
            </div>
            <div className="days flex items-center w-fit h-fit justify-evenly rounded-2xl border ml-60  font-semibold text-[#8c8cb1] border-[#d5d5fb]">
              {dayss.map((value, index) => {
                return (
                  <>
                    <button className={`rounded-xl py-1 px-3 m-1`}>
                      {value}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
          <div className="areac1 w-[650px] h-60 p-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="pv"
                  stroke="#8884d8"
                  fillOpacity={1}
                  fill="url(#colorPv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="chart2 w-full ">
          <div className="flex">
            <div>
              <div className="vol-heading text-[#8c8cb1] text-sm ">Volume</div>
              <div className="vol text-xl font-medium ">$541,407,199</div>
            </div>
            <div className=" days flex items-center w-fit h-fit rounded-2xl border ml-48 font-semibold text-[#8c8cb1] border-[#d5d5fb]">
              <button
                onClick={() => setfocus(true)}
                className={` rounded-xl py-1 px-3 m-1 ${
                  focus ? "bg-[#d5d5fb] text-[#190037]" : "white"
                }`}
              >
                7D
              </button>
              <button
                onClick={() => setfocus(true)}
                className={` rounded-xl py-1 px-3 m-1 ${
                  focus ? "bg-[#d5d5fb] text-[#190037]" : "white"
                }`}
              >
                30D
              </button>
              <button
                onClick={() => setfocus(true)}
                className={` rounded-xl py-1 px-3 m-1 ${
                  focus ? "bg-[#d5d5fb] text-[#190037]" : "white"
                }`}
              >
                90D
              </button>
              <button
                onClick={() => setfocus(true)}
                className={` rounded-xl py-1 px-3 m-1 ${
                  focus ? "bg-[#d5d5fb] text-[#190037]" : "white"
                }`}
              >
                180D
              </button>
            </div>
          </div>
          <div className="areac2 p-4 h-56">
            <ResponsiveContainer height="100%">
              <AreaChart
                data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
              >
                <defs>
                  <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="uv"
                  stroke="#82ca9d"
                  fillOpacity={1}
                  fill="url(#colorUv)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="menu mt-5 flex w-full justify-between items-end">
        <div className="menu1 flex ">
          <div className="all py-3 px-7 font-bold text-[#8c8cb1] rounded-t-2xl flex gap-2 items-center">
            {" "}
            <GiReceiveMoney /> All{" "}
          </div>
          <div className="Traditional py-3 px-7 font-bold text-[#8c8cb1] rounded-t-2xl flex items-center gap-2">
            {" "}
            <PiBankBold /> Centralised
          </div>
          <div className="Decentralised py-3 px-7 font-bold text-[#8c8cb1] rounded-t-2xl flex items-center gap-2 ">
            <SiBitcoinsv />
            Decentralised
          </div>
          <div className="py-3 px-7 font-bold text-[#8c8cb1] rounded-t-2xl flex items-center gap-2">
            {" "}
            <FaStar />
            Favourites{" "}
          </div>
        </div>
        <div className=" mr-32 w-40 h-[90px] overflow-hidden">
          <img src={img6}></img>
        </div>
      </div>
    </div>
  );
}

export default Chart;
