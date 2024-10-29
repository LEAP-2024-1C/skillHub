"use client";

import React from "react";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const AdDetail = () => {
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  // const [subRating, setSubRating] = useState(0);
  // const [subHover, setSubHover] = useState(0);
  return (
    <div className="flex gap-10 w-[1280px] m-auto min-h-[calc(100vh-326px)]  my-20 text-sm justify-between">
      <div className="flex w-full">
        <div className="flex flex-col gap-5 w-[360px] ">
          <h1 className="">
            <strong>Ажлын зарууд</strong>
          </h1>
          <div className="pr-5 flex flex-col gap-3">
            <Link href={"/ad-detail"}>
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-3 px-5 bg-white group text-xs">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <h1>
                      <strong className="font-normal">Green LLC</strong>
                    </h1>
                  </div>
                  <p className="text-slate-400">3 өдрийн өмнө</p>
                </div>

                <h1 className="text-lg">
                  <strong className="font-normal ">
                    {" "}
                    Тооцооны нягтлан бодогч
                  </strong>
                </h1>
                <div className="flex gap-2 flex- px-10">
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                </div>

                <div className="mt-1 flex justify-between items-center">
                  <p className="">Эхлэх цалин: 70,000₮ /цаг/</p>

                  <button className="w-10">
                    <FaArrowCircleRight
                      size={25}
                      className="arrow hidden group-hover:block"
                    />
                  </button>
                </div>
              </div>
            </Link>
            <Link href={"/ad-detail"}>
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-3 px-5 bg-white group text-xs">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <h1>
                      <strong className="font-normal">Green LLC</strong>
                    </h1>
                  </div>
                  <p className="text-slate-400">3 өдрийн өмнө</p>
                </div>

                <h1 className="text-lg">
                  <strong className="font-normal ">
                    {" "}
                    Тооцооны нягтлан бодогч
                  </strong>
                </h1>
                <div className="flex gap-2 flex- px-10">
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                </div>

                <div className="mt-1 flex justify-between items-center">
                  <p className="">Эхлэх цалин: 70,000₮ /цаг/</p>

                  <button className="w-10">
                    <FaArrowCircleRight
                      size={25}
                      className="arrow hidden group-hover:block"
                    />
                  </button>
                </div>
              </div>
            </Link>
            <Link href={"/ad-detail"}>
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-3 px-5 bg-white group text-xs">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <img
                      src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                      alt=""
                      className="w-[32px] h-[32px] rounded-full"
                    />
                    <h1>
                      <strong className="font-normal">Green LLC</strong>
                    </h1>
                  </div>
                  <p className="text-slate-400">3 өдрийн өмнө</p>
                </div>

                <h1 className="text-lg">
                  <strong className="font-normal">
                    {" "}
                    Тооцооны нягтлан бодогч
                  </strong>
                </h1>
                <div className="flex gap-2 flex- px-10">
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                  <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                    Frontend
                  </p>
                </div>

                <div className="mt-1 flex justify-between items-center">
                  <p className="">Эхлэх цалин: 70,000₮ /цаг/</p>

                  <button className="w-10">
                    <FaArrowCircleRight
                      size={25}
                      className="arrow hidden group-hover:block"
                    />
                  </button>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col mr-10 ml-5 gap-5 p-10 bg-[#f9f9f9] rounded-2xl w-full h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                className="w-[80px] h-[80px] rounded-full"
              />
              <div className="flex flex-col gap-1 mx-3">
                <h1 className="text-[20px]">
                  <strong>Green LLC</strong>
                </h1>
                <p className="text-slate-400 text-sm">3 өдрийн өмнө</p>
                {/* <div className="flex">
                  {[...Array(5)].map((star, idx) => {
                    const currentRating = idx + 1;
                    return (
                      <label key={`first ${idx}`}>
                        <input
                          type="radio"
                          name="rating"
                          value={currentRating}
                          onClick={() => setRating(currentRating)}
                        />
                        <FaStar
                          size={18}
                          className="star"
                          color={
                            currentRating <= (hover || rating)
                              ? "#118a00"
                              : "#e4e5e9"
                          }
                          onMouseEnter={() => setHover(currentRating)}
                          onMouseLeave={() => setHover(0)}
                        />
                      </label>
                    );
                  })}
                </div> */}
              </div>
            </div>
            <Button
              variant="destructive"
              className="w-[95px] rounded-xl text-sm font-normal bg-[#118a00]"
            >
              <strong>CV илгээх</strong>
            </Button>
            {/* <p className="text-[#118a00]">
              <strong>Идэвхтэй</strong>
            </p> */}
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="text-xl flex justify-center m-auto ">
              <p className="">Тооцооны нягтлан бодогч</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-md:w-[365px] max-lg:w-[700px]">
            <strong className="">Дэлгэрэнгүй:</strong>
            <p className="indent-10 text-justify">
              Хариуцсан алба салбарын бараа материал, бэлэн бүтээгдэхүүний
              борлуулалтын бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх
              Анхан шатны тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай
              мэдээллээр хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг
              үүргийг гүйцэтгэнэ. Хариуцсан алба салбарын бараа материал, бэлэн
              бүтээгдэхүүний борлуулалтын бүртгэлийн хяналт хийх, үр дүнг
              тооцоолон дүгнэх Анхан шатны тооцоог үнэн зөв бүрдүүлэх,
              удирдлагыг шаардлагатай мэдээллээр хангах зэрэг ажлын байрны
              тодорхойлолтод заасан чиг үүргийг гүйцэтгэнэ. Хариуцсан алба
              салбарын бараа материал, бэлэн бүтээгдэхүүний борлуулалтын
              бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх Анхан шатны
              тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай мэдээллээр
              хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг үүргийг
              гүйцэтгэнэ. Хариуцсан алба салбарын бараа материал, бэлэн
              бүтээгдэхүүний борлуулалтын бүртгэлийн хяналт хийх, үр дүнг
              тооцоолон дүгнэх Анхан шатны тооцоог үнэн зөв бүрдүүлэх,
              удирдлагыг шаардлагатай мэдээллээр хангах зэрэг ажлын байрны
              тодорхойлолтод заасан чиг үүргийг гүйцэтгэнэ. Хариуцсан алба
              салбарын бараа материал, бэлэн бүтээгдэхүүний борлуулалтын
              бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх Анхан шатны
              тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай мэдээллээр
              хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг үүргийг
              гүйцэтгэнэ.
            </p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Frontend
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Backend
            </p>
          </div>
          <div>
            <strong>Эхлэх цалин:</strong>
            <p className="mt-2">100,000₮ /цаг/</p>
          </div>
          <div>
            <strong>Байршил</strong>
            <p className="mt-2">Хамаагүй</p>
          </div>
          <div className="mx-auto mt-3">
            <Link href={"/ad-section"} className="text-[#118a00]">
              <strong>Ажил олгогчийн дэлгэрэнгүй мэдээлэл</strong>
            </Link>
          </div>
        </div>
        <div className="w-[400px]">
          <h1 className="font-bold mb-5">Шилдгүүд</h1>
          <div className="flex flex-col gap-5">
            <div className="rounded-2xl p-2 flex flex-col gap-2 border-l-[1px] w-full  hover:border hover:border-[#118a00]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>Б.Тэмүүлэн</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  Frontend (4.5)
                </p>
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  UI (4.1)
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-2 flex flex-col gap-2 border-l-[1px] w-full  hover:border hover:border-[#118a00]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>Б.Тэмүүлэн</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  Frontend (4.5)
                </p>
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  UI (4.1)
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-2 flex flex-col gap-2 border-l-[1px] w-full  hover:border hover:border-[#118a00]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>Б.Тэмүүлэн</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  Frontend (4.5)
                </p>
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  UI (4.1)
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-2 flex flex-col gap-2 border-l-[1px] w-full  hover:border hover:border-[#118a00]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>Б.Тэмүүлэн</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  Frontend (4.5)
                </p>
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  UI (4.1)
                </p>
              </div>
            </div>
            <div className="rounded-2xl p-2 flex flex-col gap-2 border-l-[1px] w-full  hover:border hover:border-[#118a00]">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                  alt="profile"
                  className="h-8 w-8 rounded-full"
                />
                <p>Б.Тэмүүлэн</p>
              </div>
              <div className="flex flex-wrap gap-1">
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  Frontend (4.5)
                </p>
                <p className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]">
                  UI (4.1)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
