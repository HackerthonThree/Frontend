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


const sizeRange = [4, 10];
const StockChart = ({ price,transactionHistory,otherHistory }) => {
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
