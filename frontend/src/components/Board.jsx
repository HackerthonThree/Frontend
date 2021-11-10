import { React } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useHistory,
  useParams,
} from "react-router-dom";
import LinkButton from "./LinkButton";
import StockChart from "./StockChart";
import TopBar from "./TopBar";
import CommentButton from "./CommentButton";
const comments = [
  {
    name: "가즈아",
    yield: 45.3,
    words: "행님 수익률 대박~",
    date: "2021/10/23",
  },
  { name: "개미는뚠뚠", yield: 36.6, words: "영차!영차!", date: "2021/10/14" },
  {
    name: "오늘도행복해",
    yield: 12.1,
    words: "수익은 항상 옳습니다!",
    date: "2021/10/05",
  },
];

const Board = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <>
      <TopBar />
      {id}
      <StockChart />
      {comments.map((c,i) => {
        return(
        <CommentButton
        key={i}
        name={c['name']}
        yields={c['yield']}
        words={c['words']}
        date={c['date']} />);
      })}
    </>
  );
};

export default Board;
