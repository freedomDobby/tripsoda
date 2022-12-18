import axios from "axios";
import React from "react";
import "./choose.css";

import { Navigate, NavigationType, useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

axios.defaults.withCredentials = true;

function Choose() {
  const navigate = useNavigate();
  // const 선택 = (클릭) =>{

  // }

  const back = () => {
    navigate("/");
  };

  return (
    <div>
      <button className="back" onClick={back}>
        <svg
          width="10"
          height="18"
          viewBox="0 0 10 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 1L1 9L9 17"
            stroke="#252525"
            stroke-width="1"
            stroke-linecap="square"
          ></path>
        </svg>
      </button>

      <div className="title">
        <h1>뫄뫄님!</h1>
        <h1>어디로 여행하시나요?</h1>
      </div>
      <div className="pageBody">
        <button className="choose">1</button>
        <button className="choose">2</button>
        <button className="choose">3</button>
        <button className="choose">4</button>
        <button className="choose">5</button>
        <button className="choose">6</button>
        <button className="choose">7</button>
        <button className="choose"></button>
      </div>
    </div>
  );
}

export default Choose;
