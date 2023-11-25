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
import { useTranslation } from "react-i18next";
import Dashboard from "../dashboard/Dashboard";
import AddSchoolHistory from "../dashboard/AddSchoolHistory";
import Teacher from "../teacher/Teacher";
import AddTeacher from "../dashboard/AddTeacher";
import Employee from "../employee/Employee";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="sticky top-0 z-40">
        <Navbar />
      </div>
      <div className="bg-primary p-2 text-white flex items-center">
        <p className="font-bold text-lg">{t("latest")}:</p>
        <Marquee>{t("breakingNews")}</Marquee>
      </div>
      <div className="mx-2 md:mx-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/employee" element={<Employee />} />

          <Route path="/news" element={<AllNews />} />
          <Route path="/notice" element={<AllNotice />} />
          <Route path="/event" element={<AllEvent />} />
          <Route path="/history" element={<AboutUs />} />
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

          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="add-history" element={<AddSchoolHistory />} />
            <Route path="add-teacher" element={<AddTeacher />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
