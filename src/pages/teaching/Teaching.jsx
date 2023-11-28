/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";
import PageHeader from "../../components/PageHeader";

const Teaching = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const [processing, setIsProcessing] = useState(false);
  const [infos, setInfos] = useState([]);

  const languageCode = localStorage.getItem("langCode");

  useEffect(() => {
    const handleGetTeachingInfo = async () => {
      setIsProcessing(true);
      try {
        const { data } = await api.get(
          `teaching/${languageCode}?page=${currentPage}&limit=${limit}`
        );

        if (data.success) {
          setInfos(data.data);
        }
      } catch (error) {
        // toast.error(error.response.data.message);
      } finally {
        setIsProcessing(false);
      }
    };
    handleGetTeachingInfo();
  }, [currentPage, limit, languageCode]);

  if (processing) {
    return <Loading />;
  }

  return (
    <div>
      <PageHeader title="Teaching Information" />
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead className="text-lg">
            <tr>
              <th>Title</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {infos?.map((info) => (
              <tr key={info._id}>
                <td>{info?.title}</td>
                <td>
                  <a
                    className="text-blue-500 font-bold"
                    target="__blank"
                    href={info?.fileUrl}
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

export default Teaching;
