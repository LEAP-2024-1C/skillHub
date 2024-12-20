"use client";

import { useAuth } from "@/context/AuthProvider";
import { useEmployer } from "@/context/EmployerProvider";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FaArrowCircleRight } from "react-icons/fa";

const FreelancerProfile = () => {
  const { employer, fetchEmployerData } = useEmployer();
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
  }

  useEffect(() => {
    fetchEmployerData();
  }, [employer]);

  return (
    <div className="max-w-[1280px] lg:m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9] first-line:text-sm  lg:my-10 lg:px-[100px]  max-sm:px-5 max-sm:w-screen rounded-2xl">
      <div className="flex lg:gap-10 lg:items-center bg-[#f9f9f9] lg:p-10 rounded-t-2xl max-sm:px-5 sm:gap-3 pt-5 ">
        <div className="">
          <img
            src={`${employer?.image}`}
            alt="profile"
            className="lg:h-[150px] lg:w-[150px]  lgb:border-4 max-sm:border-2 rounded-full border-[#118a00] object-cover max-sm:w-[40px] max-sm:h-[40px]"
          />
          {/* <p className="text-[#118a00]">({employer?.membership})</p> */}
        </div>
        <div className="w-full lg:mr-10 lg:ml-5 max-sm:w-screen max-sm:ml-3">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-3 items-center">
              <p className="text-2xl text-[#118a00] max-sm:text-sm">
                {employer?.type}:
              </p>
              <p className="font-bold text-2xl max-sm:text-sm">
                {employer?.fullnameOrCompany}
              </p>
            </div>
            <div className="flex items-center gap-5 ">
              <p className="text-[#118a00] text-sm border-[1px] border-[#118a00] px-2 py-[1px] rounded-full max-sm:hidden">
                {employer?.membership}
              </p>
              <Link href="/signup-skills-employer">
                <Edit color="#118a00" size={22} />
              </Link>
            </div>
          </div>
          <p className="mt-5 indent-10 text-justify">{employer?.description}</p>
          <div className="mt-5 flex justify-between text-[#118a00] font-light pr-10 flex-wrap gap-2 max-sm:flex max-sm:flex-col">
            <p>
              Имэйл:
              <span className="text-[#191919] ml-2">{employer?.email}</span>
            </p>
            <p>
              Утасны дугаар:
              <span className="text-[#191919] ml-2">{employer?.number}</span>
            </p>
            <p>
              Компани:
              <span className="text-[#191919] ml-2">{employer?.company}</span>
            </p>
            <p>
              Гишүүнчлэл:
              <span className="text-[#191919] ml-2">
                {employer?.membership}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lifted max-sm:pt-5 max-sm:px-8">
        <a className={`tab tab-lifted tab-active`}>Ажлын зарууд</a>
        <a className={`tab tab-lifted bg-[#f9f9f9]`}> </a>
      </div>

      <div
        className={`p-6 bg-base-100 border-base-300 rounded-b-2xl max-sm:mx-5`}
      >
        <div className="flex flex-col gap-10 mt-5">
          {" "}
          <Link href={"/ad-detail"}>
            <div className="w-full rounded-2xl flex flex-col gap-2 py-5 lg:px-10 bg-white group border-l-[1px] border-[#118a00] max-sm:items-center">
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
                <p className="text-slate-400 md:hidden">3 өдрийн өмнө</p>
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
