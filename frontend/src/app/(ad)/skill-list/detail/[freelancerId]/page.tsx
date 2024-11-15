"use client";

import { apiUrl } from "@/app/utils/util";
import { IFreelancer, useFreelancer } from "@/context/FreelancerProvider";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Edit } from "lucide-react";
import Link from "next/link";
import { useAuth } from "@/context/AuthProvider";
import { FaStar } from "react-icons/fa";

const DetailPage = () => {
  const { freelancerId } = useParams();
  const [activeTab, setActiveTab] = useState<number>(1);
  const { freelancer } = useFreelancer();
  const [choosenFreelancer, setChoosenFreelancer] =
    useState<IFreelancer | null>(null);
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
  }

  const fetchFreelancerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/${freelancerId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setChoosenFreelancer(response.data.freelancer);
        console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchFreelancerData();
  }, []);

  return (
    <div className="lg:max-w-[1280px] min-h-[calc(100vh-326px)] bg-[#f9f9f9] text-sm  my-10 lg:mx-auto max-sm:flex max-sm:flex-col max-sm:items-center max-sm:gap-5 max-sm:w-screen">
      <div className="flex gap-10 items-center bg-[#f9f9f9] lg:p-10 rounded-t-2xl max-sm:items-center max-sm:flex-col">
        <div className="max-sm:flex max-sm:flex-col">
          {" "}
          <div className="w-[200px] max-sm:flex max-sm:gap-5">
            <img
              src={`${choosenFreelancer?.image}`}
              alt="profile"
              className="lg:h-[150px] lg:w-[150px] rounded-full border-4 border-[#118a00] object-cover
            max-sm:w-[40px] max-sm:h-[40px]"
            />
            <div className="flex justify-between w-full items-center md:hidden text-sm gap-3">
              <div className="flex gap-3 items-center">
                <p className="">{choosenFreelancer?.firstname}</p>
                <p className="font-bold">{choosenFreelancer?.lastname}</p>
              </div>
              <div className="flex items-center gap-5">
                <p className="text-[#118a00] text-sm border-[1px] border-[#118a00] px-2 py-[1px] rounded-full">
                  {choosenFreelancer?.type}
                </p>
                {freelancerId === freelancer?._id ? (
                  <Link href="/signup-skills">
                    <Edit color="#118a00" size={22} />
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:hidden">
            <p className="mt-5 indent-10 text-justify w-[200px]">
              {choosenFreelancer?.description}
            </p>
            <div className="mt-5 flex flex-col text-[#118a00] font-light pr-10 flex-wrap gap-2">
              <p>
                Имэйл:
                <span className="text-[#191919] ml-2">
                  {choosenFreelancer?.email}
                </span>
              </p>
              <p>
                Утасны дугаар:
                <span className="text-[#191919] ml-2">
                  {choosenFreelancer?.number}
                </span>
              </p>
              <p>
                Компани:
                <span className="text-[#191919] ml-2">
                  {choosenFreelancer?.company}
                </span>
              </p>
              <p>
                Албан тушаал:
                <span className="text-[#191919] ml-2">
                  {choosenFreelancer?.position}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mr-10 ml-5 max-sm:hidden">
          <div className="flex justify-between w-full items-center">
            <div className="flex gap-3 items-center">
              <p className="text-2xl">{choosenFreelancer?.firstname}</p>
              <p className="font-bold text-2xl">
                {choosenFreelancer?.lastname}
              </p>
            </div>
            <div className="flex items-center gap-5">
              <p className="text-[#118a00] text-sm border-[1px] border-[#118a00] px-2 py-[1px] rounded-full">
                {choosenFreelancer?.type}
              </p>
              {freelancerId === freelancer?._id ? (
                <Link href="/signup-skills">
                  <Edit color="#118a00" size={22} />
                </Link>
              ) : null}
            </div>
          </div>
          <p className="mt-5 indent-10 text-justify">
            {choosenFreelancer?.description}
          </p>
          <div className="mt-5 flex justify-between text-[#118a00] font-light pr-10 flex-wrap gap-2">
            <p>
              Имэйл:
              <span className="text-[#191919] ml-2">
                {choosenFreelancer?.email}
              </span>
            </p>
            <p>
              Утасны дугаар:
              <span className="text-[#191919] ml-2">
                {choosenFreelancer?.number}
              </span>
            </p>
            <p>
              Компани:
              <span className="text-[#191919] ml-2">
                {choosenFreelancer?.company}
              </span>
            </p>
            <p>
              Албан тушаал:
              <span className="text-[#191919] ml-2">
                {choosenFreelancer?.position}
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="tabs tabs-lifted max-sm:text-sm">
        <a
          className={`tab tab-lifted  max-sm:w-[110px] ${
            activeTab === 1 ? "tab-active" : "bg-[#f9f9f9]"
          }`}
          onClick={() => setActiveTab(1)}
        >
          Ур чадвар
        </a>
        <a
          className={`tab tab-lifted ${
            activeTab === 2 ? "tab-active" : "bg-[#f9f9f9]"
          }`}
          onClick={() => setActiveTab(2)}
        >
          Хийсэн ажил
        </a>
      </div>

      {/* Tab Panels */}
      <div
        className={`p-6 bg-base-100 border-base-300 rounded-box ${
          activeTab === 1 ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-5 mt-5 max-sm:w-[180px]">
          {choosenFreelancer?.skills?.map((skill, index) => {
            return (
              <div
                key={index}
                className="flex justify-between px-10 py-5 rounded-2xl border-l-[1px] border-[#118a00] max-sm:flex-col"
              >
                <div className="w-[30%]">{skill.name}</div>
                <div className="flex items-center gap-2 w-[20%]">
                  <p>4.7/5</p>
                  <FaStar size={14} color="#118a00" />
                </div>
                <div className="lg:w-[20%]">{skill.experience} жил</div>
                <div className="lg:w-[20%] lg:text-right">
                  {skill.startingSalary.toLocaleString()}₮ /{skill.salaryType}/
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={`p-6 bg-base-100 border-base-300 rounded-box ${
          activeTab === 2 ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col gap-10 mt-5 max-sm:w-[180px]">
          {" "}
          <Link href={"/ad-detail"}>
            <div className="w-full rounded-2xl flex flex-col gap-2 py-5 lg:px-10 bg-white group border-l-[1px] border-[#118a00] max-sm:items-center">
              <div className="flex justify-between items-center">
                <div className="flex items-center lg:gap-5 max-sm:text-sm max-sm:gap-3 max-sm:w-full">
                  <img
                    src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
                    alt=""
                    className="w-[40px] h-[40px] rounded-full max-sm:w-[30px] max-sm:h-[30px]"
                  />
                  <h1>
                    <strong className="font-normal">Green LLC</strong>
                  </h1>
                </div>
                <p className="text-slate-400 max-sm:hidden">3 өдрийн өмнө</p>
              </div>

              <h1 className="text-xl mt-2 max-sm:text-sm">
                <strong className="font-normal"> Хийморийн сан</strong>
              </h1>
              <div className="flex gap-2 flex-wrap mt-2 px-10">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00] md:hidden">
                  Лам
                </p>
              </div>
              <div className="mt-5 max-sm:flex max-sm:flex-col max-sm:items-center">
                <div className="flex">
                  <FaStar size={16} color="#118a00" />
                  <FaStar size={16} color="#118a00" />
                  <FaStar size={16} color="#118a00" />
                  <FaStar size={16} color="#118a00" />
                  <FaStar size={16} color="#118a00" />
                </div>
                <p className="mt-2 max-sm:pl-4">
                  Хүссэн үр дүнг цаг хугацаанд нь гаргаж чадсан. Баярлалаа!
                </p>
              </div>
            </div>
          </Link>
          {/* map */}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
