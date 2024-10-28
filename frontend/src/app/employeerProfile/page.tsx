"use client"
// import {History, Skills} from "@/components/user"
import { MdOutlineStarRate } from "react-icons/md";
import { FaCrown } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoCameraReverse } from "react-icons/io5";
import { MdModeEdit } from "react-icons/md";
import { FaStar } from "react-icons/fa";


const Employeer = () => {

   return(

    <div className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#f9f9f9]">

       <div className=" h-[400px] flex">
  
          <div className="flex flex-col justify-center w-[30%] ">
    
             <div className="avatar flex flex-col items-center gap-5 ">
                <div className="ring-primary ring-offset-base-100 w-[150px] rounded-full ring ring-offset-2">
                 <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
             </div>
             <div className="flex mt-[50px] justify-center text-2xl">
               <FaStar /> 
               <FaStar />
               <FaStar />
               <FaStar />
               <FaStar />
             </div>
  
          </div>

          <div className="w-[40%] flex flex-col items-center gap-6">
          <div className=" w-full h-full ">
              <table className="flex justify-around mt-[70px]">
                   <thead className="flex flex-col justify-start items-start gap-7 text-xl font-black font-bold text-[#181818]">
                      <th>Fullname or Company</th>
                      <th> Type</th>
                      <th>Email</th>
                      <th>Phonenumber</th>
                      <th>Company</th>

                   </thead>
                   <tbody className="flex flex-col items-end gap-8">
                       <td>Bat</td>
                       <td>Dorj</td>
                       <td>Droj234@gmail.com</td>
                       <td>+97690302490</td>
                       <td>Cdf</td>
                       
                   </tbody>
              </table>
              <textarea name="" id=""></textarea>
          </div>
             

          </div>

          <div className="w-[30%] flex flex-col items-end pt-[40px] pr-5 text-2xl text-[#118a00]" >
            <div className="">
              <MdModeEdit className="text-2xl"/>
            </div>
          
          
         
          </div>
        
          
       </div>


       <div>
       <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab text-2xl pr-[300px]" aria-label="Tab1" />
         <div role="tabpanel" className="tab-active bg-base-100 border-base-300 rounded-box   ">
    asdfsafs
         </div>
        </div>
       </div>

    </div>




   )

}
export default Employeer;