import React, { useCallback } from "react";
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import './CommentButton.scss'
const CommentButton = ({ name, words, yields, date, onSelect }) => {
  return (
    <Paper elevation={2} className="CommentButton">
        <AccountCircleIcon />
        <div>
          <div>{name}</div>
          <div>{yields}</div>
          <div>{words}</div>
        </div>
        <Button 
         className="HistoryButton" onClick={() => onSelect(name)}>
          <ArrowForwardIosIcon style={{fill:'#f55e61'}} fontSize='large' />
        </Button>
    </Paper>
  );
};

export default CommentButton;
