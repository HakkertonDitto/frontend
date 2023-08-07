import { Route, Routes } from "react-router-dom";
import "./App.css";

import LogoPage from "./pages/LogoPage";
import TestPage from "./pages/TestPage";
import Home from "./pages/donor/Home";

function App() {
  return (
    <div className="App">
      {/* 테스트 문구-현재 어플에 이 문구 뜸 */}
      Ditto Frontend start
      {/* 라우터 주소는 협의 후 결정하는걸로 */}
      <Routes>
        <Route path="/logo" element={<LogoPage></LogoPage>}></Route>
        <Route path="/test" element={<TestPage></TestPage>}></Route>
        <Route path="/donor/home" element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
