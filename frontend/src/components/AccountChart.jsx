import { Paper } from "@mui/material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import './AccountChart.scss'
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
const AccountChart = ({ data }) => {
  return (
    <div>
      <PieChart width={200} height={200}>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          outerRadius={60}
          innerRadius={40}
          fill="#8884d8"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default AccountChart;
