"use client";
import { Avatar } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
// import { useAuth } from "@/context/AuthProvider";
// import { useRouter } from "next/navigation";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { toast } from "react-toastify";
const SkillList = () => {
  // const { role } = useAuth();
  // const router = useRouter();

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
        skill: string;
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
  }

  const [allFreelancers, setAllFreelancers] = useState<IFreelancer[]>([]);

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
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

  useEffect(() => {
    getAllFreelancers();
  }, []);

  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] flex gap-20 my-10 text-sm">
      <div className=" flex flex-col gap-3 w-[360px]">
        <div className="flex flex-col gap-1">
          <h1 className="font-bold">Категори</h1>
          <Input className="h-[28px] my-2" />
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Автомашин, засвар үйлчилгээ</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Аялал жуулчлал</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Банк санхүү, Нягтлан бодох бүртгэл</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Барилга, инженеринг</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Боловсрол, Шинжлэх ухаан</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Гоо сайхан</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Дизайн</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Маркетинг, PR</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Мэдээллийн технологи</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Харуул хамгаалалт</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Хууль эрхзүй</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Хоол үйлдвэрлэл</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Худалдаа, Борлуулалт</p>
          </div>
          <div className="flex gap-3 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className="checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Цахилгаан эрчим хүч, дулаан хангамж</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Туслах ажилтан</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Үйлчилгээ</p>
          </div>
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Үйлдвэрлэл</p>
          </div>
        </div>
        <div className="flex flex-col gap-1  mt-10">
          <h1 className="font-bold">Ур чадвар</h1>
          <Input className="h-[28px] my-2" />
          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Санхүү</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Excel</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Power Bi</p>
          </div>

          <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
            <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
            <p>Англи хэл</p>
          </div>
        </div>
        <div className=" flex flex-col gap-3 w-[200px] mt-10">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Байршил</h1>
            <Input className="h-[28px] my-2" />
            <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
              <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
              <p>Баянзүрх</p>
            </div>

            <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
              <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
              <p>Хан-уул</p>
            </div>

            <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
              <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
              <p>Сүхбаатар</p>
            </div>

            <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
              <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
              <p>Дорноговь</p>
            </div>
            <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
              <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
              <p>Сүхбаатар</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-12">
        {/* Card-1 */}
        {allFreelancers?.map((freelancer) => {
          return (
            <div
              key={freelancer?._id}
              className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]"
            >
              <div className="flex flex-col items-center">
                <Avatar
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                    backgroundSize: "cover",
                  }}
                  className="w-[120px] h-[120px]"
                />

                <h1 className="font-bold mt-5">{freelancer?.firstname}</h1>
                <p className="text-[#181818] mt-1">{freelancer?.company}</p>
              </div>

              <div className="flex gap-2 items-center mt-1">
                <FaStar size={14} color="#108A00" />
                <p className="text-[#181818]">4.6/5</p>
                <p className="text-[#181818]">(1)</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Front-End
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  Back-End
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  UX UI
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  SQL
                </p>
                <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                  No SQL
                </p>
              </div>
              <div>
                <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          );
        })}
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          {/* {allFreelancers?.map((freelancer) => {
            return (
              <div key={freelancer._id}>
                <h1 className="font-bold mt-5">{freelancer.firstname}</h1>
              </div>
            );
          })} */}
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />

            <h1 className="font-bold mt-5">G.Selenge</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              SQL
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              No SQL
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-2 */}
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        <div className="hover:border hover:border-[#118a00] w-[30%] h-[400px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]">
          <div className="flex flex-col items-center">
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[120px] h-[120px]"
            />
            <h1 className="font-bold mt-5">Г.Сэлэнгэ</h1>
            <p className="text-[#181818] mt-1">Программист</p>
          </div>

          <div className="flex gap-2 items-center mt-1">
            <FaStar size={14} color="#108A00" />
            <p className="text-[#181818]">4.6/5</p>
            <p className="text-[#181818]">(1)</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-2 mt-5">
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Front-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              Back-End
            </p>
            <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
