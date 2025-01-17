import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
//   CartesianGrid,

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

const LeadStatistics = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div className="text-blackText">Lead Statistic</div>
      </div>

      <div className="w-full overflow-x-auto">
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
        </LineChart>
      </div>
    </div>
  );
};

export default LeadStatistics;
