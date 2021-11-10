import {
  XYPlot,
  MarkSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineSeries
} from "react-vis";

const transactionHistory = [
  { x: 1, y: 10, size: 30 },
  { x: 2, y: 12, size: 10 },
  { x: 3, y: 5, size: 1 },
  { x: 4, y: 15, size: 12 },
  { x: 5, y: 7, size: 4 },
];

const price = [
  { x: 1, y: 6},
  { x: 2, y: 18},
  { x: 3, y: 6},
  { x: 4, y: 13},
  { x: 5, y: 2},
];

const StockChart = ({otherHistory}) => {
  return (
    <XYPlot width={300} height={300}>
      <VerticalGridLines />
      <HorizontalGridLines />
      <XAxis />
      <YAxis />
      <MarkSeries
        className="mark-series-example"
        sizeRange={[5, 15]}
        data={transactionHistory}
      />
      <MarkSeries
        className="mark-series-example"
        sizeRange={[5, 15]}
        data={otherHistory}
      />
      <LineSeries className="first-series" data={price}
        style={{fill:'none'}}
      />
    </XYPlot>
  );
};

export default StockChart;
