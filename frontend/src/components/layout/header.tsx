import { Button } from "@/components/ui/button"
import Link from "next/link"
import { IoIosArrowDown } from "react-icons/io";



export const Header = () => {
    return (
        <header className="flex justify-between mx-10 my-3">
            <div className="flex gap-4 items-center">
                <Link href={"/home"}><h1 className="text-[24px] font-sans text-[#118a00] "><strong>SkillHub</strong></h1></Link>
                <Link href={"/ad-section"}><h1 className="flex items-center gap-2 hover:text-[#118a00]"><strong>Find Jobs </strong><IoIosArrowDown size={12} className="icon" /></h1></Link>
                <Link href={"/hirecoworker"}> <h1 className="flex items-center gap-2 hover:text-[#118a00]"><strong>Hire Freelancer </strong><IoIosArrowDown size={12} className="icon"/></h1></Link>
               
            </div>
            <div className="flex gap-3">
            <Button className="bg-[#118a00] text-[#fff] rounded-2xl w-[100px] hover:bg-[#fff] hover:border hover:border-[#118a00] hover:text-[#118a00] shadow-xl" >
  <Link href="/login"><strong>Нэвтрэх</strong></Link>
                </Button>
                <Button className="bg-[#fff] border border-[#118a00] text-[#118a00] rounded-2xl w-[100px] hover:bg-[#118a00] hover:text-[#fff] shadow-xl" >
  <Link href="/login"><strong>Бүртгүүлэх</strong></Link>
</Button>
            </div>
        </header>
    )
}