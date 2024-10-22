"use client";

import { BiCategory } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { TbChartInfographic } from "react-icons/tb";
import { PiChalkboardTeacher } from "react-icons/pi";
import { GrCloudSoftware } from "react-icons/gr";
import { TbWriting } from "react-icons/tb";
import { MdOutlineDesignServices } from "react-icons/md";
import { RiEnglishInput } from "react-icons/ri";
import { GiSkills } from "react-icons/gi";
import { IoPeopleSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

export default function Category() {
  return (
    <main>
      <header className="h-16 w-full bg-[#7052ff] flex items-center text-white font-bold px-10 justify-between">
        <div className="flex gap-5 items-center">
          <img src="/logo.png" alt="photo" className="h-10" />
          <p>SkillHub</p>
        </div>
        <div className="flex gap-5 font-normal">
          <button>Нэвтрэх</button>
          <button>Бүртгүүлэх</button>
        </div>
      </header>

      <section className="mt-[60px] mb-24 max-w-[1500px] mx-auto flex justify-between gap-5">
        <div className=" h-[calc(100vh-136px)]   ">
          <div className="flex items-center gap-5 mt-0 mb-5 bg-[#ffce2c] text-white rounded-xl px-20">
            <div>
              <BiCategory />
            </div>
            <p>Categories</p>
          </div>
          <div className="border-[1px] border-[#8657f8] h-[700px] rounded-xl px-10 py-5 text-sm flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Programming & Tech</p>
              <GrTechnology color="red" />
            </div>
            {/* map ehlel */}
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbChartInfographic color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Teaching</p>
              <PiChalkboardTeacher color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Programming & Tech</p>
              <GrTechnology color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbChartInfographic color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Teaching</p>
              <PiChalkboardTeacher color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Programming & Tech</p>
              <GrTechnology color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbChartInfographic color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Teaching</p>
              <PiChalkboardTeacher color="orange" />
            </div>

            {/* map togsgol */}
          </div>
        </div>
        {/* second */}
        <div className=" h-[calc(100vh-136px)]   ">
          <div className="flex items-center gap-5 mt-0 mb-5 bg-[#ffb52c] text-white rounded-xl px-20">
            <div>
              <GiSkills />
            </div>
            <p>Skills</p>
          </div>
          <div className="border-[1px] border-[#8657f8] h-[700px] rounded-xl px-10 py-5 text-sm flex flex-col gap-3">
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Software</p>
              <GrCloudSoftware color="red" />
            </div>
            {/* map ehlel */}
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>UX & UI</p>
              <MdOutlineDesignServices color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbWriting color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>English</p>
              <RiEnglishInput color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Software</p>
              <GrCloudSoftware color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>UX & UI</p>
              <MdOutlineDesignServices color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbWriting color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>English</p>
              <RiEnglishInput color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Software</p>
              <GrCloudSoftware color="red" />
            </div>{" "}
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>UX & UI</p>
              <MdOutlineDesignServices color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbWriting color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>English</p>
              <RiEnglishInput color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Software</p>
              <GrCloudSoftware color="red" />
            </div>{" "}
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>UX & UI</p>
              <MdOutlineDesignServices color="red" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Graphic & Design</p>
              <TbWriting color="blue" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>English</p>
              <RiEnglishInput color="orange" />
            </div>
            <div className="flex items-center gap-5">
              <input
                type="checkbox"
                className="checkbox"
                // onChange={letHandleCategory}
              />
              <p>Software</p>
              <GrCloudSoftware color="red" />
            </div>
            {/* map togsgol */}
          </div>
        </div>
        {/* third */}
        <div className=" h-[calc(100vh-136px)]   ">
          <div className="flex items-center gap-5 mt-0 mb-5 bg-[#ffa02c] text-white rounded-xl px-20">
            <div>
              <IoPeopleSharp />
            </div>
            <p>Freelancers</p>
          </div>
          <div className="border-[1px] border-[#8657f8] h-[700px] rounded-xl px-10 py-5 text-sm flex flex-col gap-5 overflow-y-scroll">
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GrTechnology color="black" />
                  <p>Naraa</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <p className="text-sm">(4.0)</p>
                </div>
              </div>

              <div className="mt-1 bg-[#ddd2fd] rounded-xl p-5">
                Сайн байцгаана уу? Би салбартаа software чиглэлээр 7 жил, дата
                аналист чиглэлээр 3 жил ажиллаж байгаа бөгөөд одоогоор Монголын
                томоохон компани болох Говь ХК-д ажиллаж байна.
              </div>
              <button className="ml-auto rounded-xl px-5 py-1 bg-orange-400 mt-1 text-white text-xs">
                Холбогдох
              </button>
            </div>
            {/* map ehlel */}
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GrTechnology color="black" />
                  <p>Naraa</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <p className="text-sm">(4.0)</p>
                </div>
              </div>

              <div className="mt-1 bg-[#ddd2fd] rounded-xl p-5">
                Сайн байцгаана уу? Би салбартаа software чиглэлээр 7 жил, дата
                аналист чиглэлээр 3 жил ажиллаж байгаа бөгөөд одоогоор Монголын
                томоохон компани болох Говь ХК-д ажиллаж байна.
              </div>
              <button className="ml-auto rounded-xl px-5 py-1 bg-orange-400 mt-1 text-white text-xs">
                Холбогдох
              </button>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GrTechnology color="black" />
                  <p>Naraa</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <p className="text-sm">(4.0)</p>
                </div>
              </div>

              <div className="mt-1 bg-[#ddd2fd] rounded-xl p-5">
                Сайн байцгаана уу? Би салбартаа software чиглэлээр 7 жил, дата
                аналист чиглэлээр 3 жил ажиллаж байгаа бөгөөд одоогоор Монголын
                томоохон компани болох Говь ХК-д ажиллаж байна.
              </div>
              <button className="ml-auto rounded-xl px-5 py-1 bg-orange-400 mt-1 text-white text-xs">
                Холбогдох
              </button>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GrTechnology color="black" />
                  <p>Naraa</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <p className="text-sm">(4.0)</p>
                </div>
              </div>

              <div className="mt-1 bg-[#ddd2fd] rounded-xl p-5">
                Сайн байцгаана уу? Би салбартаа software чиглэлээр 7 жил, дата
                аналист чиглэлээр 3 жил ажиллаж байгаа бөгөөд одоогоор Монголын
                томоохон компани болох Говь ХК-д ажиллаж байна.
              </div>
              <button className="ml-auto rounded-xl px-5 py-1 bg-orange-400 mt-1 text-white text-xs">
                Холбогдох
              </button>
            </div>
            <div className="flex flex-col ">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <GrTechnology color="black" />
                  <p>Naraa</p>
                </div>
                <div className="flex items-center gap-1">
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <FaStar color="orange" />
                  <p className="text-sm">(4.0)</p>
                </div>
              </div>

              <div className="mt-1 bg-[#ddd2fd] rounded-xl p-5">
                Сайн байцгаана уу? Би салбартаа software чиглэлээр 7 жил, дата
                аналист чиглэлээр 3 жил ажиллаж байгаа бөгөөд одоогоор Монголын
                томоохон компани болох Говь ХК-д ажиллаж байна.
              </div>
              <button className="ml-auto rounded-xl px-5 py-1 bg-orange-400 mt-1 text-white text-xs">
                Холбогдох
              </button>
            </div>
            {/* map togsgol */}
          </div>
        </div>
      </section>
    </main>
  );
}
