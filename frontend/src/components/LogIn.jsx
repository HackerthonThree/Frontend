import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import { TextField } from "@mui/material";
import "./LogIn.scss";
import Axios from "axios";
import { useNavigate } from "react-router";

const style = {
  backgroundColor: "#f55e61",
  color: "#FFFFFF",
  width: "250px",
  height: "50px",
};

const LogIn = () => {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");
  const url = "http://3.35.205.126:8080/api/v1/auth/login";

  const navigate=useNavigate();

  const handleLogInClick = () => {
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
  };

  return (
    <div className="LogIn">
      <div>
        <div>
          <TextField
            label="ID"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          ></TextField>
        </div>
        <div>
          <TextField
          type="password"
            label="Password"
            value={pw}
            onChange={(e) => {
              setPw(e.target.value);
            }}
          ></TextField>
        </div>
        <div>
          <Button onClick={handleLogInClick} variant="contained" style={style}>
            로그인
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
