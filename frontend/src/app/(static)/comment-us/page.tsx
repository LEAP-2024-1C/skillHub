"use client";

import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";

const CommentUs = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }

  return (
    <section className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] py-20 flex items-center gap-[58.5px] justify-center text-[#181818]">
      <div className="flex flex-col gap-5 w-[800px]">
        <h1 className="text-[#118a00] text-2xl mb-5">Санал хүсэлт</h1>
        <div className="">
          <div className="flex gap-5">
            <input
              type="text"
              className="grow input input-bordered "
              placeholder="Нэр"
            />
            <input
              type="email"
              className="grow input input-bordered "
              placeholder="И-мэйл"
            />
          </div>
          <input
            type="text"
            className="grow input input-bordered mt-5 w-full h-[240px] flex flex-wrap"
            placeholder="Санал хүсэлт"
          />
        </div>
        <Button className="bg-[#118a00] text-white rounded-2xl w-[120px] hover:bg-white hover:text-[#118a00] shadow-xl border-none ml-auto mt-5">
          <Link href="/comment-us">
            <p className="">Илгээх</p>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CommentUs;
