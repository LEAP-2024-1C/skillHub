import Link from "next/link";

const Contact = () => {
  return (
    <section className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] py-20 flex items-center gap-[58.5px] justify-center text-[#181818] text-justify">
      <div className="flex flex-col gap-5">
        <h1 className="text-[#118a00] text-2xl mb-5">Холбоо барих</h1>
        <div className="flex">
          <p className="text-[#1818189f]">Төслийн багийн гишүүд:</p>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between gap-20 ml-80 hover:text-[#118a00]">
              <p>Ц.Амаржаргал</p>
              <p>90069669</p>
            </div>
            <div className="flex justify-between gap-20 ml-80 hover:text-[#118a00]">
              <p>Г.Сэлэнгэ</p>
              <p>99250822</p>
            </div>
            <div className="flex justify-between gap-20 ml-80 hover:text-[#118a00]">
              <p>Б.Тэмүүлэн</p>
              <p>80007180</p>
            </div>
            <div className="flex justify-between gap-20 ml-80 hover:text-[#118a00]">
              <p>О.Эрдэнэжаргал</p>
              <p>88176248</p>
            </div>
            <div className="flex justify-between gap-20 ml-80 hover:text-[#118a00]">
              <p>Ц.Эрдэнэхишиг</p>
              <p>96020548</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <p className="text-[#1818189f]">Бидний хаяг:</p>
          <p>Сүхбаатар дүүрэг, ... , Гурван гол оффис</p>
        </div>
        <Link
          href={
            "https://www.google.com/maps/place/Work/@47.9143841,106.9154152,18z/data=!4m6!3m5!1s0x5d969248b9807d57:0xf9ae8f46ed2063c0!8m2!3d47.914332!4d106.9166973!16s%2Fg%2F11b6gjdd58?entry=ttu&g_ep=EgoyMDI0MTAyMS4xIKXMDSoASAFQAw%3D%3D"
          }
        >
          <img
            src="https://i.ibb.co/MZQpYyQ/map.png"
            alt="photo"
            className="w-[800px] mt-5 rounded-xl"
          />
        </Link>
      </div>
    </section>
  );
};

export default Contact;
