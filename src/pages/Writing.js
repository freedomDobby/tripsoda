import axios from "axios";
import React from "react";
import "./writing.css";

import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

axios.defaults.withCredentials = true;

function Writing({data,setData}) {

  const Navigate = useNavigate();

  const { loginUser } = React.useContext(StoreContext);
  const 게시글 = (event) => {
    const cloneData = {...data};
    cloneData[event.target.name] = event.target.value;
  }

  const 저장 =() =>{
    //해당내용 저장
    Navigate("/");    
  }

  return (
    <div className="articlebody">
      <div className="article">
        <h3 className="articleTitle">뫄뫄님의</h3>
        <h3> 여행을 소개해주세요!</h3>
      </div>

      <div className="writingBox">
        <div className="title">
          <input
            type="text"
            placeholder="ex) 12월 3박 4일 제주바다 보러갈 동행 3인 구해요"
            className="inputBox1"
            name="title"
            onChange={게시글}
          ></input>
        </div>
        <div className="text">
          <input 
           type="text" 
           name="content" 
           className="inputBox2" 
           onChange={게시글}></input>
        </div>
      </div>
      <button className="next" onClick={저장}>저장</button>
    </div>
  );
}
export default Writing;
