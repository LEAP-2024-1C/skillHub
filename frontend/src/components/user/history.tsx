import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";


export const History = () => {
  return (
    <div className='flex flex-col gap-5 w-[70%] m-auto h-[270px] border-2 rounded-2xl border-red-100 px-[60px] py-[30px] mt-[70px] '>
       <div className='flex justify-between '>
          <h4 className='text-3xl text-[#118a00]'>Үнэлгээ</h4>
        <div className='flex text-2xl'>
         <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
        </div>
     
       </div>
       <div className='w-[200px] h-10 text-2xl '>
        {/* <input type="text" placeholder='' className='w-full h-full bg-[#f9f9f9]' /> */}
        <p  className='text-[#118a00]'>Description</p>
       </div>
       <div className='flex justify-between text-2xl'>
        <h4 className=' text-[#118a00]'>Цаг</h4>    
         <p>100k</p>
      
       
       </div>
       <div className='flex justify-end'>
         <button className="btn w-[30%] hover:bg-[#118a00] text-2xl ">Дэлгэрэнгүй</button>
       </div>

    </div>
  )
}

