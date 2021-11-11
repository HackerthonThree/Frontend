import {useEffect} from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import TopBar from "./TopBar";
import { Paper } from "@mui/material";
import AccountChart from "./AccountChart";
import StockButton from "./StockButton";
import SideBar from "./SideBar";
import { useState } from "react";
import "./Account.scss";
import Axios from "axios";
const stocks = [
  { name: "삼성전자", value: 400, yield: -23.5 },
  { name: "삼성바이오로직스", value: 300, yield: 46.6 },
  { name: "애플", value: 350, yield: 46.2 },
  { name: "가로이", value: 120, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
  { name: "삼성전자", value: 400, yield: -23.5 },
  { name: "삼성바이오로직스", value: 300, yield: 46.6 },
  { name: "애플", value: 350, yield: 46.2 },
  { name: "가로이", value: 120, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
  { name: "삼성전자", value: 400, yield: -23.5 },
  { name: "삼성바이오로직스", value: 300, yield: 46.6 },
  { name: "애플", value: 350, yield: 46.2 },
  { name: "가로이", value: 120, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
  { name: "삼성전자", value: 400, yield: -23.5 },
  { name: "삼성바이오로직스", value: 300, yield: 46.6 },
  { name: "애플", value: 350, yield: 46.2 },
  { name: "가로이", value: 120, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
  { name: "삼성전자", value: 400, yield: -23.5 },
  { name: "삼성바이오로직스", value: 300, yield: 46.6 },
  { name: "애플", value: 350, yield: 46.2 },
  { name: "가로이", value: 120, yield: 46.2 },
  { name: "미노이", value: 80, yield: 46.2 },
];

const yieldValue = 50;

const url="http://3.35.205.126:8080/api/v1/comment/stock";

const Account = () => {
  const [open, setOpen] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [stockNameList, setStockNameList] = useState([]);
  const fetchData = async () => {
    const result = await Axios(url);
    setStockList(result.data);

    const names = result.data.map((s) => {
      return s.stockName;
    });
    const sorted = names.sort();
    console.log(sorted);
    setStockNameList(sorted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sortedStocks = stocks.sort((a, b) => {
    return b.value - a.value;
  });
  return (
    <div className="Account">
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
      <div className="AccountInfo">
        <Paper className="AccountChart">
          <div>{yieldValue}%</div>
          <AccountChart data={sortedStocks} />
          <div className="fonts">
            <div className="fontWrap">총 자산</div>
            <div className="fontWrap">수익률</div>
          </div>
        </Paper>
        <div className="Stocks">
          {stocks.map((s, i) => {
            return <StockButton key={i} data={s} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
