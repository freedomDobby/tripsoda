import axios from "axios";
import React from "react";
import "./Login.css";
import qs from "qs";

import { useNavigate } from "react-router-dom";

axios.defaults.withCredentials = true;

function Login() {
  const code = new URL(window.location.href).searchParams.get("code");

  const getKAKAO = async () => {
    const data = qs.stringify({
      grant_type: "authorization_code",
      client_id: REST_API_KEY,
      redirect_uri: REDIRECT_URI,
      code: code,
      client_secret: JAVASCRIPT_KEY,
    });

    const result = await axios({
      method: "POST",
      url: "https://kauth.kakao.com/oauth/token",
      data: data,
    });

    // kakao Javascript SDK 초기화
    window.Kakao.init(REST_API_KEY);

    window.Kakao.Auth.setAccessToken(result.data.access_token);

    const kakaoData = await window.Kakao.API.request({
      url: "/v2/user/me",
    });

    /**
     * 1.
     *  - 우리 Node.js 호출 !
     *  - kakaData 넣어주기~
     * 2.
     *  - LocalStorage 사용
     * 3.
     *  - 전역변수 설정 LoginUser !
     */
  };

  React.useEffect(() => {
    getKAKAO();
  }, []);

  const navigate = useNavigate();
  const [data, setData] = React.useState({
    id: "",
    pw: "",
  });

  const join = () => {
    navigate("/join");
  };

  const 데이터변경 = (event) => {
    const cloneData = { ...data };
    cloneData[event.target.name] = event.target.value;
    setData(cloneData);
    console.log(setData);
  };

  const 카카오데이터받는곳 = () => {
    console.log("카카오 로그인 준비");
  };

  const REST_API_KEY = "640b9c2bbf48823e322eb371edbfc921";
  const JAVASCRIPT_KEY = "85d088ae90f257b31a92f65b5eff4a16";
  const REDIRECT_URI = "http://localhost:3000/oauth/callback/kakao";

  const 카카오소셜로그인링크 = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const 카카오로그인 = () => {
    window.loaction.href = 카카오소셜로그인링크;
  };

  const 로그인 = async () => {
    await axios({
      url: "http://localhost:4000/login",
      method: "POST",
      data: data,
    })
      .then((res) => {
        alert(res.data.message);
        if (res.data.code === "success") {
          window.location.href = "/";
        }
      })
      .catch((e) => {
        console.log("로그인오류");
      });
  };

  return (
    <div className="">
      <div className="upBar">
        <button>/</button>
        <p>로그인</p>
        <p></p>
      </div>
      <div className="section_login">
        <div className="ment">
          <p className="text_desc">동행부터 투어까지</p>
          <p className="text_desc">마음에 쏙 드는 여행 참 어렵죠?</p>
        </div>

        <img
          className="cat"
          src="https://tripsoda.com/images/sub/member/img_analysis_charactor_wego.png"
        ></img>
        <p className="ment1">내 취향에 딱 맞는 여행, 트립소다</p>
        <div className="login_btn">
          <button className="btn_join join_kakao" onClick={카카오로그인}>
            <img src="https://tripsoda.com/images/common/icon/join_kakao.svg"></img>
            <p>카카오로 간편 로그인</p>
          </button>
          <button className="btn_join join_email">
            이메일 또는 전화번호로 로그인
          </button>
        </div>
        <div className="join_step">
          <p>아직 계정이 없으신가요?</p>
          <button className="btn_login" onClick={join}>
            <p>회원가입</p>
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

export default Login;
