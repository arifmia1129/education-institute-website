/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import PageHeader from "../../components/PageHeader";

const StudentInfo = () => {
  const [processing, setIsProcessing] = useState(false);
  const [students, setStudents] = useState(null);

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetStudent = async () => {
      setIsProcessing(true);
      try {
        const { data } = await api.get(`student`);

        if (data.success) {
          setStudents(data.data);
        }
      } catch (error) {
        // toast.error(error.response.data.message);
      } finally {
        setIsProcessing(false);
      }
    };
    handleGetStudent();
  }, [languageCode]);

  if (processing) {
    return <Loading />;
  }

  return (
    <div>
      <PageHeader title="Student Instudentation" />
      <div className="overflow-x-auto my-10">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-lg">
              <th className="text-center">Class</th>
              <th className="text-center">Student</th>
              <th className="text-center">Section</th>
            </tr>
            <tr className="text-md">
              <th className="text-center"></th>
              <th className="text-center">Male - Female - Total</th>
              <th className="text-center">Science - Humanities</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center">Class - 6</td>
              <td className="text-center">
                {students?.class6?.male}-{students?.class6?.female}-
                {students?.class6?.total}
              </td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center">Class - 7</td>
              <td className="text-center">
                {students?.class7?.male}-{students?.class7?.female}-
                {students?.class7?.total}
              </td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center">Class - 8</td>
              <td className="text-center">
                {students?.class8?.male}-{students?.class8?.female}-
                {students?.class8?.total}
              </td>
              <td className="text-center"></td>
            </tr>
            <tr>
              <td className="text-center">Class - 9</td>
              <td className="text-center">
                {students?.class9?.male}-{students?.class9?.female}-
                {students?.class9?.total}
              </td>
              <td className="text-center">
                {students?.class9?.science}-{students?.class9?.arts}
              </td>
            </tr>
            <tr>
              <td className="text-center">Class - 10</td>
              <td className="text-center">
                {students?.class10?.male}-{students?.class10?.female}-
                {students?.class10?.total}
              </td>
              <td className="text-center">
                {students?.class10?.science}-{students?.class10?.arts}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentInfo;
