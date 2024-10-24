import { MailIcon, PhoneCall } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white text-sm px-32 py-20">
      <div className="flex justify-between mb-8 items-center">
        <div className="flex gap-5">
          <p className="hover:text-[#118a00]">Бидний тухай</p>
          <p className="hover:text-[#118a00]">Үйлчилгээний нөхцөл</p>
          <p className="hover:text-[#118a00]">Холбоо барих</p>
          <p className="hover:text-[#118a00]">Санал сэтгэгдэл</p>
        </div>
        <div className="flex gap-5 items-center">
          <div className="flex gap-2">
            <PhoneCall size={14} />
            <p className="hover:text-[#118a00]">99991111</p>
          </div>
          <div className="flex gap-2 items-center">
            <MailIcon size={14} />
            <p className="hover:text-[#118a00]">info@skillhub.mn</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8 border-t-[1px] border-[#118a00] items-center">
        <div className="flex items-center gap-5">
          <img
            src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
            alt="logo"
            className="h-6"
          />
          <p className="">© 2024 - 2024 SkillHub®</p>
        </div>
        <p className="italic mr-80 ">Ур чадварыг уургалъя эдр хаха...</p>
      </div>
    </footer>
  );
};
