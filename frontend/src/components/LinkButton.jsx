import { Button } from "@mui/material";
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const style = {
  backgroundColor: "#f55e61",
color: "#FFFFFF",
width:"100px"
};

export default function LinkButton({ title, link }) {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate(link));

  return (
    <Button style={style} variant="contained" onClick={handleOnClick}>
      {title}
    </Button>
  );
}
