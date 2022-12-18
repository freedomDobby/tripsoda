import axios from "axios";
import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
// 도메인 달라도 쿠키공유해줄게
axios.defaults.withCredentials = true;

function user() {
  return <div></div>;
}
export default user;
