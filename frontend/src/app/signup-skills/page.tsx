"use client";

import { Avatar } from "@/components/ui/avatar";

const SignUpSkills = () => {
  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] mt-20">
      <h2>
        A few last details, then you can check and <br />
        publish your profile.
      </h2>
      <div className="flex gap-40 mt-10">
        <div className="flex flex-col gap-6 items-center">
          <Avatar className="w-28 h-28 bg-[#118a00]" />
          <button className=" border-[#118a00] w-[148px] h-[32px] text-[#118a00] rounded-lg border-2 items-center">
            + Upload photo
          </button>
        </div>
        <div>
          <div className="flex gap-2">
            <div className="flex flex-col gap-2">
              <label>Овог</label>
              <input
                type="text"
                className="border w-[218px] h-[40px] border-[#118a00] rounded-lg"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Нэр</label>
              <input
                type="text"
                className="border w-[218px] h-[40px] border-[#118a00] rounded-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label>Email</label>
            <input
              type="text"
              className="border w-[440px] h-[40px] border-[#118a00] rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Phone</label>
            <input
              type="text"
              className="border w-[440px] h-[40px] border-[#118a00] rounded-lg"
            />
          </div>
          <div className="">
            {/* input grp ehlel */}
            <div>Салбар, мэргэжил сонгох</div>
            <select className="select select-bordered join-item w-[440px] mt-3 border-[#118a00]">
              <option disabled selected>
                Сонгох
              </option>
              <option>Автомашин, засвар үйлчилгээ</option>
              <option>Банк санхүү, Нягтлан бодох бүртгэл</option>
              <option>Маркетинг, PR</option>
            </select>
          </div>
          <div>Байршил</div>
          <select className="select select-bordered join-item w-[440px] mt-3 border-[#118a00]">
            <option disabled selected>
              Сонгох
            </option>
            <option>Баянгол</option>
            <option>Баянзүрх</option>
            <option>Хан-Уул</option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label>Ур чадвар</label>
          <input
            type="text"
            className="border w-[440px] h-[40px] border-[#118a00] rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUpSkills;
