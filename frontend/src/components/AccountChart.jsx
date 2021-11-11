import { Paper } from "@mui/material";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import './AccountChart.scss'
const COLORS = ["#8776E8", "#5FC8E8", "#48E874", "#E8D554",'#C3E36B','#B449E3','#E3903D'];
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
          innerRadius={30}
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
