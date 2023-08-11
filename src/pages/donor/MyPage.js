import { Link } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

const MyPage = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[360px] h-[800px] relative bg-white">
          {/* 뒤로 가기 */}
          <Link to="/donor/home">
            <div className="left-[20px] top-[32px] absolute">
              <IoChevronBackOutline size="25" />
            </div>
          </Link>

          {/* 이름 (닉네임) */}
          <div className="pr-[170px] left-[27px] top-[86px] absolute flex-col justify-center items-start inline-flex">
            <div className="text-black text-[28px] font-normal leading-7">
              안녕하세요!
            </div>
            <div className="text-black text-[28px] font-semibold leading-9">
              김디토님
            </div>
          </div>

          {/* 내 평점 칸 */}
          <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] left-[20px] top-[163px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                내 평점
              </div>
              <div className="w-[75px] text-right">
                <span className="text-black text-base font-bold leading-9">
                  4.87{" "}
                </span>
                <span className="text-black text-base font-normal leading-9">
                  /
                </span>
                <span className="text-black text-base font-bold leading-9">
                  {" "}
                </span>
                <span className="text-black text-base font-normal leading-9">
                  5.0
                </span>
              </div>
            </div>
          </div>

          {/* 내가 봉사한 횟수 칸 */}
          <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] left-[20px] top-[238px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                내가 봉사한 횟수
              </div>
              <div className="w-[75px] text-right">
                <span className="text-black text-[17px] font-bold leading-9">
                  26
                </span>
                <span className="text-black text-[17px] font-normal leading-9">
                  번
                </span>
              </div>
            </div>
          </div>

          {/* 내 포인트 칸 */}
          <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] left-[20px] top-[313px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                내 포인트
              </div>
              <div className="w-[75px] text-right">
                <span className="text-black text-[17px] font-bold leading-9">
                  1050
                </span>
                <span className="text-black text-[17px] font-normal leading-9">
                  점
                </span>
              </div>
            </div>
          </div>

          {/* 1365 시간 옮기는 칸 */}
          <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] left-[20px] top-[388px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[110px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                1365로 시간 옮기기
              </div>
              <Link to="https://www.1365.go.kr/vols/P9910/mber/volsLogin.do">
                <div className="w-[35px] top-[5px] relative">
                  <IoChevronForwardOutline size="25" />
                </div>
              </Link>
            </div>
          </div>

          {/* 내가 받은 평가 칸 */}
          <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] left-[20px] top-[463px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-start items-center gap-[110px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                내가 받은 평가 보기
              </div>
              <Link to="/donor/mypage/comments">
                <div className="w-[35px] relative">
                  <IoChevronForwardOutline size="25" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPage;
