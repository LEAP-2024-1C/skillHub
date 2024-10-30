import React from 'react'
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

export const Skills = () => {
  return (
    <div className='w-[80%] m-auto rounded-xl border-2 border-[#f9f9f9] mt-[70px]'>
      <div className="overflow-x-auto">
  <table className="table text-2xl ">
    <thead className='text-2xl text-[#118a00] '>
      <tr>
        <th>Ур чадвар</th>
        <th>Туршлага</th>
        <th>Цаг</th>
        <th>Үнэлгээ</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Чадвар</td>
        <td>3 жил</td>
        <td>100 цаг</td>
        <td className='flex'><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></td>
      </tr>
      
      <tr className="hover">
        
        <td>Чадвар</td>
        <td>2 жил</td>
        <td>70 цаг</td>
        <td className="flex"><FaStar /><FaStar /><FaStar /><CiStar /><CiStar /></td>

      </tr>
      {/* row 3 */}
      <tr>
        
      <td>Чадвар</td>
        <td>1 жил</td>
        <td>40 цаг</td>
        <td className="flex"><FaStar /><FaStar /><CiStar /><CiStar /><CiStar /></td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

