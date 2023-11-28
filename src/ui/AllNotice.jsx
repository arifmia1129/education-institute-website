/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import PageHeader from "../components/PageHeader";
import api from "../utils/axios.config";
import Loading from "./shared/Loading";

const AllNotice = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [processing, setIsProcessing] = useState(false);
  const [notices, setNotices] = useState([]);

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetNotice = async () => {
      // setIsProcessing(true);
      try {
        const { data } = await api.get(
          `notice/${languageCode}?page=${currentPage}&limit=${limit}`
        );

        if (data.success) {
          setNotices(data.data);
        }
      } catch (error) {
        // toast.error(error.response.data.message);
      } finally {
        setIsProcessing(false);
      }
    };
    handleGetNotice();
  }, [currentPage, limit, languageCode]);

  if (processing) {
    return <Loading />;
  }

  return (
    <div>
      <PageHeader title="Notice" />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Notice</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {notices?.map((notice) => (
              <tr key={notice._id}>
                <td>{notice?.title}</td>
                <td>
                  <a
                    className="text-blue-500 font-bold"
                    target="__blank"
                    href={notice?.fileUrl}
                  >
                    Download
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="w-full flex justify-end">
        <select
          defaultValue={limit}
          onChange={(e) => setLimit(e.target.value)}
          className="select select-bordered select-sm w-fit my-2"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={30}>30</option>
        </select>
      </div>
      <div className="join grid grid-cols-2">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          className="join-item btn btn-outline"
        >
          Previous page
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          className="join-item btn btn-outline"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllNotice;
