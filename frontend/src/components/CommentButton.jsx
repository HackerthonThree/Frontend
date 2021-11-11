import React, { useCallback } from "react";
import { Divider, Paper } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./CommentButton.scss";
const CommentButton = ({id, name, words, yields: average, date, onSelect }) => {
  return (
    <Paper elevation={2} className="CommentButton">
      <div className="texts">
        <div className="info">
          <AccountCircleIcon />
          {name}
          <Paper className="average">
          평균매수가 {average}
          </Paper>
        </div>
        <Divider variant="fullWidth"/>
        <div>{words}</div>
      </div>
      <Button className="HistoryButton" onClick={() => onSelect(id)}>
        <ArrowForwardIosIcon style={{ fill: "#f55e61" }} fontSize="large" />
      </Button>
    </Paper>
  );
};

export default CommentButton;
