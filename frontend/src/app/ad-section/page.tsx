"use client";
import * as React from "react"
import { JobCategory } from "./work-category";


const JobAds = () => {
   

    return <div className="flex flex-col justify-center items-center my-10 ">
        <div className="m-auto"><h1><strong>Ажил хайх</strong></h1>
            <JobCategory /> 
        </div>
        
        <div className="flex flex-wrap my-10 gap-10">
            <div className="w-[450px] h-[450px] rounded-3xl hover:border hover:border-indigo-600  flex flex-col gap-4 text-center items-center py-10 px-5 shadow-xl">
                <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-slate-500">Date: 3 өдрийн өмнө</p>
                <h1><strong>Хийж гүйцэтгэх үүрэг</strong>
                <p>-Хариуцсан алба салбарын бараа материал, бэлэн бүтээгдэхүүний борлуулалтын бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх
-Анхан шатны тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай мэдээллээр хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг үүргийг гүйцэтгэнэ.</p>
                </h1>
                <div className="flex flex-wrap gap-5">
                    <h1 className="w-[90px] h-[80px] border border-slate-100 text-center text-slate-500">Нэг цагийн цалин: <p className="text-black"><strong>20 000₮</strong></p></h1>
                    <h1 className="w-[90px] h-[80px] border border-slate-100 text-center text-slate-500">Мэргэжлийн зэрэг: <p className="text-black"><strong>Баклавар</strong></p></h1>
                </div>
                <h1><strong>Тавигдах шаардлага:</strong></h1>
            </div>
            <div className="w-[450px] h-[450px] rounded-3xl hover:border hover:border-indigo-600  flex flex-col gap-4 text-center items-center py-10 px-5 shadow-xl">
                <h1 className="text-[20px]"><strong> Тооцооны нягтлан бодогч</strong></h1>
                <p className="text-slate-500">Date: 3 өдрийн өмнө</p>
                <h1><strong>Хийж гүйцэтгэх үүрэг</strong>
                <p>-Хариуцсан алба салбарын бараа материал, бэлэн бүтээгдэхүүний борлуулалтын бүртгэлийн хяналт хийх, үр дүнг тооцоолон дүгнэх
-Анхан шатны тооцоог үнэн зөв бүрдүүлэх, удирдлагыг шаардлагатай мэдээллээр хангах зэрэг ажлын байрны тодорхойлолтод заасан чиг үүргийг гүйцэтгэнэ.</p>
                </h1>
                <div className="flex flex-wrap gap-5">
                    <h1 className="w-[90px] h-[80px] border border-slate-100 text-center text-slate-500">Нэг цагийн цалин: <p className="text-black"><strong>20 000₮</strong></p></h1>
                    <h1 className="w-[90px] h-[80px] border border-slate-100 text-center text-slate-500">Мэргэжлийн зэрэг: <p className="text-black"><strong>Баклавар</strong></p></h1>
                </div>
                <h1><strong>Тавигдах шаардлага:</strong></h1>
            </div>
        </div>
    </div>
}

export default JobAds;