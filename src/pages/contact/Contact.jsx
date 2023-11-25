import contactImg from "../../assets/contact.png";
import { FaLocationDot } from "react-icons/fa6";
import { IoCallSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Contact() {
  return (
    <div className="flex justify-center ">
      <div className="border-2 border-primary w-fit my-10 rounded-xl py-5 px-2 md:px-10 md:py-20">
        <img className="w-full lg:w-[40vw]" src={contactImg} alt="" />
        <div className="flex items-center my-2">
          <FaLocationDot size={30} />
          <p>
            <span className="font-bold ml-2">Location:</span> Kulaghat,
            Lalmonirhat Sardar, Lalmonirhat
          </p>
        </div>
        <div className="flex items-center my-2">
          <IoCallSharp size={30} />
          <p>
            <span className="font-bold ml-2">Call:</span> 01713-773137
          </p>
        </div>
        <div className="flex items-center my-2">
          <MdEmail size={30} />
          <p>
            <span className="font-bold ml-2">Email:</span>{" "}
            kulaghathighschool.1966@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
}
