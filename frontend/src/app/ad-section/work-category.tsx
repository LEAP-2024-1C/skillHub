"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Checked = DropdownMenuCheckboxItemProps["checked"];

export const categories = [
  {
    category: "Мэдээллийн технологи",
  },
  {
    category: "Автомашин, засвар үйлчилгээ",
  },
  {
    category: "Аялал жуулчлал",
  },
  {
    category: "Банк санхүү, эдийн засаг, даатгал",
  },
  {
    category: "Барилга, инженеринг",
  },
  {
    category: "Бизнес менежмент",
  },
  {
    category: "Боловсрол, нийгмийн ухаан",
  },
  {
    category: "Дизайн",
  },
  {
    category: "Маркетинг, PR",
  },
  {
    category: "Спорт, гоо сайхан",
  },
  {
    category: "Уул уурхай, үйлдвэрлэл",
  },
];

export const category = [
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
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false);
  return (
    <div className="flex  my-5">
      <motion.div
        animate={{
          x: [0, 10, 0, 10],
        }}
        className="flex flex-col gap-5"
      >
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col gap-5">
            <Button
              variant="outline"
              className="rounded-2xl ml-5 hover:bg-green-600 hover:text-white shadow-md hover::shadow-xl"
            >
              Салбар
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            {categories?.map((cat, idx) => (
              <DropdownMenuCheckboxItem
                key={`first ${idx}`}
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                <span>{cat.category}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col gap-5">
            <Button
              variant="outline"
              className="rounded-2xl ml-5 hover:bg-green-600 hover:text-white shadow-md hover::shadow-xl"
            >
              Байршил
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            {category?.map((cat, idx) => (
              <DropdownMenuCheckboxItem
                key={`second ${idx}`}
                checked={showStatusBar}
                onCheckedChange={setShowStatusBar}
              >
                <span>{cat.category}</span>
              </DropdownMenuCheckboxItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
};

export const CoWorker = () => {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(false);
  return (
    <div className="my-5">
      <motion.div
        animate={{
          x: [0, 10, 0, 10],
        }}
        className="flex flex-col gap-5"
      >
        {" "}
        <DropdownMenu>
          <DropdownMenuTrigger className="flex flex-col gap-5">
            {category?.map((cat, idx) => (
              <Button
                key={`third ${idx}`}
                variant="outline"
                className="rounded-2xl ml-5 hover:bg-green-600 hover:text-white shadow-md hover::shadow-xl"
              >
                {cat.category}
              </Button>
            ))}
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56">
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem
              checked={showStatusBar}
              onCheckedChange={setShowStatusBar}
            ></DropdownMenuCheckboxItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </motion.div>
    </div>
  );
};
