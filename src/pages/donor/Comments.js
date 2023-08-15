import { Link } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

const Comments = () => {
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
                <div className="mx-3 pr-[178px] flex-col justify-center items-start inline-flex">
                  <div className="text-black text-[26px] font-normal leading-7">
                    김디토님이
                  </div>
                  <div className="text-black text-[26px] font-semibold leading-9">
                    받은 평가
                  </div>
                </div>
                <div className="w-80 h-[75px] pl-[13px] pr-3.5 pt-5 pb-[19px] bg-white border-b border-black justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[68px] inline-flex">
                    <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                      총 평가 횟수
                    </div>
                    <div className="w-[75px] text-right text-black text-base font-bold leading-9">
                      4회
                    </div>
                  </div>
                </div>
                <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                    <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                      친절하게 알려줘요
                    </div>
                    <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                      5.0
                    </div>
                  </div>
                </div>
                <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                    <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                      응답이 빨라요
                    </div>
                    <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                      5.0
                    </div>
                  </div>
                </div>
                <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                    <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                      괜찮았어요
                    </div>
                    <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                      4.0
                    </div>
                  </div>
                </div>
                <div className="w-80 h-[75px] px-[13px] pt-5 pb-[19px] bg-white border-b border-black border-opacity-10 justify-center items-center inline-flex">
                  <div className="grow shrink basis-0 self-stretch justify-center items-start gap-[69px] inline-flex">
                    <div className="w-[150px] text-black text-[17px] font-normal leading-9">
                      도움이 많이 됐어요
                    </div>
                    <div className="w-[75px] text-right text-black text-[17px] font-bold leading-9">
                      5.0
                    </div>
                  </div>
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Comments;
