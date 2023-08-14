import { useNavigate } from "react-router-dom";
import Call from "../../assets/call.png";
import Backarrow from "../../assets/backarrow.png";
import { useEffect } from "react";
import Background from "../../components/Background";
const Loading = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate("/asker/ready");
    }, 2000);
    //통화 연결되면 그거에 맞춰 이동.우선은 2초로.

    return () => {
      clearTimeout(timeout);
    };
  }, [navigate]);

  return (
    <div className="flex justify-center">
      <div className=" w-[360px] h-[800px] relative bg-white">
        <Background style={{ margin: "0 auto" }}>
          <img
            className="ImageRemovebgPreview102 w-[41px] h-9 left-[20px] top-[18px] absolute origin-top-left "
            src={Backarrow}
            alt="backarrow"
            onClick={() => {
              navigate(-1);
            }}
          />
          <div className=" w-[304px] h-[37px] left-[28px] top-[176px] absolute text-center text-neutral-950 text-[32px] font-bold leading-9">
            접수가 완료되었습니다!
          </div>
          <div className=" w-[272px] left-[44px] top-[487px] absolute text-center text-neutral-950 text-[28px] font-bold leading-9">
            봉사자가 연결될 때 까지 잠시만 기다려주십시오.
          </div>
          <img
            className="PhoneRingingDynamicColor w-[180px] h-[180px] left-[91px] top-[260px] absolute"
            src={Call}
            alt="call"
          />
        </Background>
      </div>
    </div>
  );
};

export default Loading;
