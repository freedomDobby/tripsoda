import axios from "axios";
import React from "react";

import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Join() {
  const navigate = useNavigate();
  const [data, setData] = React.useState({
    id: "",
    pw: "",
  });

  const login = () => {
    navigate("/login");
  };

  const 데이터변경 = (event) => {
    const cloneData = { ...data };
    cloneData[event.target.name] = event.target.value;
    setData(cloneData);
    console.log(setData);
  };

  const 회원가입 = async () => {
    await axios({
      url: "http://localhost:4000/join",
      method: "POST",
      data: data,
    })
      .then((res) => {
        const { code, message } = res.data;
        if (code === "success") {
          alert(message);
          navigate("/login");
        }
      })
      .catch((e) => {
        console.log("회원가입 오류");
      });
  };

  return (
    <div>
      <div className="upBar">
        <button type="button" className="pageMove"></button>
        <p>회원가입</p>
        <p></p>
      </div>
      <div className="section_login">
        <div className="ment">
          <p className="text_desc">동행부터 투어까지</p>
          <p className="text_desc">마음에 쏙 드는 여행 참 어렵죠?</p>
        </div>

        <img
          className="cat"
          src="https://tripsoda.com/images/sub/member/img_analysis_charactor_tommy.png"
        ></img>
        <p className="ment1">내 취향에 딱 맞는 여행, 트립소다</p>
        <div className="login_btn">
          <button className="btn_join join_kakao">
            <img src="https://tripsoda.com/images/common/icon/join_kakao.svg"></img>
            <p>카카오로 간편 회원가입</p>
          </button>
          <button className="btn_join join_email">
            이메일 또는 전화번호로 회원가입
          </button>
        </div>
        <div className="join_step">
          <p>이미 계정이 있으신가요?</p>
          <button className="btn_login" onClick={login}>
            <p>로그인</p>
          </button>
        </div>
        {/* <input
          type="text"
          name="id"
          className="idInput"
          placeholder="아이디"
          onChange={데이터변경}
        ></input>

        <input
          type="password"
          name="pw"
          placeholder="비밀번호"
          onChange={데이터변경}
        ></input>
        <button type="button" onClick={회원가입}>
          회원가입
        </button> */}
      </div>
    </div>
  );
}

export default Join;
