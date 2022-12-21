import axios from "axios";
import React from "react";
import "./main.css";

import { useNavigate } from "react-router-dom";
import { StoreContext } from "../App";

// export const StoreContext = React.createContext({});

export const 카테고리기본값 = [
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
];

axios.defaults.withCredentials = true;

function Main() {
  const { loginUser } = React.useContext(StoreContext);
  console.log(loginUser);
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    id: "",
    pw: "",
  });

  const [search, setSearch] = React.useState({
    text: "",
    category: "all",
  });

  const [category, setCategory] = React.useState(카테고리기본값);

  const 카테고리변경 = (클릭한값) => {
    const cloneSearch = { ...search };
    cloneSearch.category = 클릭한값;
    setSearch(cloneSearch);
  };
  const 선택 = () => {
    navigate("/choose");
  };

  return (
    <div>
      <div className="upBar">
        <p>커뮤니티</p>
        <p></p>
        <p></p>
      </div>
      <div className="mainBody">
        <ul className="Menu">
          {category.map((item, index) => {
            const 이미지주소 = `https://tripsoda.com/images/sub/accompany/category/icon_place0${
              index + 1
            }`;
            const 이미지확장자 = index === 0 ? "svg" : "png";

            const 활성화클래스명 =
              search.category === item.value ? "active-category" : "";

            return (
              <li key={`category-${index}`}>
                <button
                  type="button"
                  className={`menu ${활성화클래스명}`}
                  onClick={카테고리변경.bind(this, item.value)}
                >
                  <img src={`${이미지주소}.${이미지확장자}`} alt="zz" />
                </button>
                <p>{item.name}</p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="searchBox">
        <input
          type="text"
          placeholder="동행게시판 내에서 검색해보세요"
          className="inputBox"
        />
        <button>검색</button>
      </div>
      <div>
        <h3 className="ptag">취향저격 동행찾기</h3>
      </div>

      <div className="fliter">
        <select>
          <option>최신순</option>
          <option>조회수</option>
        </select>
        <p></p>
        <div>
          <p className="ptag1">모집중인 글만 보기</p>
          <label class="switch-button">
            <input type="checkbox" />
            <span class="onoff-switch"></span>
          </label>
        </div>
      </div>
      <div className="border">여행게시물 보이기</div>
      <div className="underbar">
        <ul className="underbarImg">
          <li>
            <img
              className="underImg"
              src="	https://tripsoda.com/images/common/foot_menu/home/off.svg"
            />
            <p className="underText">커뮤니티</p>
          </li>
          {/* <li>
            <img
              className="underImg"
              src="https://tripsoda.com/images/common/foot_menu/store/off.svg"
            />
            <p className="underText">여행상점</p>
          </li>
          <li>
            <img
              className="underImg"
              src="https://tripsoda.com/images/common/foot_menu/feed/off.svg"
            />
            <p className="underText">내 피드</p>
          </li>
          <li>
            <img
              className="underImg"
              src="https://tripsoda.com/images/common/foot_menu/talk/off.svg"
            />
            <p className="underText">채팅</p>
          </li> */}
          <li>
            <img
              className="underImg"
              src="https://tripsoda.com/images/common/foot_menu/mypage/off.svg"
            />
            <p className="underText">마이페이지</p>
          </li>
        </ul>
      </div>

      <button className="writing" onClick={선택}>
        <p></p>
      </button>
      <img
        className="pen"
        src="https://cdn-icons-png.flaticon.com/128/1659/1659682.png"
      />
    </div>
  );
}

export default Main;
