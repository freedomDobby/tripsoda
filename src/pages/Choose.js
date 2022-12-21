import axios from "axios";
import React from "react";
import "./choose.css";

import { Navigate, NavigationType, useNavigate } from "react-router-dom";
import { 카테고리기본값 } from "./Main";
// import { StoreContext } from "/Main";

axios.defaults.withCredentials = true;

function Choose({ data, setData }) {
  // const { category, setCategory, search } = React.useContext(StoreContext);

  const navigate = useNavigate();

  const [search, setSearch] = React.useState({
    text: "",
    category: "",
  });

  const [category, setCategory] = React.useState(카테고리기본값);

  const 기다려 = (s) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, s);
    });
  };

  const 선택값 = async (클릭한카테고리값) => {
    const cloneData = { ...data };
    cloneData.category = 클릭한카테고리값;
    setData(cloneData);

    await 기다려(500);

    navigate("/chooseDay");
  };

  const back = () => {
    navigate("/");
  };

  return (
    <div>
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
        <p>대륙</p>
        <p></p>
      </div>

      <div className="title">
        <h2>어디로</h2>
        <h2> 떠나시나요?</h2>
      </div>
      <div className="pageBody">
        {category.map((item, index) => {
          const 활성화클래스명 =
            data.category === item.value ? "activeBox" : "";

          // console.log(setSearch);
          // console.log(item.name);
          return (
            <button
              type="button"
              className={`choose ${활성화클래스명}`}
              onClick={선택값.bind(this, item.value)}
            >
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Choose;
