import { Route, Routes } from "react-router-dom";
import "./App.css";

import LogoPage from "./pages/LogoPage";
import TestPage from "./pages/TestPage";
import Home from "./pages/donor/Home";
import Login from "./pages/donor/Login";

function App() {
  return (
    <div className="App">
      {/* 라우터 주소는 협의 후 결정하는걸로 */}
      <Routes>
        <Route path="/logo" element={<LogoPage></LogoPage>}></Route>
        <Route path="/test" element={<TestPage></TestPage>}></Route>

        {/* 도움 주는 사람 */}
        <Route path="/donor/login" element={<Login></Login>}></Route>
        <Route path="/donor/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
