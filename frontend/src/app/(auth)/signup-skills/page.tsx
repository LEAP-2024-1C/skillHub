"use client";

import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { TiDeleteOutline } from "react-icons/ti";
import { CldUploadWidget } from "next-cloudinary";
import { useFreelancer } from "@/context/FreelancerProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSkill } from "@/context/SkillProvider";
import { toast } from "react-toastify";
import { useCategory } from "@/context/CategoryProvider";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";
import { apiUrl } from "@/app/utils/util";
import location from "@/components/location";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Textarea } from "@/components/ui/textarea";

const SignUpSkills = () => {
  const { freelancer } = useFreelancer();
  const { skill } = useSkill();
  const { category } = useCategory();
  const [activeSkillId, setActiveSkillId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState("");

  const [experience, setExperience] = useState(0); // Default experience
  const [salaryType, setSalaryType] = useState("Hourly"); // Type of salary (hourly or fixed)
  const [startingSalary, setStartingSalary] = useState(0); // Default starting salary
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
  }

  const openModal = (skillId: string) => {
    setActiveSkillId(skillId);
    // Reset to default values or fetch specific values related to the skill if needed
    setExperience(0);
    setSalaryType("Hourly");
    setStartingSalary(0);
  };
  const closeModal = () => {
    setActiveSkillId(null);
  };

  const [choosenSkills, setChoosenSkills] = useState<
    {
      skill: string;
      name: string;
      experience: number;
      startingSalary: number;
      salaryType: string;
    }[]
  >(freelancer?.skills || []);

  // const [image, setImage] = useState("");

  const addSkill = (skillId: string, skillName: string) => {
    if (!choosenSkills.some((s) => s.skill === skillId)) {
      setChoosenSkills([
        ...choosenSkills,
        {
          skill: skillId,
          name: skillName,
          experience: experience, // Use experience from the modal
          startingSalary: startingSalary, // Use startingSalary from the modal
          salaryType: salaryType,
        },
      ]);
    }
  };

  const [updatedFreelancer, setUpdateFreelancer] = useState({
    firstname: "",
    lastname: "",
    email: "",
    description: "",
    number: "",
    company: "",
    position: "",
    location: "",
    image: "",
    skills: [{ skill: "", experience: 1, startingSalary: 100000 }],
  });

  const updateFreelancerData = async () => {
    const {
      firstname,
      lastname,
      email,
      description,
      number,
      company,
      position,
      location,
      image,
    } = updatedFreelancer;

    try {
      const token = localStorage.getItem("token");
      const res = await axios.put(
        `${apiUrl}/api/v1/freelancer/update-freelancer`,
        {
          firstname,
          lastname,
          email,
          description,
          number,
          company,
          position,
          location,
          image,
          skills: choosenSkills,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (res.status === 200) {
        // console.log("res data", res.data);
        setUpdateFreelancer(res.data.freelancer);
        toast.success("Амжилттай хадгаллаа", { autoClose: 1000 });
        router.push("/freelancer");
        // console.log("success");
      }
    } catch (error) {
      console.log("failed", error);
      toast.success("Хадгалахад алдаа гарлаа");
    }
  };

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleCloseModal = () => {
    setActiveSkillId(null);
    setExperience(0); // Reset experience
    setSalaryType("Hourly"); // Reset salary type
    setStartingSalary(0); // Reset starting salary
  };

  useEffect(() => {
    if (freelancer) {
      setUpdateFreelancer({
        firstname: freelancer.firstname,
        lastname: freelancer.lastname,
        email: freelancer.email,
        description: freelancer!.description,
        number: freelancer.number,
        company: freelancer.company,
        position: freelancer.position,
        location: freelancer.location,
        image: freelancer.image,
        skills: freelancer.skills,
      });
      setChoosenSkills(freelancer.skills || []);
    }
  }, [freelancer]);

  return (
    <div className="lg:w-[1280px] lg:m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] lg:mt-20 lg:mb-20 max-sm:my-10 text-sm ">
      <h2 className="text-[#118a00] text-2xl max-sm:text-md max-sm:ml-10">
        Дэлгэрэнгүй бүртгэл
      </h2>
      <div className="flex max-sm:flex-col justify-between mt-10">
        <div className="flex lg:flex-col lg:gap-10 items-center lg:w-[23%] p-10 max-sm:gap-5">
          <Avatar className="lg:w-36 lg:h-36 bg-[#f9f9f9] max-sm:w-[40px] max-sm:h-[40px]">
            <AvatarImage
              src={freelancer?.image}
              className="lg:w-full lg:h-full object-cover max-sm:w-[40px] max-sm:h-[40px]"
            />
          </Avatar>

          <div className="relative hover:border  hover:border-[#118a00] rounded-2xl">
            <CldUploadWidget
              uploadPreset="adminskillhub"
              onSuccess={(result) => {
                const info = result.info;
                if (typeof info !== "string" && info?.secure_url) {
                  setUpdateFreelancer((prevFreelancer) => ({
                    ...prevFreelancer,
                    image: info.secure_url,
                  }));
                }
              }}
            >
              {({ open }) => {
                return (
                  <Button
                    className="px-3 py-1 bg-[#f9f9f9] lg:rounded-2xl "
                    onClick={() => open()}
                    variant="outline"
                  >
                    Upload an Image
                  </Button>
                );
              }}
            </CldUploadWidget>
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="bg-[#f9f9f9] lg:hidden">
                Edit profile
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label className="text-left">Овог</Label>
                  <Input
                    className="col-span-3"
                    value={updatedFreelancer?.lastname}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        lastname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-left">
                    Нэр
                  </Label>
                  <Input
                    id="type"
                    className="col-span-3"
                    value={updatedFreelancer?.firstname}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        firstname: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="description" className="text-right">
                    Нэмэлт мэдээлэл
                  </Label>
                  <Textarea
                    placeholder="Description "
                    className="col-span-3 w-[210px] text-sm"
                    value={updatedFreelancer?.description}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        description: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Имэйл
                  </Label>
                  <Input
                    id="email"
                    value={updatedFreelancer?.email}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        email: e.target.value,
                      });
                    }}
                    className="col-span-3 w-[210px]"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="phone" className="text-right">
                    Утасны дугаар
                  </Label>
                  <Input
                    id="phone"
                    value={updatedFreelancer?.number}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        number: e.target.value,
                      });
                    }}
                    className="col-span-3 w-[210px]"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="work" className="text-right">
                    Ажлын газар
                  </Label>
                  <select
                    className="select select-bordered join-item w-[210px] mt-2 p-2 rounded-lg text-black border border-gray-300 hover:border-[#118a00] bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#118a00]"
                    aria-label="Choose an option"
                    value={updatedFreelancer?.location}
                    onChange={(e) => {
                      setUpdateFreelancer({
                        ...updatedFreelancer,
                        location: e.target.value,
                      });
                    }}
                  >
                    <option disabled selected className="text-black">
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
              </div>
              <SheetFooter>
                <SheetClose asChild>
                  <Button type="submit">Хадгалах</Button>
                </SheetClose>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </div>
        <div className="border-[1px] rounded-2xl p-10 bg-[#f9f9f9] w-[46%] h-[700px] max-sm:hidden">
          <div className="flex gap-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Овог</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.lastname}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    lastname: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Нэр</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.firstname}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    firstname: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[100%] mt-5">
            <label className="text-slate-400">Дэлгэрэнгүй</label>
            <Textarea
              className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff] min-h-40 p-5"
              value={updatedFreelancer?.description}
              onChange={(e) => {
                setUpdateFreelancer({
                  ...updatedFreelancer,
                  description: e.target.value,
                });
              }}
            />
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">И-мэйл</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.email}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Утас</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.number}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    number: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="flex gap-5 mt-5">
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Ажлын газар</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.company}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    company: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col gap-2 w-[48%]">
              <label className="text-slate-400">Албан тушаал</label>
              <input
                type="text"
                className="hover:border h-[36px] hover:border-[#118a00] px-2 py-1 rounded-lg bg-[#ffffff]"
                value={updatedFreelancer?.position}
                onChange={(e) => {
                  setUpdateFreelancer({
                    ...updatedFreelancer,
                    position: e.target.value,
                  });
                }}
              />
            </div>
          </div>
          <div className="mt-5 w-full">
            {/* input grp ehlel */}
            <div>Байршил</div>
            <select
              className="select select-bordered join-item w-full mt-2 p-2 rounded-lg text-black border border-gray-300 hover:border-[#118a00] bg-white transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#118a00]"
              aria-label="Choose an option"
              value={updatedFreelancer?.location}
              onChange={(e) => {
                setUpdateFreelancer({
                  ...updatedFreelancer,
                  location: e.target.value,
                });
              }}
            >
              <option disabled selected className="text-black">
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
          <div className="w-full flex justify-center">
            <button
              className="btn w-36 mt-10 mx-auto bg-[#118a00] text-white rounded-2xl"
              onClick={updateFreelancerData}
            >
              Хадгалах
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:w-[28%] p-10 text-sm max-sm:items-start">
          <label>Таны ур чадварууд:</label>
          <div className="flex lg:flex-wrap max-sm:flex-col gap-3 mt-5">
            {choosenSkills.map((s, i) => (
              <div
                key={i}
                className="border-[1px] rounded-2xl px-3 py-1 border-[#118a00] text-[#118a00] flex items-center gap-2 group max-sm:w-[200px]"
              >
                <p>
                  {s.name} - ({s.experience} жил)
                </p>
                <TiDeleteOutline
                  size={15}
                  color="#118a00"
                  className="cursor-pointer"
                  onClick={() => {
                    setChoosenSkills(
                      choosenSkills.filter((_, index) => index !== i)
                    );
                  }}
                />
              </div>
            ))}
          </div>
          <label className="mt-5">Ур чадвар нэмэх:</label>
          <label className="mt-5">Категори:</label>
          <select
            className="select select-bordered join-item w-full hover:border-[#118a00] border-none bg-[#f9f9f9] max-sm:w-[240px]"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option selected>Сонгох</option>
            {category.map((cat) => {
              return (
                <option key={cat._id} value={cat.name}>
                  {cat.name}
                </option>
              );
            })}
          </select>
          <label className="mt-5">Ур чадварууд:</label>
          <div className="flex flex-wrap gap-3 mt-5">
            {skill
              ?.filter((skill) => skill.category.name === selectedCategory)
              .map((skill) => (
                <div key={skill._id}>
                  <button
                    className="border-[1px] rounded-2xl px-3 py-1 border-slate-400 text-slate-400 flex items-center gap-2"
                    onClick={() => openModal(skill._id)}
                  >
                    <p>{skill.name}</p>
                  </button>
                  {activeSkillId === skill._id && (
                    <dialog open className="modal">
                      <div className="modal-box flex flex-col gap-5">
                        <h3 className="">
                          Ур чадвар:{" "}
                          <span className="text-[#118a00] font-semibold text-sm ml-1">
                            {skill.name}!
                          </span>
                        </h3>
                        <div>
                          <p className="mb-2">Ажилласан жил:</p>
                          <input
                            type="number"
                            value={experience}
                            onChange={(e) =>
                              setExperience(Number(e.target.value))
                            }
                            placeholder="Ажилласан жил"
                            className="input input-bordered w-full "
                          />
                        </div>
                        <div>
                          <p className="mb-2">Төлбөрийн төрөл:</p>
                          <select
                            className="select select-bordered w-full "
                            value={salaryType}
                            onChange={(e) => setSalaryType(e.target.value)}
                          >
                            <option value="Hourly">цагаар</option>
                            <option value="Times">удаагаар</option>
                          </select>
                        </div>
                        <div>
                          <p className="mb-2">Эхлэх цалин:</p>
                          <input
                            type="number"
                            value={startingSalary}
                            onChange={(e) =>
                              setStartingSalary(Number(e.target.value))
                            }
                            placeholder="Эхлэх цалин"
                            className="input input-bordered w-full"
                          />
                        </div>
                        <div className="modal-action">
                          <button
                            className="btn bg-[#118a00] text-white font-normal"
                            onClick={() => {
                              addSkill(skill._id, skill.name); // Add skill to the list
                              closeModal(); // Close modal
                            }}
                          >
                            Нэмэх
                          </button>
                          <button
                            className="btn  font-normal"
                            onClick={handleCloseModal}
                          >
                            Хаах
                          </button>
                        </div>
                      </div>
                    </dialog>
                  )}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpSkills;
