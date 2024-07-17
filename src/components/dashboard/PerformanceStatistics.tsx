import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

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
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
  },
];

const PerformanceStatistics = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div className="text-blackText">Performance Statistic</div>

        <div className="flex gap-4 items-center">
          <input
            type="date"
            name=""
            id=""
            className="text-inputBorder border-inputBorder border text-xs py-2 px-4 rounded"
          />

          <select
            name=""
            id=""
            className="text-inputBorder border-inputBorder border text-xs py-2 px-4 rounded"
          >
            <option value="">Month</option>
          </select>
        </div>
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

export default PerformanceStatistics;
