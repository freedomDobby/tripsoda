import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import User from "./pages/User";
import Choose from "./pages/Choose";
import ChooseDay from "./pages/ChooseDay";
import Writing from "./pages/Writing";
import Mypage from "./pages/Mypage";

import axios from "axios";

export const StoreContext = React.createContext({});

function App() {
  const [loginUser, setLoginUser] = React.useState({});
  const 자동로그인 = async () => {
    await axios({
      url: "http://localhost:4000/autoLogin",
      method: "POST",
    }).then((response) => {
      setLoginUser(response.data);
    });
  };
  React.useEffect(() => {
    자동로그인();
  }, []);

  // 저장용
  const [data, setData] = React.useState({
    title: "",
    content: "",
    category: "",
    startDate: "",
    endDate: "",
  });

  // const [article, setAticle] = React.useState([]);

  console.log(data);

  return (
    <StoreContext.Provider
      value={{
        loginUser,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Main />} setData={setData} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user" element={<User />} />
        <Route
          exact
          path="/choose"
          element={<Choose data={data} setData={setData} />}
        />
        <Route
          exact
          path="/chooseDay"
          element={<ChooseDay data={data} setData={setData} />}
        />
        <Route
          exact
          path="/writing"
          element={<Writing data={data} setData={setData} />}
        />
        <Route exact path="/mypage" element={<Mypage />} />

        {/* <Route exact path="/oauth/callback/kakao" element={<카카오데이터 />} /> */}
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
