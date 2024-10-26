"use client";

import * as React from "react";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export const category = [
  {
      type:"Автомашин, засвар үйлчилгээ"
  }, {
      type:"Банк санхүү, Нягтлан бодох бүртгэл"
  },{
      type:"Барилга, инженеринг"
  },{
      type:"Боловсрол, Шинжлэх ухаан"
  },{
      type:"Гоо сайхан"
  },{
      type:"Дизайн"
  },{
      type:"Маркетинг, PR"
  },{
      type:"Мэдээллийн технологи"
  },{
      type:"Харуул хамгаалалт"
  },{
      type:"Эрх зүй"
  },{
      type:"Хоол үйлдвэрлэл"
  },{
      type:"Худалдаа, Борлуулалт"
  },{
      type:"Цахилгаан эрчим хүч, дулаан хангамж"
  },{
      type:"Туслах ажилтан"
  },{
      type:"Үйлчилгээ"
  },{
      type:"Үйлдвэрлэл"
  },
]

export const location = [
  {
    category: "Баянзүрх",
  },
  {
    category: "Баянгол",
  },
  {
    category: "Хан-Уул",
  },
  {
    category: "Чингэлтэй",
  },
  {
    category: "Налайх",
  },
  {
    category: "Сүхбаатар",
  },
  {
    category: "Сонгинохайрхан",
  },
];
export const JobCategory = () => {
 
  return (
    <div className="flex">
      <motion.div
        animate={{
          x: [0, 10, 0, 10],
        }}
        className="flex flex-col gap-5"
      >
        {" "}
        <div className=" flex flex-col gap-3 w-[360px]">
            <div className="flex flex-col gap-1">
                <h1 className="font-bold">Категори</h1>
                <Input className="h-[28px] my-2" />
                {category?.map((type)=> <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
                    <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
                    <p>{ type.type}</p>
                </div>) }
            </div>
            <div className=" flex flex-col gap-3 w-[200px] mt-10">
                <div className="flex flex-col gap-1">
                    <h1 className="font-bold">Байршил</h1>
                    <Input className="h-[28px] my-2" />

                    {location?.map((type)=> <div className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]">
                        <Checkbox className=" checkbox-xs rounded-full mt-[2px] border-[#118a00]" />
                        <p>{ type.category}</p>
                    </div>)}
                   
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};


