import {
  Bar,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

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

const UserEngagement = () => {
  return (
    <div className="bg-white p-4">
      <div className="flex justify-between">
        <div className="mb-5">User Engagement (Month)</div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart width={730} height={250} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="pv" fill="#5B58EB" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserEngagement;
