"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface IEmployer {
  _id: string;
  fullnameOrCompany: string;
  type: string;
  email: string;
  password: string;
  number: string;
  image: string;
  description: string;
  company: string;
  membership: string;
  otp: string;
  passwordResetToken: string;
  passwordResetTokenExpire: Date;
  created_at: Date;
  updated_at: Date;
  location: string;
}

interface IContext {
  employer: IEmployer | null;
  setEmployer: React.Dispatch<React.SetStateAction<IEmployer | null>>;
}

export const EmployerContext = createContext<IContext>({
  employer: null,
  setEmployer: () => {},
});

const EmployerProvider = ({ children }: { children: React.ReactNode }) => {
  // const [token, setToken] = useState<string | null>(null);
  const [employer, setEmployer] = useState<IEmployer | null>(null);
  const fetchEmployerData = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        `${apiUrl}/api/v1/employer/current-employer`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setEmployer(response.data.employer);
        // console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchEmployerData();
  }, []);

  return (
    <EmployerContext.Provider value={{ employer, setEmployer }}>
      {children}
    </EmployerContext.Provider>
  );
};

export const useEmployer = () => {
  return useContext(EmployerContext);
};

export default EmployerProvider;
