"use client";

import React, { useState } from 'react'

import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import { FaStar } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import Link from 'next/link';


const AdsDetail = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [subRating, setSubRating] = useState(0);
    const [subHover, setSubHover] = useState(0);
  return (
      <div className='flex gap-10 py-28 pl-10 '>
          <div className='flex flex-col gap-10'>
          <h1 className="text-[20px]"><strong>Ажил хайх</strong></h1>
              <motion.div
                  whileHover={{
                      scale:0.9
                  }}
                  className="w-[350px] h-[170px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 items-start text-start py-2 pl-8 shadow-xl ">
                <h1><strong>Green LLC</strong></h1>
                <h1 className="text-[16px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5 ">
                <h1><strong>Тавигдах шаардлага:</strong></h1>
               <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                    {/* <motion.button
                        whileHover={{
                            scale: 1.2,
                            x: 20
                        }}
                        className="pl-24"
                    >
                        <FaArrowCircleRight size={25} className="arrow" />
                    </motion.button> */}
                   
                </div>
           
              </motion.div>
              <motion.div
              whileHover={{
                scale:0.9
            }}
                  className="w-[350px] h-[170px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 items-start text-start py-2 px-8 shadow-xl ">
                <h1><strong>Green LLC</strong></h1>
                <h1 className="text-[16px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
                <h1 className="  "><p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
                <div className="flex flex-wrap gap-5 ">
                <h1><strong>Тавигдах шаардлага:</strong></h1>
               <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                    {/* <motion.button
                        whileHover={{
                            scale: 1.2,
                            x: 20
                        }}
                        className="pl-24"
                    >
                        <FaArrowCircleRight size={25} className="arrow" />
                    </motion.button> */}
                   
                </div>
           
              </motion.div>
          </div>
          <div className='flex flex-col gap-5 py-10 px-10 bg-[#f9f9f9] rounded-2xl'>
             
                  <div className='flex items-center '>
                      <img src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className='w-[85px] h-[85px] rounded-full' />
                      <div className='flex flex-col gap-3 mx-3'>
                      <h1 className='text-[20px]'><strong>Green LLC</strong></h1>
                      <div className='flex'>
                     
                          {[...Array(5)].map((star, idx) => {
                              const currentRating = idx + 1;
                              return (
                                  <label >
                                      <input type="radio"
                                          name='rating'
                                        
                                          value={currentRating}
                                        onClick={()=>setRating(currentRating)}
                                      />
                                      <FaStar size={18} className='star'
                                          color={currentRating <= (hover || rating) ? "#118a00" : "#e4e5e9"}
                                          onMouseEnter={() => setHover(currentRating)}
                                      onMouseLeave={()=>setHover(0)}/>
                               </label>
                           )
                          })}</div>
                      </div>
               
              </div>
              <div className='w-[700px] flex justify-between'>
                  <h1 className='text-[20px]'><strong>Тооцооны нягтлан бодогч</strong>
                  <p className="text-[#a4a2a2] text-sm">Date: 3 өдрийн өмнө</p></h1>
                  <Button variant="destructive" className='w-[95px] rounded-2xl bg-indigo-700'><strong>CV илгээх</strong></Button>
              </div>
              <div className='flex flex-col gap-5 w-[700px]'>
                  <ul><strong>Хийж гүйцэтгэх үүрэг:</strong>
                      <li>Хариуцсан алба салбарын бараа материал, бэлэн бүтээгдэхүүний борлуулалтын бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх</li>
                      <li>Анхан шатны тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай мэдээллээр хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг үүргийг гүйцэтгэнэ.</li>
                  </ul>
                  <ul><strong>Цалин</strong>
                      <li>2,100,000₮ - 3,000,000₮</li>
                  </ul>
                  <ul><strong>Байршил</strong>
                      <li>Улаанбаатар</li>
                  </ul>
                  <ul><strong>Нэмэлт мэдээлэл</strong>
                      <li>Гэр ойрхон бол давуу тал болно.</li>
                  </ul>
                  <Link href={"/ad-section"} className='text-[#118a00]'><strong>Ажил олгогчийн дэлгэрэнгүй мэдээлэл</strong></Link>
              </div>
          </div>
          <div>
          <h1 className="text-[20px]"><strong>Freelancers</strong></h1>
          <div className="w-[260px] h-[160px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col items-start text-start py-5 pl-5 shadow-xl text-sm gap-4">
          <div className='flex items-center '>
                      <img src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className='w-[40px] h-[40px] rounded-full' />
                      <div className='flex flex-col mx-3'>
                      <h1 className=''><strong>Name</strong></h1>
                      <div className='flex'>
                     
                          {[...Array(5)].map((star, idx) => {
                              const currentRating = idx + 1;
                              return (
                                  <label >
                                      <input type="radio"
                                          name='rating'
                                        
                                          value={currentRating}
                                        onClick={()=>setSubRating(currentRating)}
                                      />
                                      <FaStar size={14} className='star'
                                          color={currentRating <= (subHover || subRating) ? "#118a00" : "#e4e5e9"}
                                          onMouseEnter={() => setSubHover(currentRating)}
                                      onMouseLeave={()=>setSubHover(0)}/>
                               </label>
                           )
                          })}</div>
               
                  
                      </div>
               
              </div>
            <div className='flex flex-col gap-3'>     <h1 className='flex gap-2'><strong>Мэргэжил:</strong>   <p className="text-[#181818]"><strong>Machine Learning</strong></p></h1>
                
                  <motion.button
                      whileHover={{
                          scale:1.1
                      }}
                  ><button className='btn w-[120px] h-[33px] bg-[#118a00] rounded-2xl m-auto text-white'><strong>Дэлгэрэнгүй</strong></button></motion.button>
              </div>
                </div>
                </div>
            </div>
  )
}

export default AdsDetail