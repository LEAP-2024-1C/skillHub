"use client"
import {History, Skills} from "@/components/user"
import { MdOutlineStarRate } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Freelancer = () => {

   return(

    <div className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9]">

       <div className=" h-[360px] flex pt-[25px] ">
  
          <div className="pt-[40px] w-[30%] flex flex-col items-center gap-6">
    
             <div className="avatar flex flex-col items-center gap-5 ">
                <div className="ring-primary ring-offset-base-100 w-[150px] rounded-full ring ring-offset-2">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
             </div>
             <input
                type="file"
                className="file-input file-input-bordered file-input-success bg-red-300 text-xs" />
            
  
          </div>

          <div className="w-[50%] flex flex-col items-center gap-6 ">
          <div className=" w-full h-full ">
              <div className="flex justify-around mt-[30px]  ">
                   <div className="flex flex-col justify-start items-start gap-7 text-2xl font-black font-bold text-[#181818] ">
                      <p className="hover:text-[#118a00]">Овог нэр</p>
                      <p className="hover:text-[#118a00]">Өөрийн </p>
                      <p  className="hover:text-[#118a00]">И-мэйл</p>
                      <p  className="hover:text-[#118a00]">Утасны дугаар</p>
                      <p  className="hover:text-[#118a00]">Компани</p>
                   </div>
                   <div className="flex flex-col items-end gap-8">
                       <p>Бат</p>
                       <p>Дорж</p>
                       <p>Dorj234@gmail.com</p>
                       <p>+97690302490</p>
                       <p>IHC</p>
                       
                   </div>
              </div>
          </div>
             

          </div>

          <div className="w-[20%] flex flex-col items-end pt-[30px] pr-10 text-2xl text-[#118a00]" >
            <div className="">
            <button className="btn w-[170px] hover:bg-[#118a00] hover:text-[#333333] text-xl">Edit</button>
            </div>
          </div>
        
          
       </div>


       <div>
       <div role="tablist" className="tabs tabs-lifted ">
        <input type="radio" name="my_tabs_2" role="tab" className="tab mr-[500px] text-2xl h-[50px] text-[#118a00] hover:text-[#f9f9f9] hover:bg-[#118a00] mt-[40px]" aria-label="Ур чадвар" />
         <div role="tabpanel" className="tab-content bg-base-100 border-base-300  p-6 h-[60vh] ">
          <Skills/>
         </div>

        <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        className="tab text-2xl h-[50px] text-[#118a00] hover:text-[#f9f9f9] hover:bg-[#118a00]  "
        aria-label="Түүх"
        defaultChecked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 p-6 h-[60vh]">
         <History/>
        </div>

    
        </div>
       </div>

    </div>




   )

}
export default Freelancer;