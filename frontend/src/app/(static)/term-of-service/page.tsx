"use client";
import { useAuth } from "@/context/AuthProvider";
import { useRouter } from "next/navigation";

const TermOfService = () => {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push("/login");
    return null;
  }
  return (
    <section className="max-w-[1280px] m-auto min-h-[calc(100vh-326px)] bg-[#ffffff] py-20 flex items-center gap-[58.5px] justify-center text-[#1818189f] text-justify">
      <div className="flex flex-col gap-5 w-[800px]">
        <h1 className="text-[#118a00] text-2xl mb-5">Үйлчилгээний нөхцөл</h1>
        <p className="indent-10">
          Skillhub.mn нь танд дараах нөхцөлийн дагуу үйлчлэх бөгөөд
          Skillhub.mn-ээр үйлчлүүлэгчид энэхүү үйлчилгээний нөхцөлийг баримтлан
          үйлчлүүлнэ.
        </p>
        <h3 className="text-[#181818] font-semibold">Бүртгэлийн зарчим</h3>
        <p className="indent-10">
          Хэрэглэгч нь Skillhub.mn-ийн үйлчилгээг хэрэглэхээр бүртгүүлэхдээ
          Skillhub.mn бүртгэлийн хуудсанд өөрийн тухай үнэн зөв мэдээллийг
          оруулж өгч тэдгээрийн өөрчлөлтийг цаг тухай бүрд нь хийж байх
          үүрэгтэй. Хэн нэгэн хэрэглэгчийн оруулсан шаардлагатай мэдээлэл ямар
          нэгэн байдлаар худлаа байх эсвэл бид таны мэдээллийг худлаа гэдгийг
          шалтгаантайгаар сэжиглэвэл Skillhub.mn нь тухайн хэрэглэгчийн
          бүртгэлийг хасах түүнд цаашид үйлчилгээ үзүүлэхээс татгалзах эрхтэй.
        </p>
        <h3 className="text-[#181818] font-semibold">
          Хэрэглэгчийн бүртгэлийн мэдээлэл түүний аюулгүй байдал
        </h3>
        <ol className="list-disc ml-10">
          <li>
            Та Skillhub.mn-д бүртгэл үүсгэхдээ өөрийн сонгосон давхардаагүй
            хэрэглэгчийн нэр болон нууц үгийг үүсгэнэ.
          </li>
          <li>
            Та өөрийн хэрэглэгчийн нэр нууц үгийг бүрэн хариуцах бөгөөд таны
            бүртгэлээс хийгдсэн бүхий л үйлдэлд хэрэглэгч өөрөө хариуцлага
            хүлээх болох болно.
          </li>
        </ol>
        <h3 className="text-[#181818] font-semibold">
          Хэрэглэгчийн хариуцлага
        </h3>
        <p className="indent-10">
          Хэрэглэгчийн өөрийн бичсэн бичлэг, зурвас, танилцуулга, үйлчилгээ
          ажлын байр зэрэг бүхий л хувийн болон олон нийтэд зориулсан мэдээ,
          текст, зураг, видео болон бусад зүйлс нь дан ганц тухайн хэрэглэгчийн
          хариуцлага юм. Skillhub.mn нь хэрэглэгчийн үйлдэлд ямар нэгэн
          хариуцлага хүлээхгүй бөгөөд тухайн хэрэглэгч гуравдагч этгээдэд болон
          Skillhub.mn сүлжээнд учруулсан ямар нэгэн хохирлыг зохих хууль дүрмийн
          дагуу барагдуулах үүрэгтэй. Skillhub.mn-ийн хэрэглэгч нь гуравдагч
          этгээдийн эрх ашгийг зөрчсөн үйлдэл гаргасан тохиолдолд Skillhub.mn нь
          тухайн үйлдлийг таслан зогсоох эрхтэй хэдий ч энэ нь заавал гүйцэтгэх
          үүрэг биш болно.
        </p>
        <p>Skillhub.mn хэрэглэгч, үйлчлүүлэгчдэд дараах зүйлсийг хориглоно.</p>
        <ol className="list-disc ml-10">
          <li>Улс төрийн сурталчилгаа хийх</li>
          <li>Бусдыг айлган сүрдүүлэх, нэр хүндэд халдах</li>
          <li>Ёс бус үг хэллэг хэрэглэх, бусдыг доромжлох</li>
          <li>Аллага хүчирхийллийг дэмжих</li>
          <li>Бусдын нэр хүнд хувийн нууцад халдах</li>
          <li>Ялгаварлан гадуурхах, дайрч доромжлох</li>
          <li>Хувийн болон албаны нууц баримтыг олонд дэлгэх</li>
          <li>Зохиогчийн эрх зөрчих</li>
          <li>Зөвшөөрөгдөөгүй зар сурталчилгааны зорилгоор Спам илгээх</li>
          <li>
            Бусдад хохирол үзүүлэх зорилгоор вирус болон бусад кодыг илгээх
          </li>
          <li>
            Санаатай болон санамсаргүйгээр бүхий л төрлийн хууль дүрмийг зөрчих
            зэрэгт ашиглах хориотой! Эдгээр болон хуульд харшлах бусад нөхцөлд
            Skillhub.mn нь тухайн гишүүний эрхийг хасах үйлчилгээ үзүүлэхээ
            зогсоох эрхтэй бөгөөд тухайн хэрэглэгчтэй холбоотой мэдээллийг
            хуулийн байгууллагын зүгээс шаардсан тохиолдолд холбогдох
            байгууллагад шилжүүлэх эрхтэй
          </li>
        </ol>
        <h3 className="text-[#181818] font-semibold">
          Үйлчилгээнд өөрчлөлт оруулах
        </h3>
        <p className="indent-10">
          Skillhub.mn нь үзүүлж байгаа үйлчилгээгээ бүхлээр буюу хэсэгчлэн ямар
          нэг анхааруулгатай болон анхааруулгагүйгээр өөрчлөх эрхтэй!
        </p>
        <h3 className="text-[#181818] font-semibold">
          Skillhub.mn-ний өмчлөгчийн эрх
        </h3>
        <p className="indent-10">
          Skillhub.mn веб сайтад нийтлэгдэж байгаа ажлын байрны зар нь
          Skillhub.mn-ийн өмч болно. Нийтлэгдсэн ажлын байрны зарыг
          зөвшөөрөлгүйгээр бусдад дамжуулах, хуулбарлан түгээхийг хориглоно.
        </p>
        <h3 className="text-[#181818] font-semibold">
          Бүртгэлийн мэдээллээ устгуулах
        </h3>
        <p>
          Хэрэв бүртгэлийн мэдээллээ устгуулах хүсэлтэй бол info@skillhub.mn
          и-мэйл хаягруу мэйл бичнэ үү.
        </p>
      </div>
    </section>
  );
};

export default TermOfService;
