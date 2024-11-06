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

export default function Home() {
  const { category } = useCategory();
  const { skill } = useSkill();

  const [freelancersCount, setFreelancersCount] = useState<number>(0);
  //   const [dataTrue, setDataTrue] = useState(false);
  const fetchFreelancerData = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/freelancers`
      );

      if (response.status === 200) {
        console.log("res data", response.data);
        setFreelancersCount(response.data.FreelancersCount);
        // console.log("USER", response.data.user);
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

  useEffect(() => {
    fetchStatiticsData();
  }, []);
  return (
    <section className="  max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] text-[#181818] text-sm mt-10">
      <div className="flex gap-5">
        <a href="">Хөгжүүлэгч, IT</a>
        <a href="">Санхүү</a>
        <a href="">Дизайн</a>
        <a href="">Борлуулалт, маркетинг</a>
        <a href="">Гэр ахуй</a>
        <div className="flex items-center gap-2">
          <a href="">Бүгд</a>
          <IoIosArrowDown size={12} className="icon" color="black" />
        </div>
      </div>
      {/* homework ehlel */}
      <div className="flex mx-auto auto justify-between items-center border-b-[1px] border-[#118a00] py-32">
        <div className="w-1/2 flex flex-col justify-center items-center text-center gap-5">
          <div className="font-black text-3xl ">
            ХЭРХЭН АЖИЛЛАХ
            <br />
            ЁСТОЙ ВЭ?
          </div>
          <div className="my-3 text-slate-400">
            Хуучин дүрмийг март. Та хамгийн <br />
            сайн хүмүүстэй хамтран ажилла. Яг одоо. Яг энд.
          </div>
          <Link href={"/login"}>
            <button className="btn  w-36 h-12 bg-[#118a00] text-white">
              Эхлэх
            </button>
          </Link>
        </div>
        <img
          className="h-96"
          src="https://img.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_74855-8401.jpg?t=st=1729919441~exp=1729923041~hmac=4ada854095b0a5fc83ceba585f40ba7f8a16a72c3990e9c3caa13d4360121ead&w=2000"
          alt="photo"
        />
      </div>
      {/* home tugsgul */}
      {/* <div>
        Итгэмжлэгдсэн
        <div className="flex gap-10">
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg"
            alt=""
          />
        </div>
      </div> */}
      <div className="border-b-[1px] border-[#118a00] py-32">
        <h3 className="font-black text-3xl text-center">
          Манай сайтад одоогоор ...
        </h3>
        <div className="flex justify-evenly mt-10">
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-20 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{category.length}</p>
            <p className="text-[#118a00]">Категори</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-20 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{skill.length}</p>
            <p className="text-[#118a00]">Ур чадвар</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-20 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">32</p>
            <p className="text-[#118a00]">Нээлттэй ажлын зар</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-20 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{employerCount}</p>
            <p className="text-[#118a00]">Ажил олгогч</p>
          </div>
          <div className="flex flex-col items-center gap-5 bg-[#f9f9f9] px-20 py-5 rounded-2xl">
            <p className="text-3xl font-semibold">{freelancersCount}</p>
            <p className="text-[#118a00]">Ажил горилогч</p>
          </div>
        </div>
        <div className="mt-10 text-right text-[#118a00] text-3xl ">
          <p className="mr-60">... байна.</p>
        </div>
      </div>

      <div className="flex justify-between  items-center border-b-[1px] border-[#118a00] py-32">
        <img
          src="https://www.upwork.com/static/ui-images/1.6.7/images/hiw-2.png"
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
            <Link href={"/login"}>
              <button className="btn bg-[#118a00] text-white w-48 h-12">
                Үнэгүй бүртгүүлнэ үү
              </button>
            </Link>
            {/* <button className="btn bg-[#118a00] text-white w-36 h-12">
              Ажилд авахдаа халуун сур
            </button> */}
          </div>
        </div>
      </div>
      {/* browse ehlel */}
      <div className="py-32 border-b-[1px] border-[#118a00]">
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
        <div className="font-black text-3xl text-[#118a00] text-right">
          Сүүлд нэмэгдсэн ажлын зарууд
        </div>
        <div className="flex gap-4 mt-1 flex-row-reverse text-sm">
          <button className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400">
            Хөгжүүлэгч, IT
          </button>
          <button className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400">
            Санхүү
          </button>
          <button className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400">
            Дизайн
          </button>
          <button className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400">
            Борлуулалт маркетинг
          </button>
          <button className=" border-[#118a00] rounded-2xl px-2 py-1 text-sm text-slate-400">
            Админ ба хэрэглэгчийн дэмжлэг
          </button>
        </div>
        {/* recent job box start */}
        <div className="flex flex-wrap mt-10 text-sm justify-between">
          <div className="flex w-[49%] my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
            <div className="flex flex-col gap-3 w-full ">
              <div className="font-black text-xl">Санхүүгийн шинжилгээ</div>
              <div className="flex">
                Компанийн орлогын тайлан боловсруулж, шинжилгээ хийлгэнэ.
              </div>

              <div className="flex gap-4">
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Product Photographer
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Video Editing
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs  rounded-2xl px-3 py-1">
                  Videography
                </p>
              </div>
              <div className="flex gap-5 ml-auto">
                <p>Үнэлгээ: 100000</p>
                <p>/цаг тутам/</p>
              </div>
            </div>
            <IoBriefcaseOutline size={20} color="green" />
          </div>
          <div className="flex w-[49%] my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
            <div className="flex flex-col gap-3 w-full ">
              <div className="font-black text-xl">Санхүүгийн шинжилгээ</div>
              <div className="flex">
                Компанийн орлогын тайлан боловсруулж, шинжилгээ хийлгэнэ.
              </div>

              <div className="flex gap-4">
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Product Photographer
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Video Editing
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs  rounded-2xl px-3 py-1">
                  Videography
                </p>
              </div>
              <div className="flex gap-5 ml-auto">
                <p>Үнэлгээ: 100000</p>
                <p>/цаг тутам/</p>
              </div>
            </div>
            <IoBriefcaseOutline size={20} color="green" />
          </div>
          <div className="flex w-[49%] my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
            <div className="flex flex-col gap-3 w-full ">
              <div className="font-black text-xl">Санхүүгийн шинжилгээ</div>
              <div className="flex">
                Компанийн орлогын тайлан боловсруулж, шинжилгээ хийлгэнэ.
              </div>

              <div className="flex gap-4">
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Product Photographer
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Video Editing
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs  rounded-2xl px-3 py-1">
                  Videography
                </p>
              </div>
              <div className="flex gap-5 ml-auto">
                <p>Үнэлгээ: 100000</p>
                <p>/цаг тутам/</p>
              </div>
            </div>
            <IoBriefcaseOutline size={20} color="green" />
          </div>
          <div className="flex w-[49%] my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
            <div className="flex flex-col gap-3 w-full ">
              <div className="font-black text-xl">Санхүүгийн шинжилгээ</div>
              <div className="flex">
                Компанийн орлогын тайлан боловсруулж, шинжилгээ хийлгэнэ.
              </div>

              <div className="flex gap-4">
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Product Photographer
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Video Editing
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs  rounded-2xl px-3 py-1">
                  Videography
                </p>
              </div>
              <div className="flex gap-5 ml-auto">
                <p>Үнэлгээ: 100000</p>
                <p>/цаг тутам/</p>
              </div>
            </div>
            <IoBriefcaseOutline size={20} color="green" />
          </div>
          <div className="flex w-[49%] my-3 rounded-xl bg-[#f9f9f9] px-10 py-5 justify-between gap-5 hover:border hover:border-[#118a00]">
            <div className="flex flex-col gap-3 w-full ">
              <div className="font-black text-xl">Санхүүгийн шинжилгээ</div>
              <div className="flex">
                Компанийн орлогын тайлан боловсруулж, шинжилгээ хийлгэнэ.
              </div>

              <div className="flex gap-4">
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Product Photographer
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs rounded-2xl px-3 py-1">
                  Video Editing
                </p>
                <p className="border-[1px] border-[#118a00] text-[#118a00] text-xs  rounded-2xl px-3 py-1">
                  Videography
                </p>
              </div>
              <div className="flex gap-5 ml-auto">
                <p>Үнэлгээ: 100000</p>
                <p>/цаг тутам/</p>
              </div>
            </div>
            <IoBriefcaseOutline size={20} color="green" />
          </div>
        </div>

        {/* button slide gargadag  */}
        <div className="w-full flex justify-center">
          <Link href={"/login"}>
            <button className="btn bg-[#118a00] text-white w-48 mt-10 text-sm rounded-2xl">
              Бусад ажил харах
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
