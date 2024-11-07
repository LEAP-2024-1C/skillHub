"use client";

import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { useAuth } from "@/context/AuthProvider";
import { format } from "date-fns";

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

interface IFreelancer {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  number: number;
  image: string;
  company: string;
  position: string;
  skills: [
    {
      skill: {
        _id: string;
        name: string;
        category: string;
      };
      experience: number;
      ratings: [
        {
          rating: number;
          comment: string;
        }
      ];
      salaryType: string;
      startingSalary: number;
    }
  ];
  type: string;
  description: string;
  location: string;
}

const AdDetail = () => {
  // const [rating, setRating] = useState(0);
  // const [hover, setHover] = useState(0);
  // const [subRating, setSubRating] = useState(0);
  // const [subHover, setSubHover] = useState(0);
  const { jobAdId } = useParams();
  const [choosenJobAd, setChoosenJobAd] = useState<IJobRequest | null>(null);
  const { isAuthenticated } = useAuth();
  const [jobAds, setJobAds] = useState<IJobRequest[]>([]);
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
  }

  const [allFreelancers, setAllFreelancers] = useState<IFreelancer[]>([]);

  const showJobAds = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/jobreq/get-ads`);
      setJobAds(res.data.allAds);
      console.log("job-ad", res.data.allAds);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getAllFreelancers = async () => {
    try {
      const userToken = localStorage.getItem("token");
      if (!userToken) {
        console.log("No user token found");
        return;
      }
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/get-all-freelancers`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setAllFreelancers(response.data.freelancer);
    } catch (error) {
      console.error("There was an error signing in:", error);
    }
  };

  const fetchJobAdData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/v1/jobreq/${jobAdId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setChoosenJobAd(response.data.jobAd);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    showJobAds();
  }, []);

  useEffect(() => {
    fetchJobAdData();
  }, []);

  useEffect(() => {
    getAllFreelancers();
  }, []);

  return (
    <div className="flex gap-10 w-[1280px] m-auto min-h-[calc(100vh-326px)]  my-20 text-sm justify-between">
      <div className="flex w-full">
        <div className="flex flex-col gap-5 w-[540px] ">
          <h1 className="">
            <strong>Ажлын зарууд</strong>
          </h1>
          <div className="pr-5 flex flex-col gap-3">
            {jobAds.map((jobAd) => {
              return (
                <Link key={jobAd._id} href={`/ad-section/detail/${jobAd._id}`}>
                  <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-3 px-5 bg-white group text-xs">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-5">
                        <img
                          src={`${jobAd.employerId.image}`}
                          alt=""
                          className="w-[32px] h-[32px] rounded-full object-cover"
                        />
                        <h1>
                          <strong className="font-normal">
                            {jobAd.employerId.fullnameOrCompany}
                          </strong>
                        </h1>
                      </div>
                      {/* <p className="text-slate-400">{jobAd.createdAt}</p> */}
                    </div>

                    <h1 className="text-lg">
                      <strong className="font-normal"> {jobAd.title}</strong>
                    </h1>
                    <div className="flex gap-2 flex- px-10">
                      <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                        {jobAd.skill.name}
                      </p>
                    </div>

                    <div className="mt-1 flex justify-between items-center">
                      {jobAd.salaryType === "time" ? (
                        <p className="">
                          Эхлэх цалин: {jobAd.startingPrice}₮ /удаагаар/
                        </p>
                      ) : (
                        <p className="">
                          Эхлэх цалин: {jobAd.startingPrice}₮ /цагаар/
                        </p>
                      )}

                      {/* <button className="w-10">
                        <FaArrowCircleRight
                          size={25}
                          className="arrow hidden group-hover:block"
                        />
                      </button> */}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
        {/* mid */}
        <div className="flex flex-col mr-10 ml-5 gap-5 p-10 bg-[#f9f9f9] rounded-2xl w-full h-full">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src={`${choosenJobAd?.employerId.image}`}
                alt=""
                className="w-[80px] h-[80px] rounded-full object-cover border-2 border-[#118a00]"
              />
              <div className="flex flex-col gap-1 mx-3">
                <h1 className="text-[20px]">
                  <strong>{choosenJobAd?.employerId.fullnameOrCompany}</strong>
                </h1>
                <p className="text-slate-400 text-sm">
                  {choosenJobAd?.createdAt
                    ? format(new Date(choosenJobAd.createdAt), "yyyy-MM-dd")
                    : ""}
                </p>
              </div>
            </div>
            <Button
              variant="destructive"
              className="w-[95px] rounded-xl text-sm font-normal bg-[#118a00]"
            >
              <strong>CV илгээх</strong>
            </Button>
          </div>
          <div className="flex justify-between flex-wrap">
            <div className="text-xl flex justify-center m-auto ">
              <p className="">{choosenJobAd?.title}</p>
            </div>
          </div>
          <div className="flex flex-col gap-2 max-md:w-[365px] max-lg:w-[700px]">
            <strong className="">Дэлгэрэнгүй:</strong>
            <p className="indent-10 text-justify">{choosenJobAd?.jobDetail}</p>
          </div>
          <div className="flex gap-2 flex-wrap">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              {choosenJobAd?.skill.name}
            </p>
          </div>
          <div>
            <strong>Эхлэх цалин:</strong>
            {choosenJobAd?.salaryType === "time" ? (
              <p className="mt-2">{choosenJobAd?.startingPrice}₮ /Удаагаар/</p>
            ) : (
              <p className="mt-2">{choosenJobAd?.startingPrice}₮ /Цагаар/</p>
            )}
          </div>
          <div>
            <strong>Байршил</strong>
            <p className="mt-2">{choosenJobAd?.location}</p>
          </div>
          <div className="mx-auto mt-3">
            <Link
              href={`/employer/detail/${choosenJobAd?.employerId._id}`}
              className="text-[#118a00]"
            >
              <strong>Ажил олгогчийн дэлгэрэнгүй мэдээлэл</strong>
            </Link>
          </div>
        </div>
        <div className="w-[400px]">
          <h1 className="font-bold mb-5">Шилдгүүд</h1>
          <div className="flex flex-col gap-5">
            {allFreelancers.slice(0, 5).map((freelancer) => {
              return (
                <Link
                  key={freelancer._id}
                  href={`/skill-list/detail/${freelancer._id}`}
                >
                  <div className="rounded-2xl p-2 flex flex-col gap-2 border-[1px] w-full  hover:border hover:border-[#118a00]">
                    <div className="flex items-center gap-3">
                      <img
                        src={`${freelancer.image}`}
                        alt="profile"
                        className="h-8 w-8 rounded-full object-cover"
                      />
                      <p>{freelancer.firstname}</p>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {freelancer.skills.slice(0, 1).map((sk) => {
                        return (
                          <p
                            key={sk.skill._id}
                            className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]"
                          >
                            {sk.skill.name} (4.7)
                          </p>
                        );
                      })}
                      <p className="mx-auto">...</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdDetail;
