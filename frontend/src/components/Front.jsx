import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import { Paper } from "@mui/material";
import "./Front.scss";
const Front = () => {
  return (
    <div className="Front">
      <div>
        <img className="logo" src={logoImg} />
      </div>
      <div className="buttons">
        <div className="button">
          <LinkButton title="로그인" link="login" />
        </div>
        <div className="button">
          <LinkButton title="회원가입" link="signup" />
        </div>
      </div>
    </div>
  );
};

export default Front;
