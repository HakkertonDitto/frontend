import logo from "../assets/logo.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logo.css";


const Logo = () => {
  const navigate = useNavigate();

 

// 디지털 장벽완화의 타이핑 효과
const typingTxt = "지털   장 벽   완 화 의   ";
  const [landingTxt, setLandingTxt] = useState("");
  const [count, setCount] = useState(0);

  const typingTxt1 = "대";
  const [landingTxt1,setLandingTxt1]=useState("")
  const [count1, setCount1] = useState(0);
  
  
  useEffect(() => {
    const time = setTimeout(() => {
      if (count >= typingTxt.length) {
        return;
      }

      setLandingTxt((prev) => {
        let result = prev ? prev + typingTxt[count] : typingTxt[0];

        setCount((prev) => prev + 1 );
        return result;
      });
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [count]);
//여기까지 디지털 장벽 완화의
useEffect(() => {
  if (count >= typingTxt.length) {
    const time1 = setTimeout(() => {
      if (count1 >= typingTxt1.length) {
        return;
      }

      setLandingTxt1((prev) => {
        let result = prev ? prev + typingTxt1[count1] : typingTxt1[0];

        setCount1((prev) => prev + 1);
        return result;
      });
    }, 200);

  return () => {
    clearTimeout(time1);
  };}
}, [count1,count]);

//여기까지 따라써봄

 

useEffect(() => {
  if (count1 >= typingTxt1.length && count >= typingTxt.length) {
    setTimeout(() => {
      navigate("./selection");
    }, 1500);
  }
}, [count1, count, navigate]);


  
  return (
    <div className="flex justify-center">
    <div className="Question-wrapper relative bg-white w-full h-screen">
      <img
        className="w-full h-full object-cover absolute blur-sm"
        src={logo}
        alt="logo"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
        
        </div>
        <div className="text-center flex items-center">
          <span className="text-teal-200 text-2xl font-black leading-9">
            디
          </span>
          <span className="text-white text-2xl font-black leading-9 ">
            {landingTxt}{" "}
          </span>
          <span className="text-teal-200 text-2xl font-black leading-9 ml-3">
            토
          </span>
          <span className="text-white text-2xl font-black leading-9 ">
            {landingTxt1}{" "}
          </span>
        </div>
        
         
        
      </div>
    </div>
  </div>
  

    
  );
};

export default Logo;