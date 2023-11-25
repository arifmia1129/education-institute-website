import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import api from "../../utils/axios.config";
import Loading from "../../ui/shared/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function TotalEmployee() {
  const [processing, setIsProcessing] = useState(false);
  const [totalEmployee, setTotalEmployee] = useState([]);

  const handleGetTotalEmployee = async () => {
    setIsProcessing(true);
    const { data } = await api.get("total-employee");

    if (data.success) {
      setTotalEmployee(data.data);
    }

    setIsProcessing(false);
  };

  useEffect(() => {
    handleGetTotalEmployee();
  }, []);

  if (processing) {
    return <Loading />;
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const labels = ["Allowed", "Current", "Male", "Female"];

  const data = {
    labels,
    datasets: [
      {
        label: "Total Teacher",
        data: [
          totalEmployee?.allowedTeacher,
          totalEmployee?.currentTeacher,
          totalEmployee?.maleTeacher,
          totalEmployee?.femaleTeacher,
        ],
        borderColor: "#009f51",
        backgroundColor: "#009f51",
      },
      {
        label: "Total Other Employee",
        data: [
          totalEmployee?.allowedOtherEmployee,
          totalEmployee?.currentOtherEmployee,
          totalEmployee?.maleOtherEmployee,
          totalEmployee?.femaleOtherEmployee,
        ],
        borderColor: "#ffcc00",
        backgroundColor: "#ffcc00",
      },
    ],
  };

  return (
    <div className="p-5 w-full">
      <Bar options={options} data={data} />
    </div>
  );
}
