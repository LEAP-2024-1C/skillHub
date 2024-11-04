"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import { useEmployer } from "@/context/EmployerProvider";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";

export const Header = () => {
  const { setRole } = useAuth();
  const router = useRouter();
  const [freelancer, setFreelancer] = useState(false);
  const {employer} = useEmployer();
  const fetchFreelancerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`http://localhost:8000/api/v1/freelancer/get-current-freelancer`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setFreelancer(res.data.freelancer);
     } catch (error) {
      console.log("couldn't change header", error);
    }
  };
  useEffect(() => {
    fetchFreelancerData();
  }, []);

  const handleLogin = (role: string) => {
    setRole(role);
    router.push("/login");
  };
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
      {/*  */}
      <div className="flex gap-2 items-center w-96">
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
    
      {!freelancer && !employer &&
        (
          <><Button
        onClick={() => handleLogin("freelancer")}
        className="bg-[#118a00] text-white rounded-2xl w-[120px] hover:bg-white hover:text-[#118a00] shadow-xl border-none"
      >
        Ажил хайх
        </Button>
        <Button
          onClick={() => handleLogin("employer")}
          className="bg-white text-[#118a00] rounded-2xl w-[120px] hover:bg-[#118a00] hover:text-white shadow-xl border-none"
        >
          Ажилтан хайх
        </Button></>
     )} 
     <div className="flex gap-3">
        {freelancer && (
           <>
           <Link href={"/freelancer"}>  <img src="https://i.ibb.co/VVjDg9R/20240816-111053.jpg" alt="" className="w-[35px] h-[35px] rounded-full"/></Link>
           
           <Link href={"/login"}>
           <IoIosLogOut
             className="iconn"
             size={35}
             onClick={() => {
               localStorage.clear();
             }}/></Link>
         
         </>
        )}
        {employer && (  <>
          <Link href={"/employer"}>  <img src="https://images.unsplash.com/photo-1726551195599-ab0f00e9c19b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D" alt="" className="w-[35px] h-[35px] rounded-full"/></Link>
          
          <Link href={"/login"}>
          <IoIosLogOut
            className="iconn"
            size={35}
            onClick={() => {
              localStorage.clear();
            }}/></Link>
          
          </> )  }
      
         </div>
       
    </header>
  );
};
