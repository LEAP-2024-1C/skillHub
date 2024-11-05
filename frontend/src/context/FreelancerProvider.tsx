"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IFreelancer {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
  image: string;
  company: string;
  position: string;
  skills: [
    {
      skill: string;
      name: string;
      experience: number;
      ratings: [
        {
          rating: number;
          comment: string;
        }
      ];
      salaryType: string;
      startingSalary: number;
    }
  ];
  type: string;
  description: string;
  location: string;
}

interface IContext {
  freelancer: IFreelancer | null;
  setFreelancer: React.Dispatch<React.SetStateAction<IFreelancer | null>>;
}

export const FreelancerContext = createContext<IContext>({
  freelancer: null,
  setFreelancer: () => {},
});

const FreelancerProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);
  const [freelancer, setFreelancer] = useState<IFreelancer | null>(null);
  //   const [dataTrue, setDataTrue] = useState(false);
  const fetchFreelancerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/get-current-freelancer`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setFreelancer(response.data.freelancer);
        // console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchFreelancerData();
  }, []);

  return (
    <FreelancerContext.Provider value={{ freelancer, setFreelancer }}>
      {children}
    </FreelancerContext.Provider>
  );
};

export const useFreelancer = () => {
  return useContext(FreelancerContext);
};

export default FreelancerProvider;
