import "../styles/Logo.css";
import logo from "../assets/logo.jpg";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logo = () => {
  const navigate = useNavigate();
  const timeout = () => {
    setTimeout(() => {
      navigate("./selection");
    }, 2000);
  };
  useEffect(() => {
    timeout();
    return () => {
      clearTimeout(timeout);
    };
  });

  return (
    <div className="flex justify-center">
      <div className="w-[360px] h-[800px] relative bg-white">
        <img
          className="w-[430px] h-[800px] left-0 top-0 absolute blur-sm"
          src={logo}
          alt="logo"
        />
        <div className="w-[327px] left-[17px] top-[340px] absolute text-center text-teal-200 text-4xl font-black leading-9">
          디토
        </div>
        <div className="w-[327px] left-[17px] top-[390px] absolute text-center">
          <span className="text-teal-200 text-2xl font-black leading-9">
            디
          </span>
          <span className="text-white text-2xl font-black leading-9">
            지털 장벽 완화의{" "}
          </span>
          <span className="text-teal-200 text-2xl font-black leading-9">
            토
          </span>
          <span className="text-white text-2xl font-black leading-9">대</span>
        </div>
      </div>
    </div>
  );
};

export default Logo;
