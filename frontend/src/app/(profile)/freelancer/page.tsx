"use client";
 
import { Edit, Star } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { useFreelancer } from "@/context/FreelancerProvider"
 


const FreelancerProfile = () => {
 
  const { freelancer,averageRating} = useFreelancer();
  const [activeTab, setActiveTab] = useState<number>(1);

  


 
  return (
    <div className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9]text-sm  my-10 px-[100px]">
      <div className="flex gap-10 items-center bg-[#f9f9f9] p-10 rounded-t-2xl">
        <div className="w-[200px]">
          <img
            src={freelancer?.image}
            alt="profile"
            className="h-[150px] w-[150px] rounded-full border-4 border-[#118a00]"
          />
        </div>
        <div className="w-full mr-10 ml-5">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-3 items-center">
              <p className="text-2xl">{freelancer?.firstname}</p>
              <p className="font-bold text-2xl">{freelancer?.lastname}</p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#118a00] text-sm border-[1px] border-[#118a00] px-2 py-[1px] rounded-full">
                Идэвхтэй
              </p>
              <Edit color="#118a00" size={22} />
            </div>
          </div>
          <p className="mt-5 indent-10 text-justify">
          {freelancer?.description}
            {/* Сайн байна уу? Намайг Тэмүүлэн гэдэг. Би гомо байхаа. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit. Quidem ab ipsum in non
            cum odio soluta illum velit eligendi, error tempore consequatur nemo
            corporis cupiditate praesentium neque similique dolores obcaecati. */}
          </p>
          <div className="mt-5 flex justify-between text-[#118a00] font-light pr-10 flex-wrap gap-2">
            <p>
              Имэйл:
              <span className="text-[#191919] ml-2">{freelancer?.email}</span>
            </p>
            <p>
              Утасны дугаар:
              <span className="text-[#191919] ml-2">{freelancer?.number}</span>
            </p>
            <p>
              Компани:
              <span className="text-[#191919] ml-2">{freelancer?.company}</span>
            </p>
            <p>
              Албан тушаал:
              <span className="text-[#191919] ml-2">Даяанч</span>
            </p>
          </div>
        </div>
      </div>
 
      <div className="tabs tabs-lifted">
        <a
          className={`tab tab-lifted  ${
            activeTab === 1 ? "tab-active" : "bg-[#f9f9f9]"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Ур чадварууд
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === 2 ? "tab-active" : "bg-[#f9f9f9]"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Хийсэн ажлууд
        </a>
      </div>
 
      {/* Tab Panels */}
      <div
        className={`p-6 bg-base-100 border-base-300 rounded-box ${
          activeTab === 1 ? "" : "hidden"
        }`}
      >
       {freelancer?.skills?.map((skill, index)=>(
        <div className="flex flex-col gap-5 mt-5">
          <div className="flex justify-between px-10 py-5 rounded-2xl border-l-[1px] border-[#118a00]">
            <div className="w-[30%]">{skill?.skill}</div>
            <div className="flex items-center gap-2 w-[20%]">
              <p>{averageRating}/5</p>
              <Star size={16} color="#118a00" />
            </div>
            <div className="w-[20%]">{skill.experience}</div>
            <div className="w-[20%] text-right">{skill.startingSalary}</div>
          </div>
          <div className="flex justify-between px-10 py-5 rounded-2xl border-l-[1px] border-[#118a00]">
            <div className="w-[30%]">{skill?.skill}</div>
            <div className="flex items-center gap-2 w-[20%]">
              <p>{averageRating}/5</p>
              <Star size={16} color="#118a00" />
            </div>
            <div className="w-[20%]">{skill.experience}</div>
            <div className="w-[20%] text-right">{skill.startingSalary}</div>
          </div>
          <div className="flex justify-between px-10 py-5 rounded-2xl border-l-[1px] border-[#118a00]">
            <div className="w-[30%]">{skill?.skill}</div>
            <div className="flex items-center gap-2 w-[20%]">
              <p>{averageRating}/5</p>
              <Star size={16} color="#118a00" />
            </div>
            <div className="w-[20%] ">{skill.experience}</div>
            <div className="w-[20%] text-right">{skill.startingSalary}</div>
          </div>
        </div>
             ))}
      </div>
 
      <div
        className={`p-6 bg-base-100 border-base-300 rounded-box ${
          activeTab === 2 ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-10 mt-5">
          {" "}
          <Link href={"/ad-detail"}>
            <div className="w-full rounded-2xl flex flex-col gap-2 py-5 px-10 bg-white group border-l-[1px] border-[#118a00]">
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
                <strong className="font-normal"> Хийморийн сан</strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Лам
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Хурдан уншлага эдр
                </p>
              </div>
 
              {/* <div className="mt-3 flex justify-between items-center">
                <p className="">Эхлэх цалин: 70,000₮ /цаг/</p>
 
                <button className="w-10">
                  <FaArrowCircleRight
                    size={25}
                    className="arrow hidden group-hover:block"
                  />
                </button>
              </div> */}
              <div className="mt-5">
                <div className="flex">
                  <Star size={16} color="#118a00" />
                  <Star size={16} color="#118a00" />
                  <Star size={16} color="#118a00" />
                  <Star size={16} color="#118a00" />
                  <Star size={16} color="#118a00" />
                </div>
                <p className="mt-2">
                  Хүссэн үр дүнг цаг хугацаанд нь гаргаж чадсан. Баярлалаа!
                </p>
              </div>
            </div>
          </Link>
          {/* map */}
          <Link href={"/ad-detail"}>
            <div className="w-full rounded-2xl flex flex-col gap-2 py-5 px-10 bg-white group border-l-[1px] border-[#118a00]">
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
                <strong className="font-normal"> Үл хөдлөхийн зөвлөх</strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Үл хөдлөхийн зөвлөх
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Frontend
                </p>
              </div>
 
              {/* <div className="mt-3 flex justify-between items-center">
                <p className="">Эхлэх цалин: 70,000₮ /цаг/</p>
 
                <button className="w-10">
                  <FaArrowCircleRight
                    size={25}
                    className="arrow hidden group-hover:block"
                  />
                </button>
              </div> */}
              <div className="mt-5">
                <div className="flex">
                  <Star size={16} color="#118a00" />
                </div>
                <p className="mt-2">Мөнгөө авчаад нэг ч ирж уулзаагүй.</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default FreelancerProfile;
 
 