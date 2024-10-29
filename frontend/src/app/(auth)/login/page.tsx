"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import axios from "axios";
import { apiUrl } from "@/app/utils/util";
import { toast } from "react-toastify";
import Link from "next/link";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "@/context/AuthProvider";

const Login = () => {
  const { role } = useAuth();
  const router = useRouter();
  const [iseEyeOpen, setIsEyeOpen] = useState<boolean>(false);

  interface IUser {
    email: string;
    password: string;
  }

  const [userData, setUserData] = useState<IUser>({
    email: "",
    password: "",
  });

  const login = async () => {
    const { email, password } = userData;

    try {
      const response = await axios.post(`${apiUrl}/api/v1/auth/login`, {
        email,
        password,
      });

      if (response.status === 200) {
        toast.success("Хэрэглэгч амжилттай нэвтэрлээ", { autoClose: 1000 });
        const { token } = response.data;
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error) {
      console.error("There was an error signing in:", error);
      toast.error("Нэвтрэх нэр эсвэл нууц үг буруу байна.");
    }
  };

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
                role === "freelancer" ? "text-[#118a00]" : "text-[#71717A]"
              } underline`}
            >
              Хувь хүн
            </h5>
            |
            <h5
              className={` ${
                role === "employer" ? "text-[#118a00]" : "text-[#71717A]"
              } underline`}
            >
              Компани
            </h5>
          </div>
          <div className="flex flex-col w-full gap-4">
            <Input
              placeholder="Имэйл хаяг"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            ></Input>
            <div className="flex justify-end items-center">
              <Input
                type={iseEyeOpen ? "text" : "password"}
                placeholder="Нууц үг"
                className="w-full rounded-[18px] px-3 py-1 text-sm"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              ></Input>
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
            <Button
              className="w-full rounded-[18px] px-4 py-2 bg-[#118a00] text-white"
              onClick={login}
            >
              Нэвтрэх
            </Button>
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
