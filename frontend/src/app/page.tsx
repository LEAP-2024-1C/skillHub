import { LuPenSquare } from "react-icons/lu";
import { RiPushpinLine } from "react-icons/ri";
import { RiShieldStarLine } from "react-icons/ri";
import { IoBriefcaseOutline } from "react-icons/io5";

export default function Home() {
  return (
    <section className="  max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] ">
      <div className="flex gap-4 ">
        <a href="">Хөгжүүлэгч ба IT</a>
        <a href="">AI Servies</a>
        <a href="">Дизайн ба Бүтээлч</a>
        <a href="">Борлуулалт ба маркетинг</a>
        <a href="">Админ ба хэрэглэгчийн дэмжлэг</a>
        <a href="">Илүү</a>
      </div>
      {/* homework ehlel */}
      <div className="flex mx-auto mt auto justify-between mt-11 items-center">
        <div className="">
          <div className="font-black text-3xl ">
            ХЭРХЭН АЖИЛЛАХ ВЭ? <br />
            АЖИЛЛАХ ЁСТОЙ
          </div>
          <div className="my-3 text-slate-400">
            Хуучин дүрмийг март. Та хамгийн <br />
            сайн хүмүүстэй байж болно. Зөв одоо. Яг энд.
          </div>
          <button className="btn  w-36 h-12 bg-[#118a00] text-white">
            Эхлэх
          </button>
        </div>
        <img
          className="h-96"
          src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_scale,w_480,h_327,f_auto,q_auto,dpr_2.0/brontes/hero/searching-talent@1x.png"
          alt=""
        />
      </div>
      {/* home tugsgul */}
      <div>
        Итгэмжлэгдсэн
        <div className="flex gap-10">
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/microsoft.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/airbnb.svg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/c_fit/general/logobar/colored/bissell.svg"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-between pt-10 mt-10">
        <img
          src="https://www.upwork.com/static/ui-images/1.6.7/images/hiw-2.png"
          alt=""
        />
        <div>
          <div className="font-black text-black text-3xl">
            Ажлын тоглоомоо дээшлүүлээрэй, энэ нь амархан
          </div>
          <div className="flex gap-4 my-2">
            <LuPenSquare />
            <div>
              <div>Нэгдэх зардал байхгүй</div>
              <div className="text-slate-400">
                Бүртгүүлэх, авъяас чадварын профайлыг үзэх, төслүүдийг судлах,
                тэр ч байтугай зөвлөгөө захиалах.
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <RiPushpinLine />
            <div>
              <div>Ажлын байр зарлаж, шилдэг авьяастныг ажилд авна</div>
              <div className="text-slate-400">
                Авьяас чадварыг олох нь ажил биш байх ёстой. Ажлын байрыг
                нийтэл, эс бөгөөс бид болно чамайг хай!
              </div>
            </div>
          </div>
          <div className="flex gap-4 my-2">
            <RiShieldStarLine />
            <div>
              <div>Шилдэг хүмүүстэй хамтран ажиллана уу</div>
              <div>
                Upwork нь таны ажлыг дээшлүүлж, давуу талыг ашиглах боломжтой
                болгодог гүйлгээний хувь хэмжээ бага.
              </div>
            </div>
          </div>
          {/* button  */}
          <div className="flex gap-4 mt-4">
            <button className="btn bg-[#118a00] text-white w-36 h-12">
              Үнэгүй бүртгүүлнэ үү
            </button>
            <button className="btn bg-[#118a00] text-white w-36 h-12">
              Ажилд авахдаа халуун сур
            </button>
          </div>
        </div>
      </div>
      {/* browse ehlel */}
      <div>
        <div className="font-black text-xl bg-[#f9f9f9]  mt-16">
          Авьяас чадварыг ангиллаар нь хар
        </div>
        <div>
          ажил хайж байна уу? <a href="">Ажил хайх</a>
        </div>
        {/* boxes */}
        <div className="grid grid-cols-4 gap-8 mt-11 ">
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00] ">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Хөгжил ба IT
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>1953 ур чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              AI services
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>294 ур чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Design & Creative
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>984 ур чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Sales & Markting
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>392 ур чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Бичих & Орчуулах
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>505 ур чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Админ хэрэглэгч
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>801 чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Санхүү, нягтлан бодох бүртгэл
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>101 чадвар</div>
            </div>
          </div>
          <div className="bg-[#f9f9f9]  rounded-2xl flex flex-col p-10 items-center justify-center h-[120px] hover:border hover:border-[#118a00]">
            <div className="font-black text-black text-xl bg-[#f9f9f9]  text-center">
              Инженер, Архитектур
            </div>
            <div className="flex gap-4">
              <div>4.85/5</div>
              <div>201 чадвар</div>
            </div>
          </div>
        </div>
        {/* recently post start */}
        <div className="flex mt-11">Чөлөөт ажилтан болох</div>
        <div className="font-black text-3xl mt-10">
          Саяхан нийтэлсэн ажлын байрнууд
        </div>
        <div className="flex gap-4 mt-4 ">
          <button className="border-2 border-black rounded-2xl px-3 py-1">
            Хөгжүүлэгч ба IT
          </button>
          <button className="border-2 border-black rounded-2xl px-3 py-1">
            AI Servies
          </button>
          <button className="border-2 border-black rounded-2xl px-3 py-1">
            Дизайн ба Бүтээлч
          </button>
          <button className="border-2 border-black rounded-2xl px-3 py-1">
            Борлуулалт ба маркетинг
          </button>
          <button className="border-2 border-black rounded-2xl px-3 py-1">
            Админ ба хэрэглэгчийн дэмжлэг
          </button>
        </div>
        {/* recent job box start */}
        <div className="grid grid-cols-2 mt-5 ">
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between">
            <div>
              <div className="font-black text-2xl">Photographer</div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 2000$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline size={30} color="green" />
          </div>
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between  ">
            <div>
              <div className="font-black text-2xl">Videographer</div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 1000$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline size={30} color="green" />
          </div>
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between">
            <div>
              <div className="font-black text-2xl">
                Videographer, Video Editor, Photographer
              </div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 680$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline size={30} color="green" />
          </div>
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between">
            <div>
              <div className="font-black text-2xl">
                Videographer, Video Editor, Photographer
              </div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 9000$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline size={30} color="green" />
          </div>
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between">
            <div>
              <div className="font-black text-2xl">
                Videographer, Video Editor, Photographer
              </div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 1102$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline size={30} color="green" />
          </div>
          <div className="flex  border-2  w-[600px] my-8 rounded-xl bg-[#f9f9f9] p-4 justify-between">
            <div>
              <div className="font-black text-2xl">
                Videographer, Video Editor, Photographer
              </div>
              <div className="flex my-3">
                Hourly Range Intermediate Est. 9898$
              </div>
              <div className="flex gap-4">
                <button className="border-2 rounded-2xl px-3 py-1">
                  Product Photographer
                </button>
                <button className="border-2 rounded-2xl px-3 py-1">
                  Video Editing
                </button>
                <button className="border-2  rounded-2xl px-3 py-1">
                  Videography
                </button>
              </div>
            </div>
            <IoBriefcaseOutline
              size={30}
              color="green"
              //   className="border rounded-full bg-green-500"
            />
          </div>
        </div>
        {/* button slide gargadag  */}
        <button className="btn bg-[#118a00] text-white w-36 h-12 ml-[40%]">
          Бусад ажил харах
        </button>
      </div>
    </section>
  );
}
