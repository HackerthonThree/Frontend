import { React,useEffect } from "react";
import {
  useParams,
} from "react-router-dom";
import StockChart from "./StockChart";
import TopBar from "./TopBar";
import CommentButton from "./CommentButton";
import { useState } from "react";
import SideBar from "./SideBar";
import "./Board.scss";
import { Button, TextField } from "@mui/material";
import  Axios  from "axios";
import { AtmTwoTone } from "@mui/icons-material";
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
  {
    name: "4",
    yield: 45.3,
    words: "행님 수익률 대박~",
    date: "2021/10/23",
  },
  { name: "5", yield: 36.6, words: "영차!영차!", date: "2021/10/14" },
  {
    name: "6",
    yield: 12.1,
    words: "수익은 항상 옳습니다!",
    date: "2021/10/05",
  },
];

const Board = () => {
  const { id } = useParams();
  const [open, setOpen] = useState(false);
  const [myComment, setMyComment] = useState('');
  const [otherHistory, setOtherHistory] = useState([]);
  const [transactionHistory, setTransactionHistory] = useState([]);
  const [comments, setComments] = useState([]);

  const priceUrl="http://3.35.205.126:8080/api/v1/portfolio/stock/price/"
  const commentUrl="http://3.35.205.126:8080/api/v1/comment/";
  const [endCosts, setEndCosts] = useState([]);
  const [stockName,setStockName]=useState('');

  const fetchStockData = async () => {
    const result = await Axios(priceUrl+id);
    const temp=result.data.map((d,i)=>{
      return {y:d.endCost,x: i,date:d.date};
    });
    console.log(temp);
    setEndCosts(temp);
    setStockName(result.data[0].stock.stockName);
  };

  const fetchCommentData = async () => {
    const result = await Axios(commentUrl + id);
    console.log(result.data);
    setComments(result.data);
  };

  const fetchOtherTransaction = async (id) => {
    const url = "http://3.35.205.126:8080/api/v1/comment/transaction/" + id;
    const result = await Axios(url);
    console.log(result.data);
    const dots = [[], []];
    console.log(endCosts);
    result.data.map((d, i) => {
      const match = endCosts.find((e) => {
        return e.date == d.transdate
      });
      console.log(match);
      const dot = { x: i, y: d.amt, size: d.qty };
      if (d.transType) dots[0].push(dot);
      else dots[1].push(dot);
    });
    return dots;
  };

  const fetchTransaction = async () => {
    const url = "http://3.35.205.126:8080/api/v1/comment/transaction/my";
    const result = await Axios.get(url, {
      params: { userId: 1, stockCode: id },
    });
    const dots = [[], []];
    result.data.map((d, i) => {
      const dot = { x: i, y: d.amt, size: d.qty };
      if (d.transType) dots[0].push(dot);
      else dots[1].push(dot);
    });
    return dots;
  };

  useEffect(() => {
    fetchStockData();
    fetchCommentData();
    const dots=fetchTransaction();
    dots.then((r)=>{
      console.log(r);
      setTransactionHistory(r);
    });
    setTransactionHistory(dots);
  }, [id]);

  const handleOtherHistory = (selectedId) => {
    //api로 종목코드하고 댓글사용자 아이디 보냄
    console.log(selectedId);
    const dots = fetchOtherTransaction(selectedId);
    dots.then((r) => {
      console.log(r);
      setOtherHistory(r);
    });
  };

  const commentSubmit = async () => {
    const checkUrl = "http://3.35.205.126:8080/api/v1/comment/transaction";
    const check = await Axios.get(checkUrl, {
      params: {
        userId: 1,
        stockCode: id,
      },
    });
    if (!check.data) alert("해당 종목의 구매 이력이 없습니다.");
    else {
      const data = {
        content: myComment,
        nickname: "가즈아",
        stockCode: id,
      };
      console.log(data);
      const sendUrl = "http://3.35.205.126:8080/api/v1/comment/";
      fetch(sendUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    }
    console.log(check);
  };
  return (
    <div className="Board">
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
        name="test"
      />
      <b>{stockName}</b>
      <StockChart
        price={endCosts}
        transactionHistory={transactionHistory}
        otherHistory={otherHistory}
      />
      <div>
        <div className="typeComment">
          <TextField
            label="댓글 작성"
            sx={{ minWidth: 300 }}
            value={myComment}
            onChange={(e) => setMyComment(e.target.value)}
            size="small"
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#f55e61", color: "#FFFFFF" }}
            onClick={commentSubmit}
          >
            작성
          </Button>
        </div>
        <div className="comments">
          {comments.map((c, i) => {
            return (
              <CommentButton
                key={i}
                name={c["author"]}
                yields={c["earn"]}
                words={c["content"]}
                date={c["date"]}
                id={c.id}
                onSelect={handleOtherHistory}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
