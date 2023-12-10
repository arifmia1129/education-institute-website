import { BsArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function AllButton() {
  const buttons = [
    {
      id: 1,
      title: "স্বাধীনতার সুবর্ণজয়ন্তী কর্ণার",
      src: "/",
    },
    {
      id: 2,
      title: "ক্লাস রুটিন",
      src: "/teaching",
    },
    {
      id: 3,
      title: "সিলেবাস",
      src: "/teaching",
    },
    {
      id: 4,
      title: "পরীক্ষার রুটিন",
      src: "/exam-info",
    },
    {
      id: 5,
      title: "রেজাল্ট",
      src: "/",
    },
  ];

  return (
    <>
      {buttons?.map((button) => (
        <Link key={button.id} to={button?.src}>
          <div className="w-full bg-primary text-white py-3 px-5 rounded border-l-8 border-l-red-500 flex justify-between mb-1">
            <h1 className="font-bold">{button.title}</h1>
            <BsArrowRightCircleFill size={30} />
          </div>
        </Link>
      ))}
    </>
  );
}
