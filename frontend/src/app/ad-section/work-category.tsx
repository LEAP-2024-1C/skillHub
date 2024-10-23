"use client";

import * as React from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type Checked = DropdownMenuCheckboxItemProps["checked"]


export const categories = [
    {
        category: "Салбар",
        type:"Мэдээллийн технологи",
    },
    {
        category: "Ажлын байрны түвшин",
        
    }, {
        category: "Цалин",
        
    }, {
        category:"Байршил",
    }, {
        category:"Нийтлэгдсэн хугацаа",
    },
]

export const category = [
    {
        category: "Салбар",
        type:"Мэдээллийн технологи",
    },
    {
        category: "Ажлын байрны түвшин",
        
    }, {
        category: "Цалин",
        
    }, {
        category:"Байршил",
    },
     {
        category:"Нас",
    },
    {
        category:"Туршлага",
    },
    {
        category:"Нийтлэгдсэн хугацаа",
    },
]
 export const JobCategory = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false)
    return (<div className="my-5">
        <motion.div animate={{
         x: [0, 10, 0, 10],
        }}>  <DropdownMenu>
        <DropdownMenuTrigger >
            {categories?.map((cat) => <Button variant="outline" className="rounded-2xl ml-5 hover:bg-indigo-600 hover:text-white shadow-md hover::shadow-xl" >{ cat.category}</Button>)}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
   
          </DropdownMenuCheckboxItem>
                      
        </DropdownMenuContent>
        </DropdownMenu></motion.div>
       
    </div>)
}

export const CoWorker = () => {
    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false)
    return (
        <div className="my-5">
        <motion.div animate={{
         x: [0, 10, 0, 10],
        }}>  <DropdownMenu>
        <DropdownMenuTrigger >
            {category?.map((cat) => <Button variant="outline" className="rounded-2xl ml-5 hover:bg-indigo-600 hover:text-white shadow-md hover::shadow-xl" >{ cat.category}</Button>)}
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem
            checked={showStatusBar}
            onCheckedChange={setShowStatusBar}
          >
   
          </DropdownMenuCheckboxItem>
                      
        </DropdownMenuContent>
        </DropdownMenu></motion.div>
      </div>
    )
}
