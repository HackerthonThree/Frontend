import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Paper } from "@mui/material";
import logoImgWhite from "../resource/logo_white.png";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import "./TopBar.scss"
const style = { color: "#f55e61" };

const TopBar = ({handleSideBarClick}) => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/account"));
  
  return (
    <div
      className="TopBar"
      elevation={2}
    >
      <Button>
        <MenuIcon style={{ fill: "white" }}
          onClick={handleSideBarClick}
        />
      </Button>
      <Button onClick={handleOnClick}>
        <img src={logoImgWhite} width="10%" />
      </Button>
      <Button>
        <SearchIcon style={{ fill: "white" }} />
      </Button>
    </div>
  );
};

export default TopBar;
