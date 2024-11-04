"use client";

import { Edit } from "lucide-react";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

const FreelancerProfile = () => {
  return (
    <div className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9]text-sm  my-10 px-[100px]">
      <div className="flex gap-10 items-center bg-[#f9f9f9] p-10 rounded-t-2xl">
        <div className="w-[200px] flex flex-col justify-center items-center gap-3">
          <img
            src="https://i.ibb.co/VVjDg9R/20240816-111053.jpg"
            alt="profile"
            className="h-[150px] w-[150px] rounded-full border-4 border-[#118a00]"
          />
          <p>Vip</p>
        </div>
        <div className="w-full mr-10 ml-5">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-3 items-center">
              <p className="text-2xl text-[#118a00]">Хувь хүн:</p>
              <p className="font-bold text-2xl">Тэмүүлэн</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#118a00] text-sm border-[1px] border-[#118a00] px-2 py-[1px] rounded-full">
                Идэвхтэй
              </p>
              <Edit color="#118a00" size={22} />
            </div>
          </div>
          <p className="mt-5 indent-10 text-justify">
            Сайн байна уу? Намайг Тэмүүлэн гэдэг. Би гомо байхаа. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quidem ab ipsum in non
            cum odio soluta illum velit eligendi, error tempore consequatur nemo
            corporis cupiditate praesentium neque similique dolores obcaecati.
          </p>
          <div className="mt-5 flex justify-between text-[#118a00] font-light pr-10 flex-wrap gap-2">
            <p>
              Имэйл:
              <span className="text-[#191919] ml-2">temuulen@gmail.com</span>
            </p>
            <p>
              Утасны дугаар:
              <span className="text-[#191919] ml-2">88888888</span>
            </p>
            <p>
              Компани:
              <span className="text-[#191919] ml-2">Даяар Монгол</span>
            </p>
            <p>
              Албан тушаал:
              <span className="text-[#191919] ml-2">Даяанч</span>
            </p>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lifted">
        <a className={`tab tab-lifted tab-active`}>Ажлын зарууд</a>
        <a className={`tab tab-lifted bg-[#f9f9f9]`}> </a>
      </div>

      <div className={`p-6 bg-base-100 border-base-300 rounded-box `}>
        <div className="flex flex-col gap-10 mt-5">
          {" "}
          <Link href={"/ad-detail"}>
            <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group border-l-[1px] border-[#118a00]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <h1>
                    <strong className="font-normal">Green LLC</strong>
                  </h1>
                </div>
                <p className="text-slate-400">3 өдрийн өмнө</p>
              </div>

              <h1 className="text-xl mt-2">
                <strong className="font-normal">
                  {" "}
                  Тооцооны нягтлан бодогч
                </strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
              </div>

              <div className="mt-3 flex justify-between items-center">
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
            <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group border-l-[1px] border-[#118a00]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <h1>
                    <strong className="font-normal">Green LLC</strong>
                  </h1>
                </div>
                <p className="text-slate-400">3 өдрийн өмнө</p>
              </div>

              <h1 className="text-xl mt-2">
                <strong className="font-normal">
                  {" "}
                  Тооцооны нягтлан бодогч
                </strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
              </div>

              <div className="mt-3 flex justify-between items-center">
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
            <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group border-l-[1px] border-[#118a00]">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-5">
                  <img
                    src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full"
                  />
                  <h1>
                    <strong className="font-normal">Green LLC</strong>
                  </h1>
                </div>
                <p className="text-slate-400">3 өдрийн өмнө</p>
              </div>

              <h1 className="text-xl mt-2">
                <strong className="font-normal">
                  {" "}
                  Тооцооны нягтлан бодогч
                </strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
              </div>

              <div className="mt-3 flex justify-between items-center">
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
    </div>
  );
};
export default FreelancerProfile;
