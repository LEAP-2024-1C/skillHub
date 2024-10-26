"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TiDeleteOutline } from "react-icons/ti";

const SignUpSkills = () => {
  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] mt-20 mb-10 text-sm justify-center items-center ">
      <h2 className="text-[#118a00] text-2xl">Дэлгэрэнгүй бүртгэл</h2>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col gap-10 items-center w-[23%] p-10">
          <Avatar className="w-36 h-36 bg-[#f9f9f9]">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png" />
          </Avatar>

          <div className="relative hover:border  hover:border-[#118a00] rounded-2xl">
            <input
              type="file"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            />
            <button className="bg-[#f9f9f9]  text-xs px-3 py-1 rounded-2xl">
              Choose File
            </button>
          </div>
        </div>
        <div className="border-[1px] rounded-2xl p-10 bg-[#f9f9f9] w-[46%]">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Овог</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Нэр</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label>Дэлгэрэнгүй</label>
            <input
              type="text"
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff] min-h-40"
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label>И-мэйл</label>
            <input
              type="text"
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
            />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Ажлын газар</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Албан тушаал</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
              />
            </div>
          </div>
          <div className="mt-5 w-full">
            {/* input grp ehlel */}
            <div>Байршил</div>
            <select
              className="select select-bordered join-item w-full mt-2 p-2 rounded-lg text-slate-400 border border-gray-300 hover:border-[#118a00] bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#118a00]"
              aria-label="Choose an option"
            >
              <option disabled selected className="text-gray-400">
                Сонгох
              </option>
              <option>Баянгол</option>
              <option>Баянзүрх</option>
              <option>Хан-Уул</option>
            </select>
          </div>
          <div className="w-full flex justify-center">
            <button className="btn w-36 mt-10 mx-auto bg-[#118a00] text-white rounded-2xl">
              Хадгалах
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[28%] p-10 text-sm">
          <label>Таны ур чадварууд:</label>
          <div className="flex flex-wrap gap-3 mt-5">
            <div className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group">
              <p>Excel</p>
              <TiDeleteOutline
                size={15}
                color="#118a00"
                className="hidden group-hover:block"
              />
            </div>
            <div className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group">
              <p>Power BI</p>
              <TiDeleteOutline
                size={15}
                color="#118a00"
                className="hidden group-hover:block"
              />
            </div>
            <div className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group">
              <p>Санхүү</p>
              <TiDeleteOutline
                size={15}
                color="#118a00"
                className="hidden group-hover:block"
              />
            </div>
            <div className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group">
              <p>Software engineer</p>
              <TiDeleteOutline
                size={15}
                color="#118a00"
                className="hidden group-hover:block"
              />
            </div>
          </div>
          <label className="mt-5">Ур чадвар нэмэх:</label>
          <label className="mt-5">Категори:</label>
          <select className="select select-bordered join-item w-full hover:border-[#118a00] border-none bg-[#f9f9f9]">
            <option disabled selected>
              Сонгох
            </option>
            <option>Баянгол</option>
            <option>Баянзүрх</option>
            <option>Хан-Уул</option>
          </select>
          <label className="mt-5">Ур чадварууд:</label>
          <div className="flex flex-wrap gap-3 mt-5">
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Excel</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Power BI</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Санхүү</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Software engineer</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Excel</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Power BI</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Санхүү</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Software engineer</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Excel</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Power BI</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Санхүү</p>
            </button>
            <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
              <p>Software engineer</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSkills;
