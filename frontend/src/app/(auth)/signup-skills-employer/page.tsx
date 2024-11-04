"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEmployer } from "@/context/EmployerProvider";
import { location } from "@/app/(auth)/signup-skills/page";

const SignUpSkillsEmployer = () => {
  const { employer } = useEmployer();
  const [image, setImage] = useState("");

  const [updatedEmployer, setUpdateEmployer] = useState({
    fullnameOrCompany: "",
    type: "",
    email: "",
    description: "",
    number: "",
    company: "",
    membership: "",
    location: "",
    image: "",
  });

  const updateEmployerData = async () => {
    const {
      fullnameOrCompany,
      type,
      email,
      description,
      number,
      company,
      membership,
      location,

      // image,
    } = updatedEmployer;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `http://localhost:8000/api/v1/employer/update-employer`,
        {
          fullnameOrCompany,
          type,
          email,
          description,
          number,
          company,
          membership,
          location,
          image,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        setUpdateEmployer(res.data.employer);
        toast.success("Амжилттай хадгаллаа", { autoClose: 1000 });
        console.log("success");
      }
    } catch (error) {
      console.log("failed", error);
      toast.success("Хадгалахад алдаа гарлаа");
    }
  };

  useEffect(() => {
    if (employer) {
      setUpdateEmployer({
        fullnameOrCompany: employer.fullnameOrCompany,
        type: employer.type,
        email: employer.email,
        description: employer!.description,
        number: employer.number,
        company: employer.company,
        membership: employer.membership,
        location: employer.location,
        image: employer.image,
      });
    }
  }, [employer]);

  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] mt-20 mb-20 text-sm justify-center items-center ">
      <h2 className="text-[#118a00] text-2xl">Дэлгэрэнгүй бүртгэл</h2>
      <div className="flex justify-between mt-10">
        <div className="flex flex-col gap-10 items-center w-[23%] p-10 ml-[10%]">
          <Avatar className="w-36 h-36 bg-[#f9f9f9]">
            <AvatarImage src={image === "" ? employer?.image : image} />
          </Avatar>

          <div className="relative hover:border  hover:border-[#118a00] rounded-2xl">
            <CldUploadWidget
              uploadPreset="adminskillhub"
              onSuccess={(result) => {
                if (typeof result?.info !== "string") {
                  setImage(result?.info?.secure_url || "");
                }
              }}
              onError={(err) => {
                console.log("Error", err);
              }}
            >
              {({ open }) => {
                return (
                  <button
                    className="px-3 py-1 bg-[#f9f9f9] rounded-2xl "
                    onClick={() => open()}
                  >
                    Upload an Image
                  </button>
                );
              }}
            </CldUploadWidget>
          </div>
        </div>
        <div className="border-[1px] rounded-2xl p-10 bg-[#f9f9f9] w-[46%] h-[700px]">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Нэр</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.fullnameOrCompany}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    fullnameOrCompany: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Төрөл</label>
              <select
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.type}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    type: e.target.value,
                  });
                }}
              >
                {/* <option disabled selected className="text-black text-slate-400">
                  Сонгох
                </option> */}
                <option className="text-black" value="Person">
                  Хувь хүн
                </option>
                <option className="text-black" value="Company">
                  Компани
                </option>
              </select>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label className="text-slate-400">Дэлгэрэнгүй</label>
            <input
              type="text"
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff] min-h-40"
              value={updatedEmployer?.description}
              onChange={(e) => {
                setUpdateEmployer({
                  ...updatedEmployer,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">И-мэйл</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.email}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Утас</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.number}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    number: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Ажлын газар</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.company}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    company: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Гишүүнчлэл</label>
              {/* <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedEmployer?.membership}
                onChange={(e) => {
                  setUpdateEmployer({
                    ...updatedEmployer,
                    membership: e.target.value,
                  });
                }}
              /> */}
              <div className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff] flex items-center">
                <p>{updatedEmployer?.membership}</p>
              </div>
            </div>
          </div>
          <div className="mt-5 w-full">
            {/* input grp ehlel */}
            <div>Байршил</div>
            <select
              className="select select-bordered join-item w-full mt-2 p-2 rounded-lg text-black border border-gray-300 hover:border-[#118a00] bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#118a00]"
              aria-label="Choose an option"
              value={updatedEmployer?.location}
              onChange={(e) => {
                setUpdateEmployer({
                  ...updatedEmployer,
                  location: e.target.value,
                });
              }}
            >
              <option disabled selected className="text-black">
                Сонгох
              </option>
              {location.map((loc) => {
                return (
                  <option key={loc} className="text-black">
                    {loc}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="w-full flex justify-center">
            <button
              className="btn w-36 mt-10 mx-auto bg-[#118a00] text-white rounded-2xl"
              onClick={updateEmployerData}
            >
              Хадгалах
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 w-[28%] p-10 text-sm"></div>
      </div>
    </div>
  );
};

export default SignUpSkillsEmployer;
