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
  { name: "애플", value: 300, yield: 46.2 },
];

const yieldValue = 50;

const Account = () => {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    console.log(open);
    setOpen(!open);
  };

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
        <Paper >
          <div>{yieldValue}%</div>
          <AccountChart data={stocks} />
        </Paper>
        <Paper>
          {stocks.map((s) => {
            return <StockButton key={s["name"]} data={s} />;
          })}
        </Paper>
      </div>
    </div>
  );
};

export default Account;
