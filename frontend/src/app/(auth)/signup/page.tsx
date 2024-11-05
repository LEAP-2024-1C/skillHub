"use client";
import { apiUrl } from "@/app/utils/util";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useAuth } from "@/context/AuthProvider";

const Signup = () => {
  const { role, setRole } = useAuth();
  const router = useRouter();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [emailCheck, setEmailCheck] = useState<boolean>(false);
  const [passUpper, setPassUpper] = useState<boolean>(false);
  const [passLower, setPassLower] = useState<boolean>(false);
  const [passNumber, setPassNumber] = useState<boolean>(false);
  const [passSymbol, setPassSymbol] = useState<boolean>(false);
  const [iseEyeOpen, setIsEyeOpen] = useState<boolean>(false);
  const [isCompany, setIsCompany] = useState<string>("Person");

  const handleLogin = (role: string) => {
    setRole(role);
  };

  interface IFreelancer {
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    repassword: string;
  }
  interface IEmployer {
    fullnameOrCompany: string;
    type: string;
    email: string;
    password: string;
    repassword: string;
  }

  const [freelancerData, setFreelancerData] = useState<IFreelancer>({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
  });
  const [employerData, setEmployerData] = useState<IEmployer>({
    fullnameOrCompany: "",
    type: isCompany,
    email: "",
    password: "",
    repassword: "",
  });

  const checkFreelancer = () => {
    const { email, password } = freelancerData;
    try {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setEmailCheck(true);
        setIsChecked(true);
      } else {
        setEmailCheck(false);
        setIsChecked(false);
      }

      if (!/[A-Z]/.test(password)) {
        setPassUpper(false);
        setIsChecked(false);
      } else {
        setPassUpper(true);
        setIsChecked(true);
      }

      if (!/[a-z]/.test(password)) {
        setPassLower(false);
        setIsChecked(false);
      } else {
        setPassLower(true);
        setIsChecked(true);
      }

      if (!/[0-9]/.test(password)) {
        setPassNumber(false);
        setIsChecked(false);
      } else {
        setPassNumber(true);
        setIsChecked(true);
      }

      if (!/[^A-Za-z0-9]/.test(password)) {
        setPassSymbol(false);
        setIsChecked(false);
      } else {
        setPassSymbol(true);
        setIsChecked(true);
      }
    } catch (error) {
      setIsChecked(false);
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };
  const checkEmployer = () => {
    const { email, password } = employerData;
    try {
      if (email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
        setEmailCheck(true);
        setIsChecked(true);
      } else {
        setEmailCheck(false);
        setIsChecked(false);
      }

      if (!/[A-Z]/.test(password)) {
        setPassUpper(false);
        setIsChecked(false);
      } else {
        setPassUpper(true);
        setIsChecked(true);
      }

      if (!/[a-z]/.test(password)) {
        setPassLower(false);
        setIsChecked(false);
      } else {
        setPassLower(true);
        setIsChecked(true);
      }

      if (!/[0-9]/.test(password)) {
        setPassNumber(false);
        setIsChecked(false);
      } else {
        setPassNumber(true);
        setIsChecked(true);
      }

      if (!/[^A-Za-z0-9]/.test(password)) {
        setPassSymbol(false);
        setIsChecked(false);
      } else {
        setPassSymbol(true);
        setIsChecked(true);
      }
    } catch (error) {
      setIsChecked(false);
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  const signUpFreelancer = async () => {
    const { firstname, lastname, email, password, repassword } = freelancerData;

    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/v1/freelancer/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ email, firstname, lastname, password }),
      });

      if (response.status === 201) {
        toast.success("Ажил хайгч амжилттай бүртгэгдлээ", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };
  const signUpEmployer = async () => {
    const { fullnameOrCompany, email, password, repassword } = employerData;
    if (password !== repassword) {
      toast.error("Нууц үг хоорондоо тохирохгүй байна.");
      return;
    }

    try {
      const response = await fetch(`${apiUrl}/api/v1/employer/signup`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          fullnameOrCompany,
          type: isCompany,
          password,
        }),
      });

      if (response.status === 201) {
        toast.success("Ажил олгогч амжилттай бүртгэгдлээ", { autoClose: 1000 });
        router.push("/login");
      }
    } catch (error) {
      console.error("There was an error signing up:", error);
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  useEffect(() => {
    checkFreelancer();
  }, [freelancerData]);

  useEffect(() => {
    checkEmployer();
  }, [employerData]);

  useEffect(() => {
    setEmployerData({
      fullnameOrCompany: "",
      type: isCompany,
      email: "",
      password: "",
      repassword: "",
    });
    setFreelancerData({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      repassword: "",
    });
  }, [role]);

  // const [freelancerData, setFreelancerData] = useState<IFreelancer>({
  //   firstname: "",
  //   lastname: "",
  //   email: "",
  //   password: "",
  //   repassword: "",
  // });
  // const [employerData, setEmployerData] = useState<IEmployer>({
  //   fullnameOrCompany: "",
  //   type: isCompany,
  //   email: "",
  //   password: "",
  //   repassword: "",
  // });

  return (
    <section className=" flex items-center justify-center  max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff]">
      <div className="flex flex-col items-center justify-center gap-6 w-[334px] py-20">
        <h3 className="text-2xl font-semibold">Бүртгүүлэх</h3>
        <div className="flex gap-4 text-sm">
          {role === "freelancer" ? (
            <>
              <h5
                className=" text-[#71717A]"
                onClick={() => handleLogin("employer")}
              >
                Ажил олгогч
              </h5>
              |
              <h5
                className="text-[#118a00] underline"
                onClick={() => handleLogin("freelancer")}
              >
                Ажил хайгч
              </h5>
            </>
          ) : (
            <>
              <h5
                className="text-[#118a00] underline"
                onClick={() => handleLogin("employer")}
              >
                Ажил олгогч
              </h5>
              |
              <h5
                className="text-[#71717A]"
                onClick={() => handleLogin("freelancer")}
              >
                Ажил хайх
              </h5>
            </>
          )}
        </div>
        {role === "freelancer" ? (
          <div className="flex flex-col w-full gap-4">
            <Input
              placeholder="Нэр"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={freelancerData.firstname}
              onChange={(e) =>
                setFreelancerData({
                  ...freelancerData,
                  firstname: e.target.value,
                })
              }
            ></Input>

            <Input
              placeholder="Овог"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={freelancerData.lastname}
              onChange={(e) =>
                setFreelancerData({
                  ...freelancerData,
                  lastname: e.target.value,
                })
              }
            ></Input>
            <div className="flex flex-col gap-1">
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
              {emailCheck === false ? (
                <p className="w-full rounded-[18px] px-3 py-1 text-sm text-[#E11D48]">
                  Зөв имэйл хаяг оруулна уу.
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex justify-end items-center">
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
            <Input
              type={iseEyeOpen ? "text" : "password"}
              placeholder="Нууц үг давтах"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={freelancerData.repassword}
              onChange={(e) =>
                setFreelancerData({
                  ...freelancerData,
                  repassword: e.target.value,
                })
              }
            ></Input>
            <div className=" flex flex-col gap-1">
              <p
                className={`bg-inherit border-none text-xs leading-[19px] ${
                  passUpper ? "text-[#71717A]" : "text-[#E11D48]"
                }  underline-offset-2`}
              >
                • Том үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passLower ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Жижиг үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passNumber ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тоо орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passSymbol ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тэмдэгт орсон байх
              </p>
            </div>
            {/* checkbox ehlel */}

            <div>
              <div className="form-control">
                <label className="cursor-pointer label flex gap-5">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text text-xs text-[#71717A] ">
                    Та үйлчилгээний нөхцлийг хүлээн зөвшөөрч байна уу.
                    <span className="underline text-[#118a00]">
                      Үйлчилгээний нөхцөл
                    </span>
                  </span>
                </label>
              </div>
            </div>
            {isChecked ? (
              <Button
                className="w-full rounded-[18px] px-4 py-2 bg-[#118A00] text-white"
                onClick={signUpFreelancer}
              >
                Үүсгэх
              </Button>
            ) : (
              <Button className="w-full rounded-[18px] px-4 py-2 bg-[#118A00] text-white">
                Үүсгэх
              </Button>
            )}

            <Link href="/login">
              <Button className="w-full rounded-[18px] px-4 py-2 text-[#118A00] bg-white border-[1px] border-[#118a00]">
                Нэвтрэх
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col w-full gap-4">
            <Input
              placeholder="Нэр"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={employerData.fullnameOrCompany}
              onChange={(e) =>
                setEmployerData({
                  ...employerData,
                  fullnameOrCompany: e.target.value,
                })
              }
            ></Input>
            <div className="flex w-full rounded-2xl text-sm text-[#71717A] border-[1px]">
              <>
                <p
                  className={`w-[50%] text-center py-1 ${
                    isCompany === "Person"
                      ? "bg-[#118a00] rounded-2xl text-white"
                      : null
                  }`}
                  onClick={() => setIsCompany("Person")}
                >
                  Хувь хүн
                </p>
                <p
                  className={`w-[50%] text-center py-1 ${
                    isCompany === "Company"
                      ? "bg-[#118a00] rounded-2xl text-white"
                      : null
                  }`}
                  onClick={() => setIsCompany("Company")}
                >
                  Компани
                </p>
              </>
            </div>
            <div className="flex flex-col gap-1">
              <Input
                placeholder="Имэйл хаяг"
                className="w-full rounded-[18px] px-3 py-1 text-sm"
                value={employerData.email}
                onChange={(e) =>
                  setEmployerData({
                    ...employerData,
                    email: e.target.value,
                  })
                }
              ></Input>
              {emailCheck === false ? (
                <p className="w-full rounded-[18px] px-3 py-1 text-sm text-[#E11D48]">
                  Зөв имэйл хаяг оруулна уу.
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex justify-end items-center">
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
            <Input
              type={iseEyeOpen ? "text" : "password"}
              placeholder="Нууц үг давтах"
              className="w-full rounded-[18px] px-3 py-1 text-sm"
              value={employerData.repassword}
              onChange={(e) =>
                setEmployerData({
                  ...employerData,
                  repassword: e.target.value,
                })
              }
            ></Input>
            <div className=" flex flex-col gap-1">
              <p
                className={`bg-inherit border-none text-xs leading-[19px] ${
                  passUpper ? "text-[#71717A]" : "text-[#E11D48]"
                }  underline-offset-2`}
              >
                • Том үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passLower ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Жижиг үсэг орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passNumber ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тоо орсон байх
              </p>
              <p
                className={` bg-inherit border-none text-xs leading-[19px] underline-offset-2 ${
                  passSymbol ? "text-[#71717A]" : "text-[#E11D48]"
                }`}
              >
                • Тэмдэгт орсон байх
              </p>
            </div>
            {/* checkbox ehlel */}

            <div>
              <div className="form-control">
                <label className="cursor-pointer label flex gap-5">
                  <input type="checkbox" className="checkbox checkbox-sm" />
                  <span className="label-text text-xs text-[#71717A] ">
                    Та үйлчилгээний нөхцлийг хүлээн зөвшөөрч байна уу.
                    <span className="underline text-[#118a00]">
                      Үйлчилгээний нөхцөл
                    </span>
                  </span>
                </label>
              </div>
            </div>
            {isChecked ? (
              <Button
                className="w-full rounded-[18px] px-4 py-2 bg-[#118A00] text-white"
                onClick={signUpEmployer}
              >
                Үүсгэх
              </Button>
            ) : (
              <Button className="w-full rounded-[18px] px-4 py-2 bg-[#118A00] text-white">
                Үүсгэх
              </Button>
            )}

            <Link href="/login">
              <Button className="w-full rounded-[18px] px-4 py-2 text-[#118A00] bg-white border-[1px] border-[#118a00]">
                Нэвтрэх
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Signup;
