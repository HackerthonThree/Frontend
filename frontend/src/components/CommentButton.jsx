import React,{useCallback} from "react"
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
const CommentButton=({name,words,yields,date})=>{
    return (
      <div>
        <Button>
        <AccountCircleIcon/>
          <div>{name}</div>
          <div>{words}</div>
        </Button>
      </div>
    );
}

export default CommentButton;