import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

export const Header = () => {
  return (
    <header className="flex justify-between px-10 h-16 items-center bg-[#181818] text-sm text-[#181818 ]">
      <div className="flex gap-4 items-center">
        <Link href={"/"}>
          <img
            src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
            alt="logo"
            className="h-8 mr-10"
          />
        </Link>
        <Link href={"/ad-section"}>
          <h1 className="flex items-center gap-2 text-white hover:text-[#118a00]">
            <p className="font-normal">Ажил хайх</p>
            <IoIosArrowDown size={12} className="icon" color="white" />
          </h1>
        </Link>
        <Link href={"/skill-list"}>
          <h1 className="flex items-center gap-2 text-white hover:text-[#118a00]">
            <p className="font-normal">Ажилтан хайх</p>
            <IoIosArrowDown size={12} className="icon" color="white" />
          </h1>
        </Link>
      </div>
      {/*  */}
      <div className="flex gap-2 items-center w-96">
        <div className="form-control h-8 w-80 font-normal">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-auto rounded-2xl font-normal "
          />
        </div>
        <div className="dropdown dropdown-end w-48">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <div className="rounded-full text-[#f9f9f9 ] flex gap-2 items-center">
              <a className="text-white font-normal">Ажил</a>
              <IoIosArrowDown size={12} className="icon" color="white" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
          >
            <li>
              <a>Ажил</a>
            </li>

            <li>
              <a>Ажилтан</a>
            </li>
            <li>
              <a className="justify-between">
                Ур чадвар
                <span className="badge">New</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/*  */}
      <div className="flex gap-3">
        <Button className="bg-[#118a00] text-white rounded-2xl w-[120px] hover:bg-white hover:text-[#118a00] shadow-xl border-none">
          <Link href="/login">
            <p className="">Нэвтрэх</p>
          </Link>
        </Button>
        <Button className="bg-white text-[#118a00] rounded-2xl w-[120px] hover:bg-[#118a00] hover:text-white shadow-xl border-none">
          <Link href="/login">
            <p className="">Бүртгүүлэх</p>
          </Link>
        </Button>
      </div>
    </header>
  );
};
