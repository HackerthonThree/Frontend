import React,{useCallback} from "react"
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const CommentButton=({name,words,yields,date,onSelect})=>{
    return (
      <div>
        <Paper>
        <AccountCircleIcon/>
          <div>{name}</div>
          <div>{yields}</div>
          <div>{words}</div>
          <Button onClick={()=>onSelect(name)}>
            <ArrowForwardIosIcon/>
          </Button>
        </Paper>
      </div>
    );
}

export default CommentButton;