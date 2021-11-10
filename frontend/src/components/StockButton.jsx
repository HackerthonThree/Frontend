import React,{useCallback} from "react"
import { Paper } from "@mui/material";
import { Button } from "@mui/material";
import {useNavigate} from 'react-router-dom';
const StockButton=({data})=>{
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/board/'+data['name']));
    return (
      <div>
        <Button onClick={handleOnClick}>
          <div>{data["name"]}</div>
          <div>{data["yield"]}</div>
          <div>{data["value"]}</div>
        </Button>
      </div>
    );
}

export default StockButton;