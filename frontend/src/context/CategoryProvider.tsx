"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ICategory {
  _id: string;
  name: string;
}

interface IContext {
  category: ICategory [] |[];
  setCategory: React.Dispatch<React.SetStateAction<ICategory [] | []>>;
}

export const CategoryContext = createContext<IContext>({
  category: [],
  setCategory: () => {},
});

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);
  const [category, setCategory] = useState<ICategory [] | []>([]);
  const fetchCategoryData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/category/categories`);

      if (response.status === 200) {
        setCategory(response.data.category);
        // console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };
  

  useEffect(() => {
    fetchCategoryData();
  }, []);
  console.log("category:", category);
  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};

export default CategoryProvider;
