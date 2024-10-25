import { Avatar } from "@/components/ui/avatar";
import { FaStar } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
const SkillList = () => {
  return (
    <div className="w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] flex gap-20 mt-20">
      <div className=" flex flex-col gap-1 w-[300px]">
        <h1 className="font-bold mb-5">Салбар, мэргэжил</h1>

        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Автомашин, засвар үйлчилгээ</p>
        </div>

        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Аялал жуулчлал</p>
        </div>

        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Банк санхүү, Нягтлан бодох бүртгэл</p>
        </div>

        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118A00]" />
          <p>Барилга, инженеринг</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Боловсрол, Шинжлэх ухаан</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Гоо сайхан</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Дизайн</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118A00]" />
          <p>Маркетинг, PR</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Мэдээллийн технологи</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Харуул хамгаалалт</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Хууль эрхзүй</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Хоол үйлдвэрлэл</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Худалдаа, Борлуулалт</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#119a00]" />
          <p>Цахилгаан эрчим хүч, дулаан хангамж</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Туслах ажилтан</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Үйлчилгээ</p>
        </div>
        <div className="flex gap-5 items-center">
          <Checkbox className="border-[#118a00]" />
          <p>Үйлдвэрлэл</p>
        </div>
        <div className="flex flex-col gap-1 mt-6">
          <h1 className="font-bold mb-5">Байршил</h1>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118a00]" />
            <p>Баянгол</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118a00]" />
            <p>Баянзүрх</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118a00]" />
            <p>Хан-Уул</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118A00]" />
            <p>Чингэлтэй</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118a00]" />
            <p>Налайх</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118a00]" />
            <p>Сүхбаатар</p>
          </div>
          <div className="flex gap-5 items-center">
            <Checkbox className="border-[#118A00]" />
            <p>Сонгинохайрхан</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        {/* Card-1 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-2 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-3 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-4 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-5 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
        {/* Card-6 */}
        <div className="border border-[#118a00] w-[260px] h-[400px] rounded-xl flex flex-col items-center p-6 justify-between">
          <div>
            <Avatar
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
                backgroundSize: "cover",
              }}
              className="w-[128px] h-[128px]"
            />
            <h1 className="font-bold">Г.Сэлэнгэ</h1>
            <p className="text-[#676767]">Программист</p>
          </div>

          <div className="flex gap-2 items-center">
            <FaStar size={18} color="#108A00" />
            <p className="text-[#676767]">4.6/5</p>
            <p className="text-[#676767]">(1)</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2 mt-3">
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Front-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              Back-End
            </p>
            <p className="bg-slate-200 rounded-full px-2 text-[#676767]">
              UX UI
            </p>
          </div>
          <div>
            <button className="btn btn-success border p-2 rounded-lg w-[122px] h-[40px] bg-[#118A00] mt-5 text-white">
              Дэлгэрэнгүй
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillList;
