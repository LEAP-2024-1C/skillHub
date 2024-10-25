"use client";
import { CoWorker } from "../ad-section/work-category"
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"

const HireCoworker = () => {
    return (
        <div className="flex  justify-center items-center my-10 gap-16">
            <div className="pt-20"> <CoWorker /></div>
           <div><h1 className="text-[20px]"><strong>Freelancers</strong></h1>
                <div className="flex flex-wrap my-10 gap-10">
            <div className="w-[550px] h-[250px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-4 items-start text-start py-5 px-10 shadow-xl">
                <h1><strong>Нэр</strong></h1>
                <h1 className="text-[20px]"><strong>AI engineer</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>30 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5 ">
                <h1><strong>Ур чадвар:</strong></h1>
               <p className="text-[#181818]"><strong>Machine Learning</strong></p>
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
                <h1><strong>Нэр</strong></h1>
                <h1 className="text-[20px]"><strong>AI engineer</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>30 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5 ">
                <h1><strong>Ур чадвар:</strong></h1>
               <p className="text-[#181818]"><strong>Machine Learning</strong></p>
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
             <div></div>
        </div>
    )
}
export default HireCoworker;