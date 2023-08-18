import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import axios from "axios";

const MyPage = () => {
  const helperId = 1;
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/help/helper/${helperId}`)
      .then((response) => {
        setUserData(response.data);
        setIsLoading(false); // 데이터를 받아왔으므로 로딩 상태 변경
      })
      .catch((error) => {
        // 에러 발생 시 처리
        console.error(error);
        setIsLoading(false); // 에러 발생하더라도 로딩 상태 변경
      });
  }, []);

  return (
    <>
      {isLoading ? (
        "로딩 중..." // 데이터를 받아오는 동안 로딩 중을 표시
      ) : (
        <div className="flex justify-center">
          <div className="w-[360px] h-[800px] relative bg-white">
            <div className="mt-5">
              <div className="px-4">
                <fieldset className="mx-auto max-w-md bg-white py-8 text-md">
                  {/* 뒤로 가기 */}
                  <Link to="/donor/home">
                    <div className="my-6 mx-1">
                      <IoChevronBackOutline size="25" />
                    </div>
                  </Link>

                  {/* 이름 (닉네임) */}
                  <div className="mx-3 flex-col justify-center items-start inline-flex">
                    <div className="text-black text-[26px] font-normal leading-7">
                      안녕하세요!
                    </div>
                    <p className="text-[26px]">
                      <span className="text-black font-black leading-9">
                        김디토
                      </span>
                      님
                    </p>
                  </div>

                  {/* 내 평점 칸 */}
                  <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px]  bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
                      <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                        내 평점
                      </div>
                      <div className="w-[75px] text-right">
                        <span className="text-black text-base font-bold leading-9">
                          {userData.averageScore.toFixed(1)}
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

                  {/* 내가 받은 평가 칸 */}
                  <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
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

                  {/* 내가 봉사한 횟수 칸 */}
                  <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                      <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                        내가 봉사한 횟수
                      </div>
                      <div className="w-[75px] text-right">
                        <span className="text-black text-[17px] font-bold leading-9">
                          {userData.helpCount}
                        </span>
                        <span className="text-black text-[17px] font-normal leading-9">
                          번
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 내 포인트 칸 */}
                  <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
                    <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
                      <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                        내 포인트
                      </div>
                      <div className="w-[75px] text-right">
                        <span className="text-black text-[17px] font-bold leading-9">
                          {userData.point}
                        </span>
                        <span className="text-black text-[17px] font-normal leading-9">
                          점
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* 1365 시간 옮기는 칸 */}
                  <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
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
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPage;
