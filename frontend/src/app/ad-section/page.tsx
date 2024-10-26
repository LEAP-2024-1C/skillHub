"use client";
import * as React from "react"
import { category, JobCategory, location } from "./work-category";
import { FaArrowCircleRight } from "react-icons/fa";
import { motion } from "framer-motion"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
  
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import {
    Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  } from "@/components/ui/select"

const JobAds = () => {
   

    return <div className="flex flex-col my-16 gap-10">
         <div className="w-full">
        <div className="max-lg:w-[700px] md:w-2/4 rounded-2xl bg-[#f9f9f9] m-auto py-5 px-10">
          <div className="flex gap-5">
          <img
              src="https://images.unsplash.com/photo-1521566652839-697aa473761a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
            
            <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="w-full rounded-2xl bg-[#fff]"><input type="text" placeholder="Ажлын зар оруулах" className="bg-[#fff] rounded-2xl w-full px-5" /></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>Зар нийтлэх</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
         <div className="flex items-end justify-between ">
         <div className="flex flex-col gap-4"> <p className="w-[300px]"><strong>Зарын гарчиг</strong></p>
                                        <Input id="name" placeholder="Гарчиг" className="col-span-3 " /></div>
                                    <div className="flex flex-col gap-4 w-[300px]"> <p><strong>Төлөв</strong></p>
        <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
      <SelectLabel>Төлөв</SelectLabel>                                      
           <SelectItem value="est">Идэвхтэй</SelectItem>
           <SelectItem value="t">Идэвхгүй</SelectItem>
     </SelectGroup>
      </SelectContent>
       </Select></div>
      
       </div>
        <div className="flex flex-col items-center gap-4">
          <p className="w-full"><strong>Дэлгэрэнгүй мэдээлэл</strong></p>
            <Input
              id="description"
              placeholder="Дэлгэрэнгүй"
              className="h-[72px] "
            />
                  </div>
          <div className="flex flex-col items-center gap-4">
            <p className="w-full"><strong>Үйл ажиллагааны чиглэл</strong></p>
            <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
      <SelectLabel>Салбар</SelectLabel>                                      
       {category?.map((type) => 
           <SelectItem value="f">{ type.type}</SelectItem>
        )}
    </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="w-full"><strong>Ур чадвар</strong></p>
            <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
      <SelectLabel>Ур чадвар</SelectLabel>                                      
       {category?.map((type) => 
           <SelectItem value="est">{ type.type}</SelectItem>
        )}
    </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p className="w-full"><strong>Байршил</strong></p>
            <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
      <SelectLabel>Байршил</SelectLabel>                                      
       {location?.map((type) => 
           <SelectItem value="est">{ type.category}</SelectItem>
        )}
    </SelectGroup>
      </SelectContent>
    </Select>
          </div>
          <div className="flex items-center gap-4">
            <p className="w-full"><strong>Цалингийн мэдээлэл</strong></p>
            <Select>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Сонгох" />
      </SelectTrigger>
      <SelectContent>
      <SelectGroup>
      <SelectLabel>Цалин олгох төрөл</SelectLabel>                                      
           <SelectItem value="est">Цагаар</SelectItem>
           <SelectItem value="t">Хийсэн ажлаар тохиролцох</SelectItem>
     </SelectGroup>
      </SelectContent>
       </Select>
       <Input type="text" placeholder="Цалин эхлэх үнэ">
        </Input>
        </div>
                                
        </div>
        <DialogFooter>
          <Button type="submit" className="bg-[#118a00]">Нийтлэх</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
            </div>
        </div>
        </div>
        
        <div className="flex items-start gap-32 px-40">
            <JobCategory />
       
       <div> <h1 className="m-auto"><strong>Ажил хайх</strong></h1>
           <div className="flex flex-wrap my-10 gap-10">
               <Link href={"/ad-detail"} >
                        <div className="w-[550px] h-[250px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 items-start text-start py-5 px-10 shadow-xl group">
                            <div className="flex gap-3 items-center">  <img
              src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
                            <h1><strong>Green LLC</strong></h1></div>
                      
               <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
               <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
               <h1 className="  ">Нэг цагийн үнэлгээ:<p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
               <div className="flex flex-wrap gap-5 ">
               <h1><strong>Тавигдах шаардлага:</strong></h1>
              <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                   <button
                       className="pl-24"
                   >
                       <FaArrowCircleRight size={25} className="arrow hidden group-hover:block" />
                   </button>
                  
               </div></div>
              </Link>
          
              <Link href={"/ad-detail"} >
                        <div className="w-[550px] h-[250px] rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 items-start text-start py-5 px-10 shadow-xl group">
                            <div className="flex gap-3 items-center">  <img
              src="https://images.unsplash.com/photo-1729273792109-b6665f9151a8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8"
              alt=""
              className="w-[40px] h-[40px] rounded-full"
            />
                            <h1><strong>Green LLC</strong></h1></div>
                      
               <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
               <p className="text-[#a4a2a2]">Date: 3 өдрийн өмнө</p>
               <h1 className="  ">Нэг цагийн үнэлгээ:<p className="text-[#181818]"><strong>20 000₮</strong></p></h1>
               <div className="flex flex-wrap gap-5 ">
               <h1><strong>Тавигдах шаардлага:</strong></h1>
              <p className="text-[#181818]"><strong>Бакалавр</strong></p>
                  <button
                       className="pl-24"
                   >
                       <FaArrowCircleRight size={25} className="arrow hidden group-hover:block" />
                   </button>
                  
               </div></div>
              </Link>
       </div>
            </div>
        </div>
    </div>
}

export default JobAds;