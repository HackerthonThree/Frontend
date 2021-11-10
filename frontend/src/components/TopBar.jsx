import * as React from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Paper, TextField } from "@mui/material";
import logoImgWhite from "../resource/logo_white.png";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";
import "./TopBar.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const stocks = ["삼성전자", "삼성전기", "애플", "삼성바이오로직스"];

const TopBar = ({ handleSideBarClick }) => {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/account"));
  const onSearchClick = () => {
    console.log(search);
    setSearch(true);
  };

  const normalMenu = (
    <div className="TopBar" elevation={2}>
      <Button>
        <MenuIcon style={{ fill: "white" }} onClick={handleSideBarClick} />
      </Button>
      <Button onClick={handleOnClick}>
        <img src={logoImgWhite} width="10%" />
      </Button>
      <Button onClick={onSearchClick}>
        <SearchIcon style={{ fill: "white" }} />
      </Button>
    </div>
  );

  const searchMenu = (
    <div className="TopBar" elevation={2}>
      <Button
      onClick={()=>{setSearch(false)}}>
        <ArrowBackIcon style={{fill:"white"}} />
      </Button>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="종목 선택" />}
      />
    </div>
  );

  return <div>{search ? searchMenu : normalMenu}</div>;
};

export default TopBar;
