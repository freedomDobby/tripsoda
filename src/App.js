import React from "react";
import { Routes, Route, useNavigate, useParams } from "react-router-dom";
import "./App.css";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Join from "./pages/Join";
import User from "./pages/User";
import Choose from "./pages/Choose";
import Writing from "./pages/Writing";
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

  return (
    <StoreContext.Provider
      value={{
        loginUser,
      }}
    >
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/choose" element={<Choose />} />
        <Route exact path="/writing" element={<Writing />} />

        {/* <Route exact path="/oauth/callback/kakao" element={<카카오데이터 />} /> */}
      </Routes>
    </StoreContext.Provider>
  );
}

export default App;
