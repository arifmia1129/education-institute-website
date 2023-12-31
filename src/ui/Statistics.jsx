import establishedImg from "../assets/icons/establishment.png";
import teachersImg from "../assets/icons/teacher.png";
import currentStudentImg from "../assets/icons/students.png";
import graduateStudentImg from "../assets/icons/student.png";
import classRoomImg from "../assets/icons/classroom.png";
import fieldImg from "../assets/icons/field.png";
import presentImg from "../assets/icons/present.png";
import resultImg from "../assets/icons/result.png";
import gpa5Img from "../assets/icons/gpa5.png";
import { useEffect, useState } from "react";
import api from "../utils/axios.config";

const Statistics = () => {
  const [info, setInfo] = useState(null);

  const handleGetInfo = async () => {
    const { data } = await api.get("statistic");

    if (data.success) {
      setInfo(data.data);
    }
  };

  useEffect(() => {
    handleGetInfo();
  }, []);

  const {
    establishedYear,
    field,
    gpaFivePercentage,
    passedTotalStudent,
    studentPresentPercentage,
    totalClass,
    totalStudent,
    totalTeacher,
  } = info || {};

  return (
    <div className=" my-10 ">
      <div className="w-full bg-primary text-white py-2 px-5 rounded border-l-4 border-l-red-500">
        <h1 className="text-xl font-bold">Statistic</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center">
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={establishedImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">{establishedYear}</h1>
          <h1 className="text-xl font-semibold text-center">প্রতিষ্ঠাকাল</h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={teachersImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">{totalTeacher}</h1>
          <h1 className="text-xl font-semibold text-center">শিক্ষকমন্ডলী</h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={currentStudentImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">{totalStudent}</h1>
          <h1 className="text-xl font-semibold text-center">
            বর্তমান শিক্ষার্থী
          </h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={graduateStudentImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            {studentPresentPercentage}
          </h1>
          <h1 className="text-xl font-semibold text-center">
            পূর্বের পাসকৃত শিক্ষার্থী
          </h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={classRoomImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">{totalClass}</h1>
          <h1 className="text-xl font-semibold text-center">শ্রেণি কক্ষ</h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={fieldImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">{field}</h1>
          <h1 className="text-xl font-semibold text-center">খেলার মাঠ</h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={presentImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            {studentPresentPercentage}
          </h1>
          <h1 className="text-xl font-semibold text-center">
            শিক্ষার্থী উপস্থিতির হার
          </h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={resultImg} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            {passedTotalStudent}
          </h1>
          <h1 className="text-xl font-semibold text-center">
            শিক্ষার্থী পাসের হার
          </h1>
        </div>
        <div className="m-5">
          <div className="w-full flex justify-center">
            <img width={100} src={gpa5Img} alt="" />
          </div>
          <h1 className="text-3xl font-bold text-center">
            {gpaFivePercentage}
          </h1>
          <h1 className="text-xl font-semibold text-center">
            এসএসসি পরীক্ষায় জিপিএ ৫
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
