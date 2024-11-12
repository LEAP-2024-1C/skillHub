"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { useEmployer } from "@/context/EmployerProvider";
import { useFreelancer } from "@/context/FreelancerProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { LuAlignLeft } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";

export const Header = () => {
  const router = useRouter();
  const { employer, fetchEmployerData } = useEmployer();
  const { freelancer, fetchFreelancerData } = useFreelancer();
  const { isAuthenticated, logout, setRole } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = (role: string) => {
    setRole(role);
    router.push("/login");
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchFreelancerData();
      fetchEmployerData();
    }
  }, [isAuthenticated]);

  const dropdownMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <header className="flex justify-between md:px-10 h-16 items-center bg-[#181818] text-sm text-[#181818]
    max-sm:w-screen">
      <div className="flex gap-4 items-center ">

        <LuAlignLeft className="iconn md:hidden" size={30} onClick={dropdownMenu} />
        {isOpen && (
          <div className="absolute top-0 left-0 z-10 flex flex-col w-3/5 h-screen bg-[#181818] text-white py-5 px-3 gap-5">
              <div className="flex justify-between items-center">
              <div className="font-bold text-3xl">
              <img
            src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
            alt="logo"
            className="h-8 mr-10"
          />
               </div>
                        <button onClick={dropdownMenu} className="iconn"><LiaTimesSolid size={24} /></button>
            </div>
            <div className="flex flex-col gap-5">
              <Link href={"/ad-section"} onClick={dropdownMenu}>Ажлын зар</Link>
              <Link href={"/skill-list"} onClick={dropdownMenu}>Ажилтан хайх</Link>
            </div>
           
          </div>
        )}
       
        <Link href={"/"}>
          <img
            src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
            alt="logo"
            className="h-8 mr-10"
          />
        </Link>
        <div className="flex gap-3 max-sm:hidden">
        <Link href={"/ad-section"}>
          <h1 className="flex items-center gap-2 text-white hover:text-[#118a00]">
            <p className="font-normal">Ажлууд</p>
            <IoIosArrowDown
              size={12}
              className="icon hover:display-hidden "
              color="white"
            />
          </h1>
        </Link>
        <Link href={"/skill-list"}>
          <h1 className="flex items-center gap-2 text-white hover:text-[#118a00]">
            <p className="font-normal">Ажилтнууд</p>
            <IoIosArrowDown size={12} className="icon" color="white" />
          </h1>
        </Link>
        </div>
        
      </div>
      {/*  */}
      <div className="flex gap-2 items-center w-96 max-sm:hidden">
        <div className="form-control h-8 w-80 font-normal">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-full md:w-auto rounded-2xl font-normal"
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
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

      <div className="flex gap-2">
        {!isAuthenticated ? (
          <>
            <Button
              onClick={() => handleLogin("employer")}
              className="bg-white text-[#118a00] rounded-2xl w-[120px] hover:bg-[#118a00] hover:text-white shadow-xl border-none"
            >
              Ажилтан хайх
            </Button>
            <Button
              onClick={() => handleLogin("freelancer")}
              className="bg-[#118a00] text-white rounded-2xl w-[120px] hover:bg-white hover:text-[#118a00] shadow-xl border-none"
            >
              Ажил хайх
            </Button>
          </>
        ) : (
          <div className="flex gap-3">
            {freelancer && (
              <div className="flex items-center gap-5">
                <Link href={"/freelancer"}>
                  {" "}
                  <img
                    src={freelancer?.image}
                    alt="profile"
                    className="w-[35px] h-[35px] rounded-full object-cover"
                  />
                </Link>

                <Link href={"/login"}>
                  <IoIosLogOut
                    className="iconn"
                    size={25}
                    onClick={logout}
                    color="#118a00"
                  />
                </Link>
              </div>
            )}
            {employer && (
              <div className="flex items-center gap-5">
                <Link href={"/employer"}>
                  {" "}
                  <img
                    src={employer?.image}
                    alt=""
                    className="w-[35px] h-[35px] rounded-full object-cover"
                  />
                </Link>

                <Link href={"/login"}>
                  <IoIosLogOut
                    className="iconn"
                    size={25}
                    onClick={logout}
                    color="#118a00"
                  />
                </Link>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};
