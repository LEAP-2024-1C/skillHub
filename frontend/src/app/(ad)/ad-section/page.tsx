"use client";
import * as React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEmployer } from "@/context/EmployerProvider";
import { useCategory } from "@/context/CategoryProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { useRouter } from "next/navigation";
import { useSkill } from "@/context/SkillProvider";
import { toast } from "react-toastify";
import { format } from "date-fns";
import { useAuth } from "@/context/AuthProvider";
import location from "@/components/location";

interface IJobRequest {
  _id: string;
  employerId: {
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
  };
  skill: {
    _id: string;
    name: string;
    category: string;
  };
  title: string;
  jobDetail: string;
  salaryType: string;
  startingPrice: string;
  createdAt: string;
  location: string;
}

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

const JobAds = () => {
  const router = useRouter();
  const { skill } = useSkill();
  const { category } = useCategory();
  const { employer } = useEmployer();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [filteredSkills, setFilteredSkills] = useState(skill);
  const [categoryInput, setCategoryInput] = useState("");
  const [skillInput, setSkillInput] = useState("");
  const [locationInput, setLocationInput] = useState("");
  const [jobData, setJobData] = useState({
    title: "",
    jobDetail: "",
    selectedSkill: "",
    salaryType: "hour",
    startingPrice: "",
    status: "active",
    location: "",
  });
  const [jobAds, setJobAds] = useState<IJobRequest[]>([]);
  // const [nameInput, setNameInput] = useState("");
  const [filteredJobAds, setFilteredJobAds] = useState<IJobRequest[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    router.push("/login");
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
    }
  };

  const showJobAds = async () => {
    try {
      const res = await axios.get(`${apiUrl}/api/v1/jobreq/get-ads`);
      setJobAds(res.data.allAds);
      console.log("job-ad", res.data.allAds);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handlePostAd = async () => {
    const {
      title,
      jobDetail,
      selectedSkill,
      salaryType,
      startingPrice,
      status,
      location,
    } = jobData;
    try {
      const res = await axios.post(`${apiUrl}/api/v1/jobreq/job-ad`, {
        employerId: employer?._id,
        title: title,
        jobDetail: jobDetail,
        selectedSkill: selectedSkill,
        salaryType: salaryType,
        startingPrice: startingPrice,
        status: status,
        location: location,
      });

      if (res.status === 201) {
        setJobData(res.data.jobrequest);
        router.push("/ad-section");
        toast.success("Амжилттай нийтэллээ");
        setJobData({
          title: "",
          jobDetail: "",
          selectedSkill: "",
          salaryType: "hour",
          startingPrice: "",
          status: "active",
          location: "",
        });
      }
    } catch (error) {
      console.error("error", error);
      toast.error("Алдаа гарлаа");
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

  const filterJobAd = () => {
    // If no filters are selected, return all freelancers
    if (
      selectedCategories.length === 0 &&
      selectedSkills.length === 0 &&
      selectedLocations.length === 0
    ) {
      setFilteredJobAds(jobAds);
      return;
    }

    const filtered = jobAds.filter((jobAd) => {
      const hasSelectedSkills =
        selectedSkills.length === 0 || selectedSkills.includes(jobAd.skill._id);

      const isInSelectedLocation =
        selectedLocations.length === 0 ||
        selectedLocations.includes(jobAd.location);

      const isInSelectedCategory =
        selectedCategories.length === 0 ||
        selectedCategories.includes(jobAd.skill.category);

      // const isInputName = jobAd.title
      //   .toLowerCase()
      //   .includes(nameInput.toLowerCase());

      return (
        hasSelectedSkills && isInSelectedLocation && isInSelectedCategory
        // isInputName
      );
    });

    setFilteredJobAds(filtered);
  };

  const handleCategoryChangeee = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  useEffect(() => {
    showJobAds();
  }, [jobData]);

  useEffect(() => {
    if (jobAds.length > 0) {
      filterSkillsByCategory();
      filterJobAd();
    }
  }, [
    selectedCategories,
    selectedSkills,
    selectedLocations,
    jobAds,
    // nameInput,
  ]);

  useEffect(() => {
    getAllFreelancers();
  }, []);

  console.log("Selected category", selectedCategories);
  console.log("Selected skill", selectedSkills);
  console.log("Selected location", selectedLocations);
  console.log("skill", skill);
  console.log("filteredskill", filteredSkills);
  console.log("jobs", jobAds);
  return (
    <div className="flex  w-[1280px] m-auto min-h-[calc(100vh-326px)]  my-20 text-sm ">
      <div className=" flex flex-col gap-3 w-[200px]">
        {/* <div className="flex flex-col  w-[200px] gap-1">
          <h1 className="font-bold">Нэр</h1>
          <Input
            className="h-[28px] my-2"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
          />
        </div> */}
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

      {/* mid */}
      <div className="flex items-start gap-10 flex-col w-full mx-20">
        {employer && (
          <div className="w-full">
            <div className="max-lg:w-full md:w-full rounded-2xl bg-[#f9f9f9] m-auto py-5 px-10">
              <div className="flex gap-5">
                <img
                  src={`${employer.image}`}
                  alt="profile"
                  className="w-[40px] h-[40px] rounded-full object-cover"
                />
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full rounded-2xl bg-[#fff]"
                    >
                      <input
                        type="text"
                        placeholder="Ажлын зар оруулах"
                        className="bg-[#fff] rounded-2xl w-full px-5"
                      />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[700px]">
                    <DialogHeader>
                      <DialogTitle className="text-[#118a00] font-normal">
                        Зар нийтлэх:
                      </DialogTitle>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="flex items-end justify-between ">
                        <div className="flex flex-col gap-4">
                          {" "}
                          <p className="w-[300px]">
                            <strong className="font-normal">Гарчиг</strong>
                          </p>
                          <Input
                            id="name"
                            placeholder="Гарчиг"
                            className="col-span-3 "
                            value={jobData.title}
                            onChange={(e) =>
                              setJobData({ ...jobData, title: e.target.value })
                            }
                          />
                        </div>
                        <div className="flex flex-col gap-4 w-[300px]">
                          {" "}
                          <p>
                            <strong className="font-normal">Төлөв</strong>
                          </p>
                          <Select
                            value={jobData.status}
                            onValueChange={(value) => {
                              setJobData((prevData) => ({
                                ...prevData,
                                status: value,
                              }));
                            }}
                          >
                            <SelectTrigger className="w-full">
                              <SelectValue placeholder="Сонгох" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectGroup>
                                <SelectLabel>Төлөв</SelectLabel>
                                <SelectItem value="active">Идэвхтэй</SelectItem>
                                <SelectItem value="passive">
                                  Идэвхгүй
                                </SelectItem>
                              </SelectGroup>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">
                            Дэлгэрэнгүй мэдээлэл
                          </strong>
                        </p>
                        <Input
                          id="description"
                          placeholder="Дэлгэрэнгүй"
                          className="h-[72px] "
                          value={jobData.jobDetail}
                          onChange={(e) =>
                            setJobData({
                              ...jobData,
                              jobDetail: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Категори</strong>
                        </p>
                        {/* <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Категори</SelectLabel>
                              {category?.map((cat, idx) => (
                                <SelectItem
                                  key={`first ${idx}`}
                                  value={cat._id}
                                >
                                  {cat.name}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select> */}
                        <select
                          className="select select-bordered join-item w-full border-[1px] border-[#ebeaea]"
                          value={selectedCategory}
                          onChange={handleCategoryChangeee}
                        >
                          <option selected>Сонгох</option>
                          {/* <option value="Автомашин">Автомашин</option> */}
                          {/* <option value="Finance">Finance</option> */}
                          {category.map((cat) => {
                            return (
                              <option key={cat._id} value={cat.name}>
                                {cat.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Ур чадвар</strong>
                        </p>

                        <Select
                          value={jobData.selectedSkill}
                          onValueChange={(value) => {
                            setJobData((prevData) => ({
                              ...prevData,
                              selectedSkill: value,
                            }));
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Ур чадвар</SelectLabel>
                              {skill
                                ?.filter(
                                  (skill) =>
                                    skill.category.name === selectedCategory
                                )
                                .map((sk) => (
                                  <SelectItem key={sk._id} value={sk._id}>
                                    {sk.name}
                                  </SelectItem>
                                ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">Байршил</strong>
                        </p>
                        {/* <Select>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Байршил</SelectLabel>
                              {location?.map((type, idx) => (
                                <SelectItem
                                  key={`third ${idx}`}
                                  value={`${idx}`}
                                >
                                  {type.category}
                                </SelectItem>
                              ))}
                            </SelectGroup>
                          </SelectContent>
                        </Select> */}
                        <select
                          className="select select-bordered join-item w-full mt-2 p-2 rounded-lg text-black border border-gray-300 bg-white transition duration-200 ease-in-out "
                          aria-label="Choose an option"
                          // value={updatedFreelancer?.location}
                          // onChange={(e) => {
                          //   setUpdateFreelancer({
                          //     ...updatedFreelancer,
                          //     location: e.target.value,
                          //   });
                          // }}
                          value={jobData?.location}
                          onChange={(e) => {
                            setJobData({
                              ...jobData,
                              location: e.target.value,
                            });
                          }}
                        >
                          <option selected className="text-black">
                            Сонгох
                          </option>
                          {location?.map((loc) => {
                            return (
                              <option key={loc} className="text-black">
                                {loc}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="w-full">
                          <strong className="font-normal">
                            Цалингийн мэдээлэл
                          </strong>
                        </p>
                        <Select
                          value={jobData.salaryType}
                          onValueChange={(value) => {
                            setJobData((prevData) => ({
                              ...prevData,
                              salaryType: value,
                            }));
                          }}
                        >
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Сонгох" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Цалин олгох төрөл</SelectLabel>
                              <SelectItem value="hour">Цагаар</SelectItem>
                              <SelectItem value="time">Удаагаар</SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <Input
                          type="text"
                          placeholder="Цалин эхлэх үнэ"
                          value={jobData.startingPrice}
                          onChange={(e) =>
                            setJobData({
                              ...jobData,
                              startingPrice: e.target.value,
                            })
                          }
                        ></Input>
                      </div>
                    </div>
                    <DialogFooter>
                      <DialogClose asChild>
                        <Button
                          type="button"
                          className="bg-[#118a00] text-white"
                          variant="secondary"
                          onClick={handlePostAd}
                        >
                          Нийтлэх
                        </Button>
                      </DialogClose>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          </div>
        )}

        <div className="w-full">
          {" "}
          <h1 className="m-auto">
            <strong className="text-[#118a00] text-xl">Ажлын зарууд</strong>
          </h1>
          <div className="flex flex-col my-10 gap-10 w-full bg-[#f9f9f9] p-10 rounded-2xl">
            {filteredJobAds?.map((ad) => (
              <Link href={`/ad-section/detail/${ad._id}`} key={ad._id}>
                <div className="w-full rounded-3xl hover:border hover:border-[#118a00]  flex flex-col gap-2 py-5 px-10 bg-white group">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <img
                        src={`${ad.employerId.image}`}
                        alt=""
                        className="w-[40px] h-[40px] rounded-full object-cover"
                      />
                      <h1>
                        <strong className="font-normal">
                          {ad.employerId.fullnameOrCompany}
                        </strong>
                      </h1>
                    </div>
                    <p className="text-slate-400">
                      {" "}
                      {ad.createdAt
                        ? format(new Date(ad.createdAt), "yyyy-MM-dd")
                        : ""}
                    </p>
                  </div>

                  <h1 className="text-xl mt-2">
                    <strong className="font-normal">{ad.title}</strong>
                  </h1>
                  <div className="flex gap-2 flex-wrap mt-2 px-10">
                    <p className="bg-white rounded-full px-2 py-1 text-[#108a00] border-[1px] border-[#108a00]">
                      {ad.skill.name}
                    </p>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    {ad.salaryType === "time" ? (
                      <p className="">
                        Эхлэх цалин: {ad.startingPrice}₮ /удаагаар/
                      </p>
                    ) : (
                      <p className="">
                        Эхлэх цалин: {ad.startingPrice}₮ /цагаар/
                      </p>
                    )}

                    <button className="w-10">
                      <FaArrowCircleRight
                        size={25}
                        className="arrow hidden group-hover:block"
                      />
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-[400px] ">
        <h1 className="font-bold mb-5">Шилдгүүд</h1>
        <div className="flex flex-col gap-5">
          {allFreelancers.slice(0, 5).map((freelancer) => {
            return (
              <Link
                key={freelancer._id}
                href={`/skill-list/detail/${freelancer._id}`}
              >
                <div className="rounded-2xl p-2 flex flex-col gap-2 border-[1px] w-full  hover:border hover:border-[#118a00]">
                  <div className="flex items-center gap-3">
                    <img
                      src={`${freelancer.image}`}
                      alt="profile"
                      className="h-8 w-8 rounded-full object-cover"
                    />
                    <p>{freelancer.firstname}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {freelancer.skills.slice(0, 1).map((sk) => {
                      return (
                        <p
                          key={sk.skill._id}
                          className="bg-[#f9f9f9] px-2 py-1 rounded-2xl border-[1px] border-[#f9f9f9]"
                        >
                          {sk.skill.name} (4.5)
                        </p>
                      );
                    })}
                    <p className="mx-auto">...</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default JobAds;
