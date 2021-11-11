import * as React from "react";
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

const Account = () => {
  const [open, setOpen] = useState(false);
const sortedStocks=stocks.sort((a,b)=>{
  return b.value-a.value;
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
          <AccountChart className="circleChart" data={sortedStocks} />
          <div className="fonts">
            <div className="fontWrap">
              【 가즈아님 】
            </div>
            <div className="fontWrap">
              총자산
            </div>
            <div className="fontWrap">
              2,199,225원
            </div>
          </div>
        </Paper>
        <div className="Stocks">
          {stocks.map((s,i) => {
            return <StockButton key={i} data={s} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
