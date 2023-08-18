import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoChevronBackOutline } from "react-icons/io5";

const Comments = () => {
  const [donorData, setDonorData] = useState();
  const helperId = 1; // 원하는 도네이션자 ID

  useEffect(() => {
    axios
      .get(`http://localhost:8080/help/helper/${helperId}/donor`)
      .then((response) => {
        setDonorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching donor data:", error);
      });
  }, [helperId]);

  return (
    <div className="flex justify-center">
      <div className="w-[360px] h-[800px] relative bg-white">
        <div className="mt-5">
          <div className="px-4">
            <fieldset className="mx-auto max-w-md bg-white py-8 text-md">
              {/* 뒤로 가기 */}
              <Link to="/donor/mypage">
                <div className="my-6 mx-1">
                  <IoChevronBackOutline size="25" />
                </div>
              </Link>

              {/* 이름 컴포넌트 */}
              <div className="mx-3 pr-[178px] flex-col justify-center items-start inline-flex">
                <div className="text-black text-[26px] font-normal leading-7">
                  김디토님이
                </div>
                <div className="text-black text-[26px] font-semibold leading-9">
                  받은 평가
                </div>
              </div>

              {/* 총 평가 횟수 */}
              <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] bg-white border-b border-black justify-center items-center inline-flex">
                <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
                  <div className="w-[170px] text-black text-[17px] font-normal leading-9">
                    총 평가 횟수
                  </div>
                  <div className="w-[55px] text-right text-black text-base font-bold leading-9">
                    {donorData && donorData.length}회
                  </div>
                </div>
              </div>

              {/* 코멘트 컴포넌트 / 현재는 dummy */}
              {donorData &&
                donorData.map((data) => (
                  <div
                    key={data.id}
                    className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex"
                  >
                    <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                      <div className="w-[170px] text-black text-[17px] font-normal leading-9">
                        {data.comment}
                      </div>
                      <div className="w-[55px] text-right text-black text-[17px] font-bold leading-9"></div>
                    </div>
                  </div>
                ))}

              {/* <li key={data.id}>
                    <p>통화 시간: {data.callTime}초</p>
                    <p>평점: {data.score}</p>
                    <p>코멘트: {data.comment}</p>
                    <p>사용자 이름: {data.userName}</p>
                  </li> */}

              {/*  */}
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
