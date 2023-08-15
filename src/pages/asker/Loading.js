import { useNavigate } from "react-router-dom";
import Call from "../../assets/call.png";
import Header from "../../components/Background";
import { useEffect } from "react";
import Background from "../../components/Background";
import "../../styles/Loading.css";
const Loading = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const timeout = setTimeout(() => {
  //     navigate("/asker/ready");
  //   }, 2000);
  //   //통화 연결되면 그거에 맞춰 이동.우선은 2초로.

  //   return () => {
  //     clearTimeout(timeout);
  //   };
  // }, [navigate]);

  return (
    <Background style={{ margin: "0 auto" }}>
         <Header />
      <div className="loading-container">
      


        <div className="text-box">
        

          <span className="title">접수가 완료되었습니다!</span>
          <img
            className="call"
            src={Call}
            alt="call"
          />
          <span className="subtitle">봉사자가 연결될 때 까지 <br />잠시만 기다려주십시오.</span>
        </div>


      </div>
    </Background>



  );
};

export default Loading;
