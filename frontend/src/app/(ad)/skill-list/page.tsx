"use client";
import { Avatar } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { toast } from "react-toastify";
import { useCategory } from "@/context/CategoryProvider";
import { useSkill } from "@/context/SkillProvider";
import { location } from "@/app/(auth)/signup-skills/page";

const SkillList = () => {
  const { category } = useCategory();
  const { skill } = useSkill();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filteredSkills, setFilteredSkills] = useState(skill);
  const [filteredFreelancers, setFilteredFreelancers] = useState<IFreelancer[]>(
    []
  );
  const [categoryInput, setCategoryInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [locationInput, setLocationInput] = useState("");

  interface IFreelancer {
    _id: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    number: number;
    image: string;
    company: string;
    position: string;
    skills: [
      {
        skill: {
          _id: string;
          name: string;
          category: string;
        };
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

  const [allFreelancers, setAllFreelancers] = useState<IFreelancer[]>([]);

  const getAllFreelancers = async () => {
    try {
      const userToken = localStorage.getItem("token");
      if (!userToken) {
        console.log("No user token found");
        return;
      }
      const response = await axios.get(
        `${apiUrl}/api/v1/freelancer/get-all-freelancers`,
        {
          headers: { Authorization: `Bearer ${userToken}` },
        }
      );
      setAllFreelancers(response.data.freelancer);
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

  const handleCategoryChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    categoryId: string
  ) => {
    if (e.target.checked) {
      setSelectedCategories((prev) => [...prev, categoryId]);
    } else {
      setSelectedCategories((prev) => prev.filter((id) => id !== categoryId));
    }
  };
  const handleSkillChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    skillId: string
  ) => {
    if (e.target.checked) {
      setSelectedSkills((prev) => [...prev, skillId]);
    } else {
      setSelectedSkills((prev) => prev.filter((id) => id !== skillId));
    }
  };
  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    location: string
  ) => {
    if (e.target.checked) {
      setSelectedLocations((prev) => [...prev, location]);
    } else {
      setSelectedLocations((prev) => prev.filter((id) => id !== location));
    }
  };

  const filterSkillsByCategory = () => {
    if (selectedCategories.length === 0) {
      setFilteredSkills(skill);
      return;
    }

    const filtered = skill.filter((sk) =>
      selectedCategories.includes(sk.category._id)
    );
    setFilteredSkills(filtered);
  };

  const filterFreelancers = () => {
    // If no filters are selected, return all freelancers
    if (
      selectedCategories.length === 0 &&
      selectedSkills.length === 0 &&
      selectedLocations.length === 0
    ) {
      setFilteredFreelancers(allFreelancers);
      return;
    }

    const filtered = allFreelancers.filter((freelancer) => {
      const hasSelectedSkills =
        selectedSkills.length === 0 ||
        freelancer.skills.some((sk) => selectedSkills.includes(sk.skill._id));

      const isInSelectedLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(freelancer.location);

      const isInSelectedCategory =
        selectedCategories.length === 0 ||
        freelancer.skills.some((sk) =>
          selectedCategories.includes(sk.skill.category)
        );

      return hasSelectedSkills && isInSelectedLocation && isInSelectedCategory;
    });

    setFilteredFreelancers(filtered);
  };

  useEffect(() => {
    getAllFreelancers();
  }, []);

  useEffect(() => {
    if (allFreelancers.length > 0) {
      filterSkillsByCategory(); // This still runs to filter skills based on categories
      filterFreelancers(); // Call to filter freelancers based on selected categories, skills, and locations
    }
  }, [selectedCategories, selectedSkills, selectedLocations, allFreelancers]);

  // console.log("SelectedCategory", selectedCategories);
  // console.log("SelectedSkill", selectedSkills);
  // console.log("SelectedLocation", selectedLocations);

  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] flex gap-20 my-10 text-sm">
      <div className=" flex flex-col gap-3 w-[200px]">
        <div className="flex flex-col  w-[200px] gap-1">
          <h1 className="font-bold">Категори</h1>
          <Input
            className="h-[28px] my-2"
            value={categoryInput}
            onChange={(e) => setCategoryInput(e.target.value)}
          />
          {category
            .filter((cat) =>
              cat.name.toLowerCase().includes(categoryInput.toLowerCase())
            )
            .map((cat) => {
              return (
                <div
                  key={cat._id}
                  className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]"
                >
                  <input
                    type="checkbox"
                    className="checkbox-xs rounded-full mt-[2px] border-[#118a00]"
                    checked={selectedCategories.includes(cat._id)}
                    onChange={(e) => handleCategoryChange(e, cat._id)}
                  />
                  <p>{cat.name}</p>
                </div>
              );
            })}
        </div>
        <div className="flex flex-col gap-1  w-[200px] mt-10">
          <h1 className="font-bold">Ур чадвар</h1>
          <Input
            className="h-[28px] my-2"
            value={skillInput}
            onChange={(e) => setSkillInput(e.target.value)}
          />
          {filteredSkills
            .filter((sk) =>
              sk.name.toLowerCase().includes(skillInput.toLowerCase())
            )
            .map((skill) => {
              return (
                <div
                  key={skill._id}
                  className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]"
                >
                  <input
                    type="checkbox"
                    className="checkbox-xs rounded-full mt-[2px] border-[#118a00]"
                    checked={selectedSkills.includes(skill._id)}
                    onChange={(e) => handleSkillChange(e, skill._id)}
                  />
                  <p>{skill.name}</p>
                </div>
              );
            })}
        </div>
        <div className=" flex flex-col gap-3 w-[200px] mt-10">
          <div className="flex flex-col gap-1">
            <h1 className="font-bold">Байршил</h1>
            <Input
              className="h-[28px] my-2"
              value={locationInput}
              onChange={(e) => setLocationInput(e.target.value)}
            />
            {location
              .filter((loc) =>
                loc.toLowerCase().includes(locationInput.toLowerCase())
              )
              .map((loc) => {
                return (
                  <div
                    key={loc}
                    className="flex gap-2 hover:text-[#118a00] hover:border-b-[1px] py-1 hover:border-[#118a00]"
                  >
                    <input
                      type="checkbox"
                      className="checkbox-xs rounded-full mt-[2px] border-[#118a00]"
                      checked={selectedLocations.includes(loc)}
                      onChange={(e) => handleLocationChange(e, loc)}
                    />
                    <p>{loc}</p>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between gap-12 w-full">
        {/* Card-1 */}
        {filteredFreelancers?.map((freelancer) => {
          return (
            <div
              key={freelancer?._id}
              className="hover:border hover:border-[#118a00] w-[30%] h-[450px] rounded-2xl flex flex-col items-center p-6 justify-between bg-[#f9f9f9]"
            >
              <div className="flex flex-col items-center">
                <Avatar
                  style={{
                    backgroundImage: `url(${freelancer?.image})`,
                    backgroundSize: "cover",
                  }}
                  className="w-[120px] h-[120px]"
                />
                <h1 className="font-bold mt-5">{freelancer?.firstname}</h1>
                <p className="text-[#181818] mt-1">{freelancer?.company}</p>
              </div>

              <div className="flex gap-2 items-center mt-1">
                <FaStar size={14} color="#108A00" />
                <p className="text-[#181818]">4.6/5</p>
                <p className="text-[#181818]">(1)</p>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-2 mt-5 overflow-x-scroll h-[150px]">
                {freelancer?.skills.map((sk) => {
                  return (
                    <p
                      key={sk.skill._id}
                      className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]"
                    >
                      {sk.skill.name}
                    </p>
                  );
                })}
              </div>
              <p className="mt-5 text-xs text-slate-400">
                Байршил: {freelancer?.location}
              </p>
              <div>
                <button className="btn px-2 py-[1px] rounded-2xl w-[148px] bg-[#118A00] mt-3 text-white">
                  Дэлгэрэнгүй
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillList;
