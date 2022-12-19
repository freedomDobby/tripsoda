import axios from "axios";
import React from "react";
import "./chooseday.css";

import { Navigate, NavigationType, useNavigate } from "react-router-dom"; 

axios.defaults.withCredentials = true;

function ChooseDay({data, setData}){

    const Navigate = useNavigate();

    const back = () =>{
        Navigate("/choose");
    }

    const 날짜변경 = (event) => {
        const cloneData = {...data};
        cloneData[event.target.name] = event.target.value;
        setData(cloneData);
    }
    const 다음 = () =>{
        Navigate("/writing");
    };

return(
    <div>``
        <div className="upBar1">
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
                strokeWidth="1"
                strokeLinecap="square"
            ></path>
            </svg>
        </button>
        <p>일정</p>
        <p></p>
        </div>
        <div className="title">
        <h2>언제</h2>
        <h2>떠나시나요?</h2>
      </div>
      <div className="dataBox">
        <input type="date" name="startDate" onChange={날짜변경} />~
        <input type="date" name="endDate" onChange={날짜변경} />
      </div>
      <button className="next" onClick={다음}>다음</button>
    </div>
)
}


export default ChooseDay;