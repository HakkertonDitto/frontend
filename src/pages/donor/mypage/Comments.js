import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IoChevronBackOutline } from "react-icons/io5";

const Comments = () => {
  const [donorData, setDonorData] = useState({});
  const donorId = 1; // 원하는 도네이션자 ID
  const dummyDonorData = [
    {
      comment: "감사합니다!",
      score: 5,
    },
    {
      comment: "많은 도움이 되었어요.",
      score: 4,
    },
    {
      comment: "좋아요!",
      score: 5,
    },
    {
      comment: "도움 감사합니다!",
      score: 4,
    },
    {
      comment: "매우 고마워요.",
      score: 5,
    },
    {
      comment: "정말 도움이 되었습니다.",
      score: 4,
    },
    {
      comment: "빠른 대응 감사합니다!",
      score: 5,
    },
    {
      comment: "매우 편리했습니다.",
      score: 4,
    },
    {
      comment: "또 이용하고 싶어요!",
      score: 5,
    },
    {
      comment: "감사합니다.",
      score: 4,
    },
    {
      comment: "도움을 받아서 좋았어요.",
      score: 5,
    },
    {
      comment: "매우 만족합니다.",
      score: 4,
    },
    {
      comment: "감사합니다!",
      score: 5,
    },
    {
      comment: "도움 감사합니다!",
      score: 5,
    },
    {
      comment: "정말 고마워요!",
      score: 4,
    },
    {
      comment: "너무 좋았어요.",
      score: 5,
    },
    {
      comment: "감사합니다!",
      score: 5,
    },
    {
      comment: "매우 만족합니다.",
      score: 4,
    },
    {
      comment: "훌륭한 서비스였습니다.",
      score: 5,
    },
    {
      comment: "최고의 도움을 주셨어요!",
      score: 5,
    },
  ];

  useEffect(() => {
    // API 주소
    const apiUrl = `http://localhost:8080/api/donor/${donorId}`;

    // Axios를 사용하여 데이터 가져오기
    axios
      .get(apiUrl)
      .then((response) => {
        setDonorData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching donor data:", error);
      });
  }, [donorId]);

  // console.log(donorData);

  return (
    <>
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
                      {dummyDonorData.length}회
                    </div>
                  </div>
                </div>

                {/* 코멘트 컴포넌트 / 현재는 dummy */}
                {dummyDonorData.map((data) => (
                  <div
                    key={data.id}
                    className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex"
                  >
                    <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                      <div className="w-[170px] text-black text-[17px] font-normal leading-9">
                        {data.comment}
                      </div>
                      <div className="w-[55px] text-right text-black text-[17px] font-bold leading-9">
                        {data.score.toFixed(1)}
                      </div>
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
    </>
  );
};

export default Comments;
