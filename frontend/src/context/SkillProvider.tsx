"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ISkill {
  _id: string;
  name: string;
}

interface IContext {
  skill: ISkill | null;
  setSkill: React.Dispatch<React.SetStateAction<ISkill | null>>;
}

export const SkillContext = createContext<IContext>({
  skill: null,
  setSkill: () => {},
});

const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [skill, setSkill] = useState<ISkill | null>(null);
  const fetchSkillData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/skill/skills`);

      if (response.status === 200) {
        setSkill(response.data.category);
        // console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchSkillData();
  }, []);

  return (
    <SkillContext.Provider value={{ skill, setSkill }}>
      {children}
    </SkillContext.Provider>
  );
};

export const useSkill = () => {
  return useContext(SkillContext);
};

export default SkillProvider;
