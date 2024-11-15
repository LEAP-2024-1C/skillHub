import { MailIcon, PhoneCall } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#181818] text-white text-sm px-32 py-20 max-sm:py-7 w-6/6 max-sm:w-screen">
      <div className="w-full flex justify-between md:gap-10
       mb-8 items-center max-sm:flex-col max-sm:gap-5">
        <div className="flex gap-5">
          <Link href={"/about-us"} className="hover:text-[#118a00]">
            Бидний тухай
          </Link>
          <Link href={"/term-of-service"} className="hover:text-[#118a00]">
            Үйлчилгээний нөхцөл
          </Link>
          <Link href={"/contact"} className="hover:text-[#118a00]">
            Холбоо барих
          </Link>
          <Link href={"/comment-us"} className="hover:text-[#118a00]">
            Санал хүсэлт
          </Link>
        </div>
        <div className="flex gap-5 items-center w-fit max-sm:justify-center">
          <div className="flex gap-2">
            <PhoneCall size={14} />
            <p className="hover:text-[#118a00]">90069669</p>
          </div>
          <div className="flex gap-2 items-center">
            <MailIcon size={14} />
            <p className="hover:text-[#118a00]">info@skillhub.mn</p>
          </div>
        </div>
      </div>
      <div className="flex lg:w-full justify-between pt-8 border-t-[1px] border-[#118a00] items-center max-sm:justify-center">
        <div className="flex items-center gap-5 ">
          <img
            src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
            alt="logo"
            className="h-6"
          />
          <p className="max-sm:hidden">© 2024 - 2024 SkillHub®</p>
         
        </div>
        <p>Ур чадварыг уургалъя эдр ккк...</p>
      </div>
    </footer>
  );
};
