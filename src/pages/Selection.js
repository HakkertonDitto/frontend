import Beneficiary from "../assets/beneficiary.png";
import Requirement from "../assets/requirement.png";
import { Link } from "react-router-dom";

const Selection = () => {
  return (
    <>
      <div className="flex justify-center">
        <div class="w-[360px] h-[800px] relative bg-white">
          <div class="w-[306px] h-[37px] left-[26px] top-[52px] absolute text-center text-neutral-950 text-[22px] font-bold leading-9">
            원하시는 서비스를 선택해주세요.
          </div>

        <Link to="/asker/helpB">
          <div class="w-[300px] h-[287px] left-[30px] top-[118px] absolute justify-center items-center inline-flex">
            <div class="w-[300px] h-[287px] relative">
              <div class= "w-[300px] h-[287px] left-0 top-0 absolute bg-white rounded-[50px] border border-neutral-200"></div>
              
              <img
                class="w-[150px] h-[150px] left-[125px] top-[98px] absolute"
                src={Requirement}
                alt="requirement"
              />
              <div class="w-[190px] h-[39px] left-[35px] top-[39px] absolute text-neutral-950 font-bold leading-3"
                style={{lineHeight: "1.5em", fontSize: "1.5em", wordBreak: "keep-all"}}
              >
                기술 도움 요청하기
              </div>
            </div>
          </div>
          </Link>

          <div class="w-[330px] h-[10px] left-[15px] top-[440px] absolute border-t-4 border-solid border-black border-opacity-10"></div>

          <Link to="/donor/login">
            <div class="w-[300px] h-[287px] left-[30px] top-[475px] absolute justify-center items-center inline-flex">
              <div class="w-[300px] h-[287px] relative">
                <div class= "w-[300px] h-[287px] left-0 top-0 absolute bg-white rounded-[50px] border border-neutral-200"></div>
                <img
                  class="w-[150px] h-[150px] left-[125px] top-[103px] absolute"
                  src={Beneficiary}
                  alt="beneficiary"
                />
                <div class="w-[190px] h-[39px] left-[35px] top-[41px] absolute text-neutral-950 text-[25px] font-bold leading-3">
                  기술 도움 드리기
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Selection;
