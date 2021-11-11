import { useState ,useNavigate} from "react";
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
import './SignUp.scss'
const style = {
  backgroundColor: "#f55e61",
  color: "#FFFFFF",
  width: "100px"
};

const styles = {
    container: {
      flex:1,
    },

    confirm_btn_style: {
        backgroundColor: "#f55e61",
        color: "#FFFFFF",
        width: "180px",
        height: "60px"
    },
}

const SignUp = () => {
  const [accountNum, setAccountNum] = useState("");
  const [brokerage, setBrokerage] = useState("");
  const [name, setName] = useState('');
  const [id,setId]=useState('');
  const [pw,setPw]=useState('');
  const [pw2,setPw2]=useState('');
  const brokerages = [
    { name: "KB증권" },
    { name: "NH증권" },
    { name: "SK증권" },
    { name: "부국증권" },
    { name: "신영증권" },
  ];

  const url = "http://3.35.205.126:8080/api/v1/auth/login";

  const handleSignUpClick = () => {
    /*
    console.log("click");
    const sendData = {
      id: id,
      password: pw,
    };
    const jsoned = JSON.stringify(sendData);
    console.log(jsoned);
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: jsoned,
    })
      .then((res) => res.json())
      .then(function (response) {
        if(response!=0){
          navigate("/account");
        }

      })
      .catch((error) => console.log("server not response..."));
      */
  };

  const handleNameDuplicateCheck = () => {
    console.log(name);
  };

  return (
    <div className="SignUp">
      <FormControl >
          <div style={{ padding: "20px", width: "90%" }}>
            <TextField style={{padding:"0px 20px 0px 0px"}} label="ID" variant="standard"
            value={id}
              onChange={(e)=>{setId(e.target.value)}}
            />
            <TextField style={{padding:"0px 20px 0px 0px"}} label="Password" variant="standard"
            value={pw}
            type="password"
              onChange={(e)=>{setPw(e.target.value)}}
            />
            <TextField style={{padding:"0px 20px 0px 0px"}} label="Password Verification" variant="standard"
            value={pw2}
            type="password"
              onChange={(e)=>{setPw2(e.target.value)}}
            />
            <TextField style={{padding:"0px 20px 0px 0px"}} label="닉네임" variant="standard"
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
            <div class="testBox" style={{ padding: "20px", width: "90%" }}>
              · 한글 1~10자, 영문 대소문자 2~20자,
                숫자를 사용할수 있습니다.
            </div>
          </div>
      </FormControl>

      <FormControl fullWidth={true} style={{ width: "90%" }}>
        <InputLabel id="demo-simple-select-label">증권사 선택</InputLabel>
        <Select
          value={brokerage}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          onChange={(e)=>{setBrokerage(e.target.value)}}
        >
          {brokerages.map((b) => {
            return <MenuItem key={b["name"]} value={b["name"]}>{b["name"]}</MenuItem>;
          })}
        </Select>
      </FormControl>
        <div style={{ padding: "20px", width: "90%" }}>
          <TextField style={{padding:"0px 20px 0px 0px"}} id="outlined-basic" label="계좌번호" variant="standard"
            value={accountNum}
            onChange={(e)=>{setAccountNum(e.target.value)}}
          />
          <Button style={style} variant="contained">
            중복확인
          </Button>
            <div class="testBox" style={{ padding: "20px", width: "90%" }}>· 계좌 번호가 중복되거나 형식이 맞아야 합니다.</div>
        </div>
        <Button onClick={handleSignUpClick} style={styles.confirm_btn_style} variant="contained">
        확인
        </Button>
    </div>
  );
};
export default SignUp;
