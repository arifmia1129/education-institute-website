import { Route, Routes } from "react-router-dom";
import Navbar from "../../ui/shared/Navbar";
import Footer from "../../ui/shared/Footer";
import Home from "../home/Home";
import NotFound from "../../ui/shared/NotFound";
import AllNotice from "../../ui/AllNotice";
import AboutUs from "../about/About";
import AllEvent from "../../ui/AllEvent";
import Academic from "../academic/Academic";
import Routine from "../academic/Routine";
import Result from "../academic/Result";
import AllNews from "../../ui/AllNews";
import HeadTeachers from "../admin-office/HeadTeachers";
import AdminOffice from "../admin-office/AdminOffice";
import AssistanceTeachers from "../admin-office/AssistanceTeachers";
import ManagingMembers from "../admin-office/ManagingMembers";
import AdminLogin from "../authentication/Login";
import Admission from "../admission/Admission";
import Marquee from "react-fast-marquee";

const Index = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="bg-primary p-2 text-white flex items-center">
        <p className="font-bold text-lg">সর্বশেষ:</p>
        <Marquee>
          প্রিয় শুভাকাঙ্খি, কুলাঘাট উচ্চ বিদ্যালয় এর ওয়েবসাইটের কাজ চলমান। খুব
          শীঘ্রই সম্পূর্ন ওয়েবসাইটের পাবলিশ করা হবে।
        </Marquee>
      </div>
      <div className="mx-2 md:mx-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/news" element={<AllNews />} />
          <Route path="/notice" element={<AllNotice />} />
          <Route path="/event" element={<AllEvent />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/academic" element={<Academic />}>
            <Route path="routine" element={<Routine />} />
            <Route path="result" element={<Result />} />
          </Route>
          <Route path="/office" element={<AdminOffice />}>
            <Route path="head-teacher" element={<HeadTeachers />} />
            <Route path="assistance-teacher" element={<AssistanceTeachers />} />
            <Route path="managing-member" element={<ManagingMembers />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
