import { Route, Routes } from "react-router-dom";
import "./App.css";

import TestPage from "./pages/TestPage";

// 공통
import Logo from "./pages/Logo";
import Selection from "./pages/Selection";

// 도움 주는 사람
import Home from "./pages/donor/Home";
import Login from "./pages/donor/Login";

function App() {
  return (
    <div className="App">
      {/* 라우터 주소는 협의 후 결정하는걸로 */}
      <Routes>
        <Route path="/test" element={<TestPage />}></Route>

        {/* 공통 */}
        <Route path="/" element={<Logo />}></Route>
        <Route path="/selection" element={<Selection />}></Route>

        {/* 도움 주는 사람 */}
        <Route path="/donor/login" element={<Login />}></Route>
        <Route path="/donor/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
