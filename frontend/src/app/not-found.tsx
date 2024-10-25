import Link from "next/link";

const notFound = () => {
  return (
    <section className="max-w-[1280px] m-auto py-[100px] flex items-center gap-[58.5px] bg-[#ffffff] justify-center min-h-[calc(100vh-326px)]">
      <div className="w-[200px]">
        <div className="text-7xl text-[#181818] w-[200px] text-center">404</div>
        <img
          src="https://i.ibb.co/S6MwM9z/Logo-white-nobg.png"
          alt="logo"
          className="w-24 bg-[#d7ffd7] m-auto"
        />
      </div>
      <div className="pl-[120px] border-l-[1px] border-gray w-[480px]">
        <h5 className="text-xl font-semibold text-[#181818]">
          Хуудас олдсонгүй
        </h5>
        <p className="mt-5 text-[#696A75] text-lg">
          This page is unknown or does not exist the page you are looking for.
        </p>
        <Link href="/">
          <button className="mt-5 bg-[#118a00] rounded-[6px] px-4 py-[10px] text-white text-sm">
            Нүүр хуудас руу буцах
          </button>
        </Link>
      </div>
    </section>
  );
};

export default notFound;
