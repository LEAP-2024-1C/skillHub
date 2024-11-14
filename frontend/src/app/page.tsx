"use client";
import { LuPenSquare } from "react-icons/lu";
import { RiPushpinLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "./utils/util";
import { useCategory } from "@/context/CategoryProvider";
import { useSkill } from "@/context/SkillProvider";

interface IJobRequest {
  _id: string;
  employerId: {
    _id: string;
    fullnameOrCompany: string;
    type: string;
    email: string;
    password: string;
    number: string;
    image: string;
    description: string;
    company: string;
    membership: string;
    otp: string;
    passwordResetToken: string;
    passwordResetTokenExpire: Date;
    created_at: Date;
    updated_at: Date;
  };
  skill: {
    _id: string;
    name: string;
    category: string;
  };
  title: string;
  jobDetail: string;
  salaryType: string;
  startingPrice: string;
  createdAt: string;
  location: string;
}

export default function Home() {
  const { category } = useCategory();
  const { skill } = useSkill();
  const [freelancersCount, setFreelancersCount] = useState<number>(0);
  const [jobAds, setJobAds] = useState<IJobRequest[]>([]);

  const fetchFreelancerData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/freelancers`
      );

      if (response.status === 200) {
        console.log("res data", response.data);
        setFreelancersCount(response.data.FreelancersCount);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("freelancer", freelancersCount);

  useEffect(() => {
    fetchFreelancerData();
  }, []);

  const [employerCount, setEmployerCount] = useState<number>(0);
  const fetchEmployerData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/employer/employers`);

      if (response.status === 200) {
        setEmployerCount(response.data.employerCount);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  console.log("Employers", employerCount);
  useEffect(() => {
    fetchEmployerData();
  }, []);

  const [jobAdCount, setJobAdCount] = useState<number>(0);
  const fetchJobAdCountData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/jobreq/job-ad-count`);

      if (response.status === 200) {
        setJobAdCount(response.data.JobAdCount);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const [statitics, setStatistics] =
    useState<[object: { catName: string; skillCount: number }]>();
  const fetchStatiticsData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/skill/stat`);
      if (response.status === 200) {
        setStatistics(response.data.stat);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const showJobAds = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/jobreq/get-ads`);
      setJobAds(res.data.allAds);
      console.log("job-ad", res.data.allAds);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    showJobAds();
  }, []);

  useEffect(() => {
    fetchJobAdCountData();
  }, []);
  useEffect(() => {
    fetchStatiticsData();
  }, []);
  return (
    <section className="lg:w-[1280px] lg:m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] text-[#181818] text-sm 
    max-sm:w-screen">
      <div className="flex gap-5 max-sm:hidden mt-5">
        {category?.slice(0, 5).map((cat) => {
          return (
            <a key={cat._id} href="/ad-section">
              {cat.name}
            </a>
          );
        })}
        <div className="flex items-center gap-2">
          <a href="/ad-section">Бүгд</a>
          <IoIosArrowDown size={12} className="icon" color="black" />
        </div>
      </div>
      {/* homework ehlel */}
      <div className="flex lg:mx-auto justify-between items-center border-b-[1px] border-[#118a00] py-32 max-sm:justify-center max-sm:py-10 max-sm:w-screen">
        <div className="lg:w-1/2 flex flex-col justify-center items-center text-center gap-5">
          <div className="font-black text-3xl ">
            ХЭРХЭН АЖИЛЛАХ
            <br />
            ЁСТОЙ ВЭ?
          </div>
          <div className="my-3 text-slate-400">
            Хуучин дүрмийг март. Та хамгийн <br />
            шилдгүүдтэй хамтран ажилла. Яг одоо. Яг энд.
          </div>
          <Link href={"/login"}>
            <button className="btn w-36 h-12 bg-[#118a00] text-white">
              Эхлэх
            </button>
          </Link>
        </div>
        <img
          className="h-96 max-sm:hidden"
          src="https://i.ibb.co/Tqnbd2V/17575182-66e0-4fd7-bf9d-0fd44b6edaeb-transformed.jpg"
          alt="photo"
        />
      </div>
      {/* home tugsgul */}
    
      <div className="border-b-[1px] border-[#118a00] py-32">
        <h3 className="font-black text-3xl text-center">
          Манай сайтад одоогоор ...
        </h3>
        <div className="flex justify-evenly mt-10  max-sm:flex max-sm:flex-col">
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-16 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{category.length}</p>
            <p className="text-[#118a00]">Категори</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-16 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{skill.length}</p>
            <p className="text-[#118a00]">Ур чадвар</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-16 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{jobAdCount}</p>
            <p className="text-[#118a00]">Нээлттэй ажлын зар</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-16 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{employerCount}</p>
            <p className="text-[#118a00]">Ажил олгогч</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-16 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{freelancersCount}</p>
            <p className="text-[#118a00]">Ажил горилогч</p>
          </div>
        </div>
        <div className="mt-10 text-right text-[#118a00] text-3xl ">
          <p className="mr-60">... байна.</p>
        </div>
      </div>

      <div className="flex justify-between items-center border-b-[1px] border-[#118a00] py-32 max-sm:justify-center">
        <img
          className="h-[320px] rounded-3xl ml-10 max-sm:hidden "
          src="https://i.ibb.co/XLZ71wc/example-2.png"
          alt=""
        />
        <div className="w-2/3 flex flex-col justify-center   gap-5">
          <div className="font-black text-black text-3xl">
            Цагийн ажлын зах зээлд тавтай морил. Энэ маш амархан.
          </div>
          <div className="flex gap-4 my-2">
            <LuPenSquare />
            <div>
              <div>Бүртгүүлэхэд үнэгүй</div>
              <div className="text-slate-400">
                Өөрийн ур чадваруудаа бүртгүүлэн хэрэглэгчийн профайл үүсгэнэ.
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <RiPushpinLine />
            <div>
              <div>Ажлын зар оруулан, хамгийн шилдгийг сонго</div>
              <div className="text-slate-400">
                Ур чадварыг олох нь хэцүү биш байх ёстой. Ажлын зар оруулахад ур
                чадварууд таныг олно.
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <RiShieldStarLine />
            <div>
              <div>Ур чадвараа харуул</div>
              <div className="text-slate-400">
                Ур чадвараа зөвхөн нэг компанид бус зах зээлд харуулан өөрийн
                үнэ цэнийг бүтээ!
              </div>
            </div>
          </div>
          {/* button  */}
          <div className="flex gap-4">
            <Link href={"/signup"}>
              <button className="btn bg-[#118a00] text-white w-48 h-12">
                Үнэгүй бүртгүүлнэ үү
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* browse ehlel */}
      <div className="py-32 border-b-[1px] border-[#118a00] max-sm:hidden">
        <div className="font-black text-3xl text-[#118a00]">
          Шилдэг ур чадварын ангилалууд
        </div>
        <div className="flex mt-1 text-slate-400 gap-2">
          <div className=" ">Ажил хайж байна уу? </div>
          <Link href={"/login"}>
            <p className="underline hover:text-[#118a00]">Ажил хайх</p>
          </Link>
        </div>

        <div className="grid grid-cols-4 gap-8 mt-10">
          {statitics?.slice(0, 8).map((item, index) => (
            <div
              key={index}
              className="bg-[#f9f9f9] rounded-2xl flex flex-col gap-2 p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00] "
            >
              <div className="font-black text-black text-lg bg-[#f9f9f9]  text-center">
                {item.catName}
              </div>
              <div className="flex gap-4">
                <div>4.85/5</div>
                <div>{item.skillCount} ур чадвар</div>
              </div>
            </div>
          ))}
        </div>
        {/* recently post start */}
      </div>
      <div className="py-32 border-b-[1px] border-[#118a00]">
        <div className="font-black text-3xl text-[#118a00] text-right max-sm:text-2xl max-sm:text-center">
          Сүүлд нэмэгдсэн ажлын зарууд
        </div>
        <div className="flex gap-4 mt-1 flex-row-reverse text-sm max-sm:hidden">
          {category.slice(0, 5).map((cat) => {
            return (
              <button
                key={`second ${cat._id}`}
                className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400"
              >
                {cat.name}
              </button>
            );
          })}
        </div>
        {/* recent job box start */}
        <div className="flex flex-wrap mt-10 text-sm justify-between max-sm:flex-col">
          {jobAds.slice(0, 6).map((jobAd) => {
            return (
              <Link
                href={`/ad-section/detail/${jobAd._id}`}
                key={jobAd._id}
                className="w-[49%] max-sm:w-full"
              >
                <div className="flex  my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
                  <div className="flex flex-col gap-3 w-full ">
                    <div className="font-black text-xl">{jobAd.title}</div>
                    <div className="flex">{jobAd.jobDetail}</div>

                    <div className="flex gap-4">
                      <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                        {jobAd.skill.name}
                      </p>
                    </div>
                    <div className="flex gap-5 ml-auto">
                      <p>Үнэлгээ: {jobAd.startingPrice}₮</p>
                      {jobAd.salaryType === "hour" ? (
                        <p>/цагаар/</p>
                      ) : (
                        <p>/удаагаар/</p>
                      )}
                    </div>
                  </div>
                  <IoBriefcaseOutline size={20} color="green" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* button slide gargadag  */}
        <div className="w-full flex justify-center">
          <Link href={"/ad-section"}>
            <button className="btn bg-[#118a00] text-white w-48 mt-10 text-sm rounded-2xl">
              Бусад ажил харах
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
