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

const getStockList=async ()=>{
  let r=await fetch('http://3.35.205.126:8080/api/v1/comment/stock');
  let data=await r.json();
  console.log(getStockList);
}
const TopBar = ({ handleSideBarClick }) => {
  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/account"));

  const onSearchClick = () => {
    console.log(search);
    setSearch(true);
  };

  const normalMenu = (
    <>
      <Button>
        <MenuIcon style={{ fill: "white" }} onClick={handleSideBarClick} />
      </Button>
      <Button onClick={handleOnClick}>
        <img src={logoImgWhite} width="10%" />
      </Button>
      <Button onClick={onSearchClick}>
        <SearchIcon style={{ fill: "white" }} />
      </Button>
    </>
  );

  const [searchResult, setSearchResult] = useState("");
  const handleSearchEnter=(e,v)=>{
    console.log(v);
    navigate('/board/'+v);
  }
  const searchMenu = (
    <>
      <Button
        onClick={() => {
          setSearch(false);
        }}
      >
        <ArrowBackIcon style={{ fill: "white" }} />
      </Button>
      <Autocomplete
        value={searchResult}
        onChange={handleSearchEnter}
        selectOnFocus={true}
        autoHighlight={true}
        size="small"
        disablePortal
        options={stocks}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="종목 선택" />}
      />
    </>
  );

  return <div className="TopBar">{search ? searchMenu : normalMenu}</div>;
};

export default TopBar;
