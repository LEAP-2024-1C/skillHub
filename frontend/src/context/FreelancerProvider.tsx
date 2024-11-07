"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ISkill {
  skill: string;
  name: string;
  experience: number;
  ratings?: [
    {
      rating: number;
      comment: string;
    }
  ];
  salaryType: string;
  startingSalary: number;
}

export interface IFreelancer {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  number: string;
  image: string;
  company: string;
  position: string;
  skills: ISkill[];
  type: string;
  description: string;
  location: string;
}

interface IContext {
  freelancer: IFreelancer | null;
  setFreelancer: React.Dispatch<React.SetStateAction<IFreelancer | null>>;
  fetchFreelancerData: () => void;
}

export const FreelancerContext = createContext<IContext>({
  freelancer: null,
  setFreelancer: () => {},
  fetchFreelancerData: () => {},
});

const FreelancerProvider = ({ children }: { children: React.ReactNode }) => {
  const [freelancer, setFreelancer] = useState<IFreelancer | null>(null);
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
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchFreelancerData();
  }, []);

  return (
    <FreelancerContext.Provider
      value={{ freelancer, setFreelancer, fetchFreelancerData }}
    >
      {children}
    </FreelancerContext.Provider>
  );
};

export const useFreelancer = () => {
  return useContext(FreelancerContext);
};

export default FreelancerProvider;
