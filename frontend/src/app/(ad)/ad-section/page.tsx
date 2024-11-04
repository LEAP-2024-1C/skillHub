"use client";
import * as React from "react";
import {JobCategory, location } from "./work-category";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmployer } from "@/context/EmployerProvider";
import { useCategory } from "@/context/CategoryProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { useRouter } from "next/navigation";

const JobAds = () => {
  const router = useRouter();
  // interface IJobRequest {
  //   title: string,
  //   jobDetail: string,
  //   salaryType:string,
  //   startingPrice: string,
  //   skillId:string,
  // }

  const { employer } = useEmployer();
  const { category } = useCategory();
  const [jobData, setJobData] = useState({
    title: "",
    jobDetail: "",
    salaryType:"",
    startingPrice: "",
    skillId:"",
  });

  // const getJobRequestData = async () => {
  //   const { title, jobDetail, skillId, startingPrice, salaryType } = jobData;
  //   try {
  //     const res = await axios.post(`${apiUrl}/api/v1/jobreq/job-ad`, {
  //       title, jobDetail, skillId, startingPrice, salaryType
  //    })
  //   } catch (error) {
      
  //   }
  // }

  // useEffect(() => {
  //   getJobRequestData();
  // }, [])

  const handlePostAd = async() => {
    const { title, jobDetail, skillId, startingPrice, salaryType } = jobData;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/jobreq/job-ad`, {
        title, 
        jobDetail,
        skillId,
        startingPrice, 
        salaryType
      })
      if (res.status === 200) {
        setJobData(res.data.jobrequest);
        router.push("/ad-section");
      }
     
    } catch (error) {
      console.error("error", error);
    }
}
  console.log("job:", jobData);
  return (
    <div className="flex  w-[1280px] m-auto min-h-[calc(100vh-326px)]  my-20 text-sm ">
      <div className="w-[200px]">
        <JobCategory />
      </div>

      <div className="flex items-start gap-10 flex-col w-full mx-20">
        {employer && (
            <div className="w-full">
            <div className="max-lg:w-full md:w-full rounded-2xl bg-[#f9f9f9] m-auto py-5 px-10">
              <div className="flex gap-5">
                <img
                  src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="profile"
                  className="w-[40px] h-[40px] rounded-full"
                />
  
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl bg-[#fff]"
                    >
                      <input
                        type="text"
                        placeholder="Ажлын зар оруулах"
                        className="bg-[#fff] rounded-2xl w-full px-5"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle className="text-[#118a00] font-normal">
                        Зар нийтлэх:
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-end justify-between ">
                        <div className="flex flex-col gap-4">
                          {" "}
                          <p className="w-[300px]">
                            <strong className="font-normal">Гарчиг</strong>
                          </p>
                          <Input
                            id="name"
                            placeholder="Гарчиг"
                            className="col-span-3 "
                            value={jobData.title}
                          onChange={(e)=>setJobData({...jobData, title:e.target.value})}
                          />
                        </div>
                        <div className="flex flex-col gap-4 w-[300px]">
                          {" "}
                          <p>
                            <strong className="font-normal">Төлөв</strong>
                          </p>
                          <Select>
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Сонгох"
                            />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Төлөв</SelectLabel>
                                <SelectItem value="est">Идэвхтэй</SelectItem>
                                <SelectItem value="t">Идэвхгүй</SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">
                            Дэлгэрэнгүй мэдээлэл
                          </strong>
                        </p>
                        <Input
                          id="description"
                          placeholder="Дэлгэрэнгүй"
                          className="h-[72px] "
                          value={jobData.jobDetail}
                          onChange={(e)=>setJobData({...jobData, jobDetail:e.target.value})}
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Категори</strong>
                        </p>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Категори</SelectLabel>
                              {category?.map((type:any, idx: any) => (
                                <SelectItem key={`first ${idx}`} value={`jobData.skillId${idx}`}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Ур чадвар</strong>
                        </p>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Ур чадвар</SelectLabel>
                              {category?.map((type, idx) => (
                                <SelectItem key={`second ${idx}`} value={jobData.skillId}>
                                  {type.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Байршил</strong>
                        </p>
                        <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Байршил</SelectLabel>
                              {location?.map((type, idx) => (
                                <SelectItem key={`third ${idx}`} value={`${idx}`}>
                                  {type.category}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">
                            Цалингийн мэдээлэл
                          </strong>
                        </p>
                        {/* <Select>
                          <SelectTrigger className="w-full" value={jobData.salaryType}
                            onChange={(e:any)=>setJobData({...jobData, salaryType:e.target.value})}>
                            <SelectValue placeholder="Сонгох"
                           />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Цалин олгох төрөл</SelectLabel>
                              <SelectItem value={""}>Цагаар</SelectItem>
                              <SelectItem value={""}>Удаагаар</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select> */}
                        <Input type="text" placeholder="Цалин эхлэх үнэ" 
                          value={jobData.startingPrice}
                        onChange={(e)=>setJobData({...jobData, startingPrice:e.target.value})}></Input>
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" className="bg-[#118a00]" onClick={handlePostAd}>
                        Нийтлэх
                      </Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}
      
        <div className="w-full">
          {" "}
          <h1 className="m-auto">
            <strong className="text-[#118a00] text-xl">Ажлын зарууд</strong>
          </h1>
          <div className="flex flex-col my-10 gap-10 w-full bg-[#f9f9f9] p-10 rounded-2xl">
            <Link href={"/ad-detail"}>
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
            {/* map */}
            <Link href={"/ad-detail"}>
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
              <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
              <div className="w-full rounded-2xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
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
      <div className="w-[400px] ">
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
  );
};

export default JobAds;
