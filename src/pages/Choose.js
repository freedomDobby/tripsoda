import axios from "axios";
import React from "react";
import "./choose.css";

import { Navigate, NavigationType, useNavigate } from "react-router-dom";
// import { StoreContext } from "/Main";

axios.defaults.withCredentials = true;

function Choose() {
  // const { category, setCategory, search } = React.useContext(StoreContext);

  const navigate = useNavigate();

  const [search, setSearch] = React.useState({
    text: "",
    category: "",
  });

  const [category, setCategory] = React.useState([
    {
      name: "전체",
      value: "all",
    },
    {
      name: "동아시아",
      value: "1",
    },
    {
      name: "동남아시아",
      value: "2",
    },
    {
      name: "서남아시아",
      value: "3",
    },
    {
      name: "유럽",
      value: "4",
    },
    {
      name: "아메리카",
      value: "6",
    },
    {
      name: "아프리카",
      value: "7",
    },
  ]);

  const 선택값 = (event) => {
    const cloneSearch = { ...search };
    cloneSearch.category = event;
    setSearch(cloneSearch);

    console.log(setSearch);
    navigate("/writing");
  };

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
        {category.map((item, index) => {
          const 활성화클래스명 =
            search.category === item.value ? "activeBox" : "";

          return (
            <button
              type="button"
              className={`choose ${활성화클래스명}`}
              onClick={선택값}
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
