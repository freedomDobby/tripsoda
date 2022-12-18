import axios from "axios";
import React from "react";
import "./writing.css";

import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

axios.defaults.withCredentials = true;

function Writing() {
  const { loginUser } = React.useContext(StoreContext);
  return (
    <div className="articlebody">
      <div className="article">
        <h3 className="articleTitle">뫄뫄님의</h3>
        <h3> 여행을 소개해주세요!</h3>
      </div>
      <div className="articleImg">
        <input
          type="file"
          className="inputImg"
          accept="image/bmp,image/gif,image/jpg,image/jpeg,image/png,image/raw,image/tif,image/heif,image/ts,image/mp4,image/avi,image/mov,image/wmv,image/mkv,image/mpg,image/rm,image/asf,image/m4v,image/mpeg,image/mpg"
        />
      </div>
      <div className="waring">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 19C14.9706 19 19 14.9706 19 10C19 5.02944 14.9706 1 10 1C5.02944 1 1 5.02944 1 10C1 14.9706 5.02944 19 10 19Z"
            fill="#FC7070"
          ></path>
          <path
            d="M9.00137 14.1011C9.01422 13.834 9.10525 13.5766 9.26317 13.3609C9.42108 13.1451 9.63891 12.9805 9.88959 12.8875C10.1403 12.7944 10.4128 12.7771 10.6732 12.8377C10.9336 12.8982 11.1705 13.0339 11.3545 13.228C11.5384 13.422 11.6613 13.6659 11.7079 13.9292C11.7544 14.1925 11.7226 14.4636 11.6163 14.709C11.51 14.9543 11.334 15.1631 11.1101 15.3092C10.8862 15.4554 10.6243 15.5325 10.3569 15.5311C10.173 15.5295 9.99133 15.4909 9.8227 15.4175C9.65406 15.3441 9.50195 15.2375 9.37543 15.104C9.24891 14.9706 9.15058 14.813 9.08631 14.6406C9.02204 14.4683 8.99315 14.2848 9.00137 14.1011V14.1011ZM9.32915 6.07111L9.25471 4H11.4592L11.3847 6.07111L11.0714 11.5678H9.64248L9.32915 6.07111Z"
            fill="white"
          ></path>
        </svg>
        <p>사진을 첨부하지 않을 시, 기본 사진이 들어갑니다. </p>
      </div>
      <div className="writingBox">
        <div className="title">
          <input
            type="text"
            placeholder="ex) 12월 3박 4일 제주바다 보러갈 동행 3인 구해요"
            className="inputBox1"
          ></input>
        </div>
        <div className="text">
          <input type="text" className="inputBox2"></input>
        </div>
      </div>
      <button className="next">다음</button>
    </div>
  );
}
export default Writing;
