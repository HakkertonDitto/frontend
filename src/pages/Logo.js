import Logoimage from "../assets/logoimage.png";
import Logoicon from "../assets/logo.png";
import Logo2 from "../assets/logo2.png";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Logo.css";

const Logo = () => {
  const navigate = useNavigate();

  const typingTxt = "지털 장벽 완화의";
  const [landingTxt, setLandingTxt] = useState("");
  const [count, setCount] = useState(0);

  const typingTxt1 = "대";
  const [landingTxt1, setLandingTxt1] = useState("");
  const [count1, setCount1] = useState(0);

  const [isAnimating, setIsAnimating] = useState(true);
  const [deleteItem, setDeleteItem] = useState(true);
  //디지털 장벽 완회의 토대 타이핑 기능
  useEffect(() => {
    const time = setTimeout(() => {
      if (count >= typingTxt.length) {
        return;
      }

      setLandingTxt((prev) => {
        let result = prev ? prev + typingTxt[count] : typingTxt[0];
        setCount((prev) => prev + 1);
        return result;
      });
    }, 200);

    return () => {
      clearTimeout(time);
    };
  }, [count]);

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
      };
    }
  }, [count1, count]);
  //타이핑 끝나면 디토로 바뀌기
  useEffect(() => {
    if (count1 >= typingTxt1.length && count >= typingTxt.length) {
      setTimeout(() => {
        setIsAnimating(false);
        setDeleteItem(false);
      }, 1500);
    }
  }, [count1, count]);


// 홈화면
 useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/selection");
    }, 5000); // 5초 후에 홈 화면으로 이동

    return () => {
      clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 해제
    };
  }, [navigate]);


 

  return (
    <div className="flex justify-center">
      <div className="Question-wrapper relative bg-white w-full h-screen">
        <img
          className="w-full h-full object-cover absolute "
          src={Logo2}
          alt="logoimage"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            className="logoimage w-40 h-40 top-[30vh] absolute "
            src={Logoicon}
          />
          {deleteItem ? (
            <div className="text-center flex items-center">
              <span className="text-emerald-400 text-2xl font-black leading-9">
                디
              </span>
              <span className="text-white text-2xl font-black leading-9 ">
                {landingTxt}{" "}
              </span>
              <span className="text-emerald-400 text-2xl font-black leading-9 ml-3">
                토
              </span>
              <span className="text-white text-2xl font-black leading-9">
                {landingTxt1}{" "}
              </span>
            </div>
          ) : null}
          <div className="logo-text absolute inset-0 flex flex-col items-center justify-center">
            {isAnimating ? null : (
              <span className="green-text absolute ">디토</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
