import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import logoImg from "../resource/logo.png";
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";
import LinkButton from "./LinkButton";
import { TextField } from "@mui/material";
import './LogIn.scss'
const LogIn = () => {
  return (
    <div className="LogIn">
      <TextField label="ID"></TextField>
      <TextField label="Password"></TextField>
    </div>
  );
};

export default LogIn;
