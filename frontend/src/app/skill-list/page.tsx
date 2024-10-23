import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { FaStar } from "react-icons/fa";
const SkillList = () => {
  return (
    <div className="border border-green-600 w-[260px] h-[400px] rounded-xl ml-2 p-11">
      <Avatar
        style={{
          backgroundImage: `url(https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMG1hZ2V8ZW58MHx8MHx8fDA%3D)`,
          backgroundSize: "cover",
        }}
        className="w-[128px] h-[128px]"
      />
      <h1>Г.Сэлэнгэ</h1>
      <p>Программист</p>
      <div className="flex gap-2 items-center">
        <FaStar size={18} color="#108A00" />
        <p>4.6/5</p>
        <p>(1 ажил)</p>
      </div>
      <Button color="108A00" className="text-white border">
        Дэлгэрэнгүй
      </Button>
    </div>
  );
};

export default SkillList;
