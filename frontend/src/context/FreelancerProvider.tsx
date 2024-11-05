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
  averageRating: number;
}

export const FreelancerContext = createContext<IContext>({
  freelancer: null,
  setFreelancer: () => {},
  averageRating: 0,
});

const FreelancerProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);
  const [freelancer, setFreelancer] = useState<IFreelancer | null>(null);
  const [averageRating, setAverageRating] = useState<number>(0);
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
        const fetchedFreelancer = response.data.freelancer;
        setAverageRating(calculateAverageRating(fetchedFreelancer.skills));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const calculateAverageRating = (ratings: { rating: number; comment: string }[]): number => {
    if (ratings.length === 0) return 0;
    const total = ratings.reduce((sum, rating) => sum + rating.rating, 0);
    return parseFloat((total / ratings.length).toFixed(1));
  };



  useEffect(() => {
    fetchFreelancerData();
  }, []);

  return (
    <FreelancerContext.Provider value={{ freelancer, setFreelancer,averageRating }}>
      {children}
    </FreelancerContext.Provider>
  );
};

export const useFreelancer = () => {
  return useContext(FreelancerContext);
};

export default FreelancerProvider;
