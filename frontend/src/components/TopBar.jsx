import {useEffect} from "react";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Autocomplete, Paper, TextField } from "@mui/material";
import logoImgWhite from "../resource/logo_white.png";
import { useNavigate } from "react-router";
import { useCallback, useState } from "react";
import "./TopBar.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Axios from 'axios';

const url="http://3.35.205.126:8080/api/v1/comment/stock";
const TopBar = ({ handleSideBarClick }) => {
  const [stockList, setStockList] = useState([]);
  const [stockNameList,setStockNameList]=useState([]);
  const fetchData = async () => {
    const result = await Axios(url);
    setStockList(result.data);
    
    const names=result.data.map((s)=>{
      return s.stockName;
    });
    const sorted=names.sort();
    setStockNameList(sorted);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [search, setSearch] = useState(false);
  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate("/account"));

  const onSearchClick = () => {
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
  const handleSearchEnter = (e, v) => {
    if (v == null) return;
    const code = stockList.find((s) => s.stockName == v).stockCode;
    navigate("/board/" + code);
  };
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
        options={stockNameList}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="종목 선택" />}
      />
    </>
  );

  return <div className="TopBar">{search ? searchMenu : normalMenu}</div>;
};

export default TopBar;
