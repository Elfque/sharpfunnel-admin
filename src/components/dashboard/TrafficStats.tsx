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
];

const TrafficStats = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div className="">Traffic Statics</div>
      </div>

      <div className="text-[24px] font-semibold">
        8,000{" "}
        <span className="text-inputBorder text-[10px]">for this Quarter</span>
      </div>

      <BarChart width={730} height={250} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Bar dataKey="pv" fill="#5B58EB" />
      </BarChart>
    </div>
  );
};

export default TrafficStats;
