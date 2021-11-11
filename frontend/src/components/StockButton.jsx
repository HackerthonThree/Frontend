import React, { useCallback } from "react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './StockButton.scss'
const StockButton = ({ data }) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/board/" + data["name"]));
  return (
    <Paper elevation={2} className="StockButton">
    <div className="info">
      <div className="StockNameFont">{data["name"]}</div>
      <div className="ProfitFont">▶ {data["yield"]}% /  {data["value"]}원</div>

    </div>
      <Button className="HistoryButton" onClick={handleOnClick}>
        <ArrowForwardIosIcon style={{ fill: "#f55e61" }} fontSize="large" />
      </Button>
    </Paper>
  );
};

export default StockButton;
