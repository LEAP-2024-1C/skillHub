"use client";
import * as React from "react"
import { JobCategory } from "./work-category";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from "next/link";


const JobAds = () => {
   

    return <div className="flex justify-center items-center my-32 gap-16">
        <JobCategory />
        <div> <h1 className="m-auto text-[20px]"><strong>Ажил хайх</strong></h1>
            <div className="flex flex-wrap my-10 gap-10">
                <div className="w-[550px] h-[250px] rounded-3xl hover:border hover:border-[#118a00] flex flex-col gap-4 items-start text-start py-5 px-10 shadow-xl">
                <h1><strong>Green LLC</strong></h1>
                <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5 ">
                <h1><strong>Тавигдах шаардлага:</strong></h1>
               <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            x: 20
                        }}
                        className="pl-24"
                    >
                        <FaArrowCircleRight size={25} className="arrow" />
                    </motion.button>
                   
                </div>
           
            </div>
           
            <div className="w-[550px] h-[250px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-4 items-start text-start py-5 px-10 shadow-xl">
                <h1><strong>Green LLC</strong></h1>
                <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5">
                <h1><strong>Тавигдах шаардлага:</strong></h1>
               <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                    <motion.button
                        whileHover={{
                            scale: 1.2,
                            x: 20
                        }}
                        className="pl-24"
                    >
                        <FaArrowCircleRight size={25} className="arrow" />
                    </motion.button>
                </div>
           
            </div>
        </div>
        </div>
      
           
     
        
        
    </div>
}

export default JobAds;