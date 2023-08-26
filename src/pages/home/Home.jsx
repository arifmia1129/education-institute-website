import Marquee from "react-fast-marquee";
import HomeCarousel from "../../ui/HomeCarouse";
import TeacherMessage from "../../ui/TeacherMessage";
import NoticeBoard from "../../ui/NoticeBoard";
import AboutUsBanner from "../../ui/AboutUsBanner";
import Vision from "../../ui/Vision";
import Mission from "../../ui/Mission";
import Statistics from "../../ui/Statistics";

const Home = () => {
  return (
    <>
      <HomeCarousel />
      <div className="mt-5 bg-primary p-2 text-white flex items-center">
        <p className="font-bold text-lg">সর্বশেষ:</p>
        <Marquee>
          আপনার প্রতিষ্ঠানের জন্য ওয়েবসাইট তৈরি করতে যোগাযোগ করুন: 01849676331
          (Call/Whatsapp)
        </Marquee>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
        <TeacherMessage />
        <div>
          <NoticeBoard />
        </div>
      </div>
      <AboutUsBanner />
      <Vision />
      <Mission />
      <Statistics />
    </>
  );
};

export default Home;
