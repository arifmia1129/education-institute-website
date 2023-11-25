import HomeCarousel from "../../ui/HomeCarouse";
import TeacherMessage from "../../ui/TeacherMessage";
import NoticeBoard from "../../ui/NoticeBoard";
import AboutUsBanner from "../../ui/AboutUsBanner";
import Vision from "../../ui/Vision";
import Mission from "../../ui/Mission";
import Statistics from "../../ui/Statistics";
import RightSide from "../../ui/right-side/RightSide";
import StudentDetails from "../../ui/StudentDetails";

const Home = () => {
  return (
    <>
      <HomeCarousel />

      <div className="grid grid-cols-1 md:grid-cols-2 place-content-center place-items-center">
        <TeacherMessage />
        <div>
          <NoticeBoard />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 place-content-center">
        <div className="col-span-3">
          <AboutUsBanner />
          <Mission />
          <Vision />
          <Statistics />
          <StudentDetails />
        </div>
        <div>
          <RightSide />
        </div>
      </div>
    </>
  );
};

export default Home;
