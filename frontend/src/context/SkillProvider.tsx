"use client";
import { apiUrl } from "@/app/utils/util";
import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

interface ISkill {
  _id: string;
  name: string;
  category: { _id: string; name: string };
}

interface IContext {
  skill: ISkill[] | [];
  setSkill: React.Dispatch<React.SetStateAction<ISkill[] | []>>;
}

export const SkillContext = createContext<IContext>({
  skill: [],
  setSkill: () => {},
});

const SkillProvider = ({ children }: { children: React.ReactNode }) => {
  const [skill, setSkill] = useState<ISkill[] | []>([]);
  const fetchSkillData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/api/v1/skill/skills`);

      if (response.status === 200) {
        setSkill(response.data.Skill);
        // console.log("USER", response.data.user);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchSkillData();
  }, []);

  console.log("Skill", skill);

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
