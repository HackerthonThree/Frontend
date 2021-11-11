import { useEffect } from "react";
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

const Account = () => {
  const [open, setOpen] = useState(false);
  const [stockList, setStockList] = useState([]);
  const [stockNameList, setStockNameList] = useState([]);
  const [accountInfo, setAccountInfo] = useState([]);
  const prices=[70500,471000,21400,389000,14350,985];
  const [myStocks, setMyStocks] = useState([]);
  const [nickName, setNickName] = useState("");
  const fetchStockList = async () => {
    const url = "http://3.35.205.126:8080/api/v1/comment/stock";
    const result = await Axios(url);
    setStockList(result.data);

    const names = result.data.map((s) => {
      return s.stockName;
    });
    const sorted = names.sort();
    setStockNameList(sorted);
  };
  const fetchEndCost = async (id) => {
    const url = "http://3.35.205.126:8080/api/v1/portfolio/stock/price/";
    const result = await Axios(url + id);
    const price = result.data[result.data.length - 1].endCost;
    return price;
  };

  const fetchAccountData = async () => {
    const url = "http://3.35.205.126:8080/api/v1/portfolio/account/1";
    const result = await Axios(url);
    setNickName(result.data[0].user.nickname);
    const stocks = result.data.map((d, i) => {
      const stock = stockList.find((s) => s.stockCode == d.stockName);
      const name = stock ? stock.stockName : "";
      return {
        name: name,
        stockCode: d.stockName,
        qty: d.qty,
        price:prices[i],
        value:d.qty*prices[i]
      };
    });
    setAccountInfo(stocks);
  };

  useEffect(() => {
    fetchStockList();
  }, []);

  useEffect(() => {
    fetchAccountData();
  }, [stockList]);


  const sortedStocks = accountInfo.sort((a, b) => {
    return b.value - a.value;
  });
  let sum = 0;
  for (let i of sortedStocks) {
    sum += i.value;
  }
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
            <div className="fontWrap">【 {nickName} 】</div>
            <div className="fontWrap">총자산</div>
            <div className="fontWrap">{sum}원</div>
          </div>
        </Paper>
        <div className="Stocks">
          {sortedStocks.map((s, i) => {
            return <StockButton key={i} data={s} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Account;
