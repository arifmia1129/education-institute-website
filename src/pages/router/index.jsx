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

const Index = () => {
  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<AllNews />} />
        <Route path="/notice" element={<AllNotice />} />
        <Route path="/event" element={<AllEvent />} />
        <Route path="/about-us" element={<AboutUs />} />
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
      <Footer />
    </div>
  );
};

export default Index;
