"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

import axios from "axios";
import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";
import { toast } from "react-toastify";
import MoonLoader from "react-spinners/ClipLoader";

const Email = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [countDown, setCountDown] = useState(60);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const handleEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSendOtp = async () => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/auth/forget-password",
        { email }
      );
      if (res.status === 200) {
        setStep(step + 1);
        toast.success("Otp code таны имэйл хаяг руу явууллаа.");
      }
    } catch (error) {
      toast.error("Имэйл илгээхэд алдаа гарлаа");
    }
    // router.push("/forgetpass/otp");
  };

  const handleConfirmOtp = async (value: string) => {
    setOtpValue(value);
    if (value.length === 4) {
      //   router.push("/forgetpass/newpass");
      try {
        const res = await axios.post(
          "http://localhost:8000/api/v1/auth/verify-otp",
          { email, otpValue: value }
        );
        if (res.status === 200) {
          toast.success(
            "Нууц үг сэргээх холбоосыг таны имэйл хаяг руу явууллаа."
          );
          router.push("/login");
        }
      } catch (error) {
        console.log("otp", error);
        toast.error("Имэйл илгээхэд алдаа гарлаа");
      }
    }
  };

  const handleResendOtp = () => {
    setCountDown(60);
    handleSendOtp();
    setStep(1);
  };

  useEffect(() => {
    if (countDown > 0) {
      const countdown = setInterval(() => {
        setCountDown((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(countdown);
    }
  }, [countDown]);

  return (
    <div className="h-[calc(100vh-363px)] flex flex-col items-center  max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] text-sm ">
      <div className="w-[320px] mt-24">
        {step === 1 && (
          <>
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <MoonLoader color={"#000000"} loading={loading} size={100} />
              </div>
            ) : (
              <>
                <h1 className="text-2xl font-semibold mb-8 text-center">
                  Нууц үг сэргээх
                </h1>
                <div className="flex flex-col gap-4 text-sm">
                  <Input
                    type="email"
                    placeholder="Имэйл хаяг оруулах"
                    className="input-primary"
                    onChange={handleEmail}
                  />
                  <Button className="button-primary" onClick={handleSendOtp}>
                    Илгээх
                  </Button>
                </div>
              </>
            )}
          </>
        )}
        {step === 2 && (
          <>
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <MoonLoader color={"#000000"} loading={loading} size={100} />
              </div>
            ) : (
              <div className="h-[calc(100vh-350px)] flex flex-col items-center mt-24">
                <MdOutlineMarkEmailUnread />
                <h1 className="mt-7 text-2xl font-bold">Баталгаажуулах</h1>
                <p className="mt-2 mb-6 text-text-primary text-center">
                  {`“${email}” хаягт илгээсэн баталгаажуулах кодыг оруулна уу`}
                </p>
                <div className="flex flex-col gap-4 text-sm">
                  <InputOTP
                    maxLength={4}
                    value={otpValue}
                    onChange={handleConfirmOtp}
                  >
                    <InputOTPGroup className="bg-white">
                      <InputOTPSlot className="w-14 h-14" index={0} />
                      <InputOTPSlot className="w-14 h-14" index={1} />
                      <InputOTPSlot className="w-14 h-14" index={2} />
                      <InputOTPSlot className="w-14 h-14" index={3} />
                    </InputOTPGroup>
                  </InputOTP>
                  <Button
                    className="cursor-pointer text-muted-foreground mt-12 underline text-sm font-medium"
                    onClick={handleResendOtp}
                    variant="link"
                  >
                    Дахин илгээх ({countDown})
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Email;
