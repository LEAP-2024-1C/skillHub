"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "@/context/AuthProvider";

const Login = () => {
  const { role, setRole } = useAuth();
  const router = useRouter();
  const [iseEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  const handleLogin = (role: string) => {
    setRole(role);
  };

  interface IEmployer {
    email: string;
    password: string;
  }
  interface IFreelancer {
    email: string;
    password: string;
  }

  const [employerData, setEmployerData] = useState<IEmployer>({
    email: "",
    password: "",
  });
  const [freelancerData, setFreelancerData] = useState<IFreelancer>({
    email: "",
    password: "",
  });

  const loginEmployer = async () => {
    const { email, password } = employerData;

    try {
      const response = await axios.post(`${apiUrl}/api/v1/employer/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Хэрэглэгч амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/signup-skill-employer");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };
  const loginFreelancer = async () => {
    const { email, password } = freelancerData;

    try {
      const response = await axios.post(`${apiUrl}/api/v1/freelancer/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Хэрэглэгч амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/signup-skills");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

  // useEffect(() => {
  //   loginEmployer(), loginFreelancer;
  // }, [role]);

  useEffect(() => {
    setEmployerData({ email: "", password: "" });
    setFreelancerData({ email: "", password: "" });
  }, [role]);

  return (
    <section className=" flex items-center max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] text-sm ">
      <div className="flex items-center justify-center m-auto">
        {" "}
        <div className="flex flex-col items-center justify-center gap-6 w-[334px]">
          <h3 className="text-2xl font-semibold flex flex-col items-center ">
            Нэвтрэх
          </h3>
          <div className="flex gap-4">
            <h5
              className={` ${
                role === "employer"
                  ? "text-[#118a00] underline"
                  : "text-[#71717A]"
              } `}
              onClick={() => handleLogin("employer")}
            >
              Ажил олгогч
            </h5>
            |
            <h5
              className={` ${
                role === "freelancer"
                  ? "text-[#118a00] underline"
                  : "text-[#71717A]"
              } `}
              onClick={() => handleLogin("freelancer")}
            >
              Ажил хайгч
            </h5>
          </div>
          <div className="flex flex-col w-full gap-4">
            {role === "employer" ? (
              <Input
                placeholder="Имэйл хаяг"
                className="w-full rounded-[18px] px-3 py-1 text-sm"
                value={employerData.email}
                onChange={(e) =>
                  setEmployerData({ ...employerData, email: e.target.value })
                }
              ></Input>
            ) : (
              <Input
                placeholder="Имэйл хаяг"
                className="w-full rounded-[18px] px-3 py-1 text-sm"
                value={freelancerData.email}
                onChange={(e) =>
                  setFreelancerData({
                    ...freelancerData,
                    email: e.target.value,
                  })
                }
              ></Input>
            )}
            <div className="flex justify-end items-center">
              {role === "employer" ? (
                <Input
                  type={iseEyeOpen ? "text" : "password"}
                  placeholder="Нууц үг"
                  className="w-full rounded-[18px] px-3 py-1 text-sm"
                  value={employerData.password}
                  onChange={(e) =>
                    setEmployerData({
                      ...employerData,
                      password: e.target.value,
                    })
                  }
                ></Input>
              ) : (
                <Input
                  type={iseEyeOpen ? "text" : "password"}
                  placeholder="Нууц үг"
                  className="w-full rounded-[18px] px-3 py-1 text-sm"
                  value={freelancerData.password}
                  onChange={(e) =>
                    setFreelancerData({
                      ...freelancerData,
                      password: e.target.value,
                    })
                  }
                ></Input>
              )}
              {iseEyeOpen ? (
                <FaRegEyeSlash
                  className="flex absolute mr-5"
                  color="gray"
                  onClick={() => setIsEyeOpen(false)}
                />
              ) : (
                <FaRegEye
                  className="flex absolute mr-5"
                  color="gray"
                  onClick={() => setIsEyeOpen(true)}
                />
              )}
            </div>
            {role === "employer" ? (
              <Button
                className="w-full rounded-[18px] px-4 py-2 bg-[#118a00] text-white"
                onClick={loginEmployer}
              >
                Нэвтрэх
              </Button>
            ) : (
              <Button
                className="w-full rounded-[18px] px-4 py-2 bg-[#118a00] text-white"
                onClick={loginFreelancer}
              >
                Нэвтрэх
              </Button>
            )}
            <Link href="/forgetpass/email" className="m-auto w-1/2">
              <Button className="w-full m-auto bg-inherit border-none text-sm text-[#71717A] rounded-2xl shadow-none">
                Нууц үг мартсан
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="w-full rounded-[18px] px-4 py-2 text-[#118a00] bg-white border-[1px] border-[#118a00] ">
                Бүртгүүлэх
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
