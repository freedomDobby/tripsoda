import axios from "axios";
import React from "react";
import "./mypage.css";

import { Navigate, NavigationType, useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Mypage() {
  const navigate = useNavigate();

  const moveback = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="upbar">
        <p></p>
        <p>마이페이지</p>
        <p></p>
      </div>
      <div className="user">
        넣을거: 아이디, 캐릭터 이미지
        <img src="https://tripsoda.com/images/common/profile/vector_profile_willy.svg"></img>
        {/* <p>`${loginUser}`</p> */}
      </div>
      <div className="myBoard">내가 쓴 글</div>
      <div className="underbar">
        <ul className="underbarImg">
          <li>
            <img
              className="underImg"
              src="	https://tripsoda.com/images/common/foot_menu/home/off.svg"
              onClick={moveback}
            />
            <p className="underText">커뮤니티</p>
          </li>
          <li>
            <img
              className="underImg"
              src="https://tripsoda.com/images/common/foot_menu/mypage/on.svg"
            />
            <p className="underText">마이페이지</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Mypage;
