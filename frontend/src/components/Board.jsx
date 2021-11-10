import { React } from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Routes,
  useHistory,
  useParams,
} from "react-router-dom";
import StockChart from "./StockChart";
import TopBar from "./TopBar";
import CommentButton from "./CommentButton";
import { useState } from "react";
import SideBar from "./SideBar";

const comments = [
  {
    name: "1",
    yield: 45.3,
    words: "행님 수익률 대박~",
    date: "2021/10/23",
  },
  { name: "2", yield: 36.6, words: "영차!영차!", date: "2021/10/14" },
  {
    name: "3",
    yield: 12.1,
    words: "수익은 항상 옳습니다!",
    date: "2021/10/05",
  },
];

const Board = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [otherHistory, setOtherHistory] = useState([]);
  console.log(id);

  const handleOtherHistory=(selectedId)=>{
    //api로 종목코드하고 댓글사용자 아이디 보냄
    const tempData={
      "1":[
        { x: 1, y: 1, size: 30 },
        { x: 2, y: 3, size: 10 },
        { x: 3, y: 4, size: 1 },
        { x: 4, y: 5, size: 12 },
        { x: 5, y: 6, size: 4 },
      ],
      "2":[
        { x: 1, y: 4, size: 30 },
        { x: 2, y: 2, size: 10 },
        { x: 3, y: 6, size: 1 },
        { x: 4, y: 8, size: 12 },
        { x: 5, y: 3, size: 4 },
      ],
      "3":[
        { x: 1, y: 7, size: 30 },
        { x: 2, y: 2, size: 10 },
        { x: 3, y: 6, size: 1 },
        { x: 4, y: 5, size: 12 },
        { x: 5, y: 2, size: 4 },
      ],
    };
    setOtherHistory(tempData[selectedId]);
  }

  return (
    <>
      <TopBar
        handleSideBarClick={() => {
          setOpen(true);
        }}
      />
      <SideBar
        open={open}
        toggleDrawer={() => {
          setOpen(false);
        }}
      />
      {id}
      <StockChart otherHistory={otherHistory} />
      {comments.map((c, i) => {
        return (
          <CommentButton
            key={i}
            name={c["name"]}
            yields={c["yield"]}
            words={c["words"]}
            date={c["date"]}
            onSelect={handleOtherHistory}
          />
        );
      })}
    </>
  );
};

export default Board;
