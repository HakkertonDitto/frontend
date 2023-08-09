
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
    <div className="Question-wrapper relative bg-white w-full h-screen">
      <img
        className="w-full h-full object-cover absolute blur-sm"
        src={logo}
        alt="logo"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-teal-200 text-4xl font-black leading-9">디토</div>
        <div className="text-center">
          <span className="text-teal-200 text-2xl font-black leading-9">디</span>
          <span className="text-white text-2xl font-black leading-9">
            지털 장벽 완화의{" "}
          </span>
          <span className="text-teal-200 text-2xl font-black leading-9">토</span>
          <span className="text-white text-2xl font-black leading-9">대</span>
        </div>
      </div>
    </div>
  </div>
  
  

  
  );
};

export default Logo;
