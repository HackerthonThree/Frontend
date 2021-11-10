import { useState } from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import { textAlign } from "@mui/system";

const style = {
  backgroundColor: "#f55e61",
  color: "#FFFFFF",
  width: "100px",
};

const SignUp = () => {
  const [brokerage, setBrokerage] = useState("");
  const [accountNum, setAccountNum] = useState("");
  const brokerages = [
    { name: "KB증권" },
    { name: "NH증권" },
    { name: "SK증권" },
    { name: "부국증권" },
    { name: "신영증권" },
  ];

  const handleNameDuplicateCheck = () => {
    console.log(name);
  };
  
  const [name, setName] = useState('');
  return (
    <div className="SignUp">
      <FormControl className="NickName">
        <TextField id="outlined-basic" label="닉네임" variant="standard"
        value={name}
          onChange={(e)=>{setName(e.target.value)}}
        />
        <Button
          style={style}
          variant="contained"
          onClick={handleNameDuplicateCheck}
        >
          중복확인
        </Button>
        <div style={{ textAlign: "center", width: "80%" }}>
          · 한글 1~10자, 영문 대소문자 2~20자, 숫자를 사용할수 있습니다.
        </div>
      </FormControl>

      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">증권사 선택</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={brokerage}
          label="증권사 선택"
          onChange={(e)=>{setBrokerage(e.target.value)}}
        >
          {brokerages.map((b) => {
            return <MenuItem key={b["name"]} value={b["name"]}>{b["name"]}</MenuItem>;
          })}
        </Select>
      </FormControl>
      <TextField id="outlined-basic" label="계좌번호" variant="standard"
        value={accountNum}
        onChange={(e)=>{setAccountNum(e.target.value)}}
      />
      <Button style={style} variant="contained">
        중복확인
      </Button>
      <div>· 계좌 번호가 중복되거나 형식이 맞아야 합니다.</div>
      <Button style={style} variant="contained">
        확인
      </Button>
    </div>
  );
};
export default SignUp;
