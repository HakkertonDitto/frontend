import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Comments = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-[360px] h-[800px] relative bg-white">
          {/* 뒤로 가기 */}
          <Link to="/donor/mypage">
            <div className="left-[20px] top-[32px] absolute">
              <IoChevronBackOutline size="25" />
            </div>
          </Link>

          <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] left-[20px] top-[163px] absolute bg-white border-b border-black border-opacity-75 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                총 평가 횟수
              </div>
              <div className="w-[75px] text-right text-black text-base font-bold leading-9">
                4회
              </div>
            </div>
          </div>
          <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] left-[20px] top-[238px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                친절하게 알려줘요
              </div>
              <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                5.0
              </div>
            </div>
          </div>
          <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] left-[20px] top-[313px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                응답이 빨라요
              </div>
              <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                5.0
              </div>
            </div>
          </div>
          <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] left-[20px] top-[388px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                괜찮았어요
              </div>
              <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                4.0
              </div>
            </div>
          </div>
          <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] left-[20px] top-[463px] absolute bg-white border-b border-black border-opacity-25 justify-center items-center inline-flex">
            <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
              <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                도움이 많이 됐어요
              </div>
              <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                5.0
              </div>
            </div>
          </div>
          <div className="pr-[178px] left-[27px] top-[86px] absolute flex-col justify-center items-start inline-flex">
            <div className="text-black text-[28px] font-normal leading-7">
              김디토님이
            </div>
            <div className="text-black text-[28px] font-semibold leading-9">
              받은 평가
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
