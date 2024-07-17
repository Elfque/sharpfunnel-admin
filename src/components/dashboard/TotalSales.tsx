import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { useState } from "react";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
  },
];

const TotalSales = () => {
  const totals = ["Total Sales", "Total Orders"];

  const [currentPage, setCurrentPage] = useState(totals[0]);

  return (
    <div className="bg-white">
      <div className="flex gap-4 items-center">
        {totals.map((item) => (
          <div
            className={`text-xs py-2 px-4 rounded ${
              item === currentPage
                ? "bg-purpleColor/20 text-purpleColor"
                : "text-fadeWhite bg-whiteBg"
            }`}
            key={item}
            onClick={() => setCurrentPage(item)}
          >
            {item}
          </div>
        ))}
      </div>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="pv" fill="#5B58EB" />
        <Bar dataKey="uv" fill="#A3C0FF" />
      </BarChart>
    </div>
  );
};

export default TotalSales;
