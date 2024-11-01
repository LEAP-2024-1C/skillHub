"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TiDeleteOutline } from "react-icons/ti";
import { CldUploadWidget } from "next-cloudinary";
import { useFreelancer } from "@/context/FreelancerProvider";
import { useEffect, useState } from "react";
import axios from "axios";
// import { number, set } from "zod";
// import { useSkill } from "@/context/SkillProvider";

// interface IFreelancer {
//   _id: string;
//   firstname: string;
//   lastname: string;
//   email: string;
//   password: string;
//   number: number;
//   image: string;
//   company: string;
//   position: string;
//   skills: [
//     {
//       skill: string;
//       experience: number;
//       ratings: [
//         {
//           rating: number;
//           comment: string;
//         }
//       ];
//       salaryType: string;
//       startingSalary: number;
//     }
//   ];
//   type: string;
//   description: string;
// {category: {
//   _id: 'fsdfsdfsdfa',
//   name: 'Fincance'
// }, skill: [excel]}
// }

// const skills = [
//   { skill: "Exce", cat: "Tech" },
//   { skill: "BI", cat: "FIn" },
// ];
// const cats = skills.map((s) => s.cat);

// cats.map(c=> <div>
//   <h1>c</h1>
//   {skills.filter(s=>s.cat===c).map(s=><div>
//     {s}
//   </div>)}
// </div>)

const skills = [
  "Excel",
  "Power BI",
  "Санхүү",
  "Software engineer",
  "Excel",
  "Power BI",
  "Санхүү",
  "Software engineer",
  "Excel",
  "Power BI",
  "Санхүү",
  "Software engineer",
];

const SignUpSkills = () => {
  const { freelancer } = useFreelancer();
  // const { skills } = useSkill();
  const [choosenSkills, setChoosenSkills] = useState<string[]>([]);

  const addSkill = (skill: string) => {
    console.log(skill);
    if (choosenSkills.findIndex((c) => c === skill) === -1) {
      setChoosenSkills([...choosenSkills, skill]);
    }
  };

  const [updatedFreelancer, setUpdateFreelancer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    description: "",
    number: 10,
    company: "",
    position: "",
  });

  const updateFreelancerData = async () => {
    const {
      firstname,
      lastname,
      email,
      description,
      number,
      company,
      position,
    } = updatedFreelancer;
    try {
      const res = await axios.put(
        `http://localhost:8000/api/v1/freelancer/update-freelancer`,
        {
          firstname,
          lastname,
          email,
          description,
          number,
          company,
          position,
        }
      );

      if (res.status === 200) {
        setUpdateFreelancer(res.data.freelancer);
      }
    } catch (error) {
      console.log("failed", error);
    }
  };
  console.log("lastnane", freelancer?.lastname);
  console.log("updatedFreelancer", updatedFreelancer.lastname);

  useEffect(() => {
    console.log("UE", freelancer);
    if (freelancer) {
      setUpdateFreelancer({
        firstname: freelancer.firstname,
        lastname: freelancer.lastname,
        email: freelancer.email,
        description: freelancer!.description,
        number: freelancer.number,
        company: freelancer.company,
        position: freelancer.position,
      });
    }
  }, [freelancer]);

  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] mt-20 mb-20 text-sm justify-center items-center ">
      <h2 className="text-[#118a00] text-2xl">Дэлгэрэнгүй бүртгэл</h2>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col gap-10 items-center w-[23%] p-10">
          <Avatar className="w-36 h-36 bg-[#f9f9f9]">
            <AvatarImage src="https://cdn-icons-png.flaticon.com/512/5556/5556499.png" />
          </Avatar>

          <div className="relative hover:border  hover:border-[#118a00] rounded-2xl">
            {/* <input
              type="file"
              className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
            />
            <button className="bg-[#f9f9f9]  text-xs px-3 py-1 rounded-2xl">
              Choose File
            </button> */}
            <CldUploadWidget
              uploadPreset="adminskillhub"
              // onSuccess={(result) => {
              //   console.log("URL", result?.info?.secure_url!);
              // setFormData({
              //   ...FormData,
              //   images: [result?.info?.secure_url!],
              // });
              // }}
              // onError={(err)=>{
              //   console.log('Error',err)
              // }}
            >
              {({ open }) => {
                return <button onClick={() => open()}>Upload an Image</button>;
              }}
            </CldUploadWidget>
          </div>
        </div>
        <div className="border-[1px] rounded-2xl p-10 bg-[#f9f9f9] w-[46%]">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Овог</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer.lastname}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    lastname: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Нэр</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={freelancer?.firstname}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label>Дэлгэрэнгүй</label>
            <input
              type="text"
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff] min-h-40"
              value={updatedFreelancer?.description}
            />
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label>И-мэйл</label>
            <input
              type="text"
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
              value={freelancer?.email}
            />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Ажлын газар</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={freelancer?.company}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label>Албан тушаал</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={freelancer?.position}
              />
            </div>
          </div>
          <div className="mt-5 w-full">
            {/* input grp ehlel */}
            <div>Байршил</div>
            <select
              className="select select-bordered join-item w-full mt-2 p-2 rounded-lg text-slate-400 border border-gray-300 hover:border-[#118a00] bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#118a00]"
              aria-label="Choose an option"
            >
              <option disabled selected className="text-gray-400">
                Сонгох
              </option>
              <option>Баянгол</option>
              <option>Баянзүрх</option>
              <option>Хан-Уул</option>
            </select>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="btn w-36 mt-10 mx-auto bg-[#118a00] text-white rounded-2xl"
              onClick={updateFreelancerData}
            >
              Хадгалах
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[28%] p-10 text-sm">
          <label>Таны ур чадварууд:</label>
          <div className="flex flex-wrap gap-3 mt-5">
            {choosenSkills.map((s, i) => (
              <div
                key={i}
                className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group"
              >
                <p>{s}</p>
                <TiDeleteOutline
                  size={15}
                  color="#118a00"
                  className="hidden group-hover:block"
                />
              </div>
            ))}
          </div>
          <label className="mt-5">Ур чадвар нэмэх:</label>
          <label className="mt-5">Категори:</label>
          <select className="select select-bordered join-item w-full hover:border-[#118a00] border-none bg-[#f9f9f9]">
            <option disabled selected>
              Сонгох
            </option>
            <option>Баянгол</option>
            <option>Баянзүрх</option>
            <option>Хан-Уул</option>
          </select>
          <label className="mt-5">Ур чадварууд:</label>
          <div className="flex flex-wrap gap-3 mt-5">
            {/* {skills.map((skill) => {
              return (
                <button className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2">
                  <p>${skill.name}</p>
                </button>
              );
            })} */}
            {skills.map((s) => (
              <button
                key={s}
                className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2"
                onClick={() => addSkill(s)}
              >
                <p>{s}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSkills;
