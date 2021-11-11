import {
  XYPlot,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries,
  GradientDefs,
} from "react-vis";
import "./StockChart.scss"
const transactionHistory = [
  [
    { x: 1, y: 10, size: 50 },
    { x: 2, y: 12, size: 20 },
    { x: 3, y: 5, size: 15 },
  ],
  [
    { x: 4, y: 15, size: 1 },
    { x: 5, y: 7, size: 3 },
  ],
];

const price = [
  { x: 1, y: 6 },
  { x: 2, y: 18 },
  { x: 3, y: 6 },
  { x: 4, y: 13 },
  { x: 5, y: 2 },
];

const sizeRange = [4, 10];
const StockChart = ({ otherHistory }) => {
  return (
    <XYPlot className="StockChart" width={350} height={200}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <MarkSeries
        opacity={0.55}
        color="red"
        sizeRange={sizeRange}
        data={transactionHistory[0]}
      />
      <MarkSeries
        opacity={0.55}
        color="blue"
        sizeRange={sizeRange}
        data={transactionHistory[1]}
      />
      <MarkSeries
        opacity={0.55}
        strokeWidth={3}
        color="red"
        fill="white"
        sizeRange={sizeRange}
        data={otherHistory[0]}
      />
      <MarkSeries
        opacity={0.55}
        strokeWidth={3}
        color="blue"
        fill="white"
        sizeRange={sizeRange}
        data={otherHistory[1]}
      />

        <LineSeries
          className="first-series"
          color="#f55e61"
          strokeWidth={3}
          data={price}
          style={{ fill: "none" }}
        />
    </XYPlot>
  );
};

export default StockChart;
