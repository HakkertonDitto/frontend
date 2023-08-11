import Backarrow from "../../assets/backarrow.png";
import { useNavigate } from "react-router-dom";
const HelpDetail = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center">
      <div className="AskerHelpdetail w-[360px] h-[800px] relative bg-white">
        {/* 그라데이션 */}
        <div className="Background w-[465px] h-[303px] left-[-75px] top-[715px] absolute opacity-70 bg-teal-500 blur-[250px]" />
        {/* 작성완료버튼 */}
        <div className="ControlsButtons w-[327px] h-12 py-4 left-[18px] top-[715px] absolute bg-emerald-400 rounded-[48px] justify-center items-center inline-flex">
          <div className="Text text-center text-white text-base font-bold leading-none">작성 완료</div>
        </div>
        {/* 글박스 */}
        <div className="ControlsTextFields w-[297px] h-[207px] left-[31px] top-[210px] absolute rounded-lg">
          <div className="Field w-[297px] h-[207px] left-0 top-0 absolute bg-white bg-opacity-20 rounded-lg border border-zinc-200" />
          <input type="text" className="Text w-[265px] left-[16px] top-[17px] absolute text-neutral-950 text-lg font-normal leading-[35px]" placeholder="상세 설명을 입력해주세요."></input>
        {/* 상위하얀박스 */}
        </div>
        <div className=" w-[360px] h-[148px] left-0 top-0 absolute bg-white">
          <div className="BarsNavBarsStandard w-[360px] h-12 pl-[18px] pr-[318px] py-3 left-0 top-[8px] absolute bg-white justify-start items-center inline-flex">
            <img className="ImageRemovebgPreview102 w-[41px] h-9 left-[20px] top-[10px] absolute origin-top-left " src={Backarrow} alt="backarrow" onClick={() => {
              navigate(-1)
            }} />
            <div className="LeftActionable w-6 h-6 py-1.5 justify-center items-center inline-flex" />
          </div>
          {/* 직접 작성해주세요 */}
          <div className=" w-[271px] left-[47px] top-[95px] absolute text-center text-neutral-950 text-[28px] font-bold leading-9">직접 작성해주세요</div>
          <div className="ViewsProgressBars w-[314px] h-1 pr-[62.80px] left-[23px] top-[74px] absolute bg-zinc-200 rounded-[100px] justify-start items-center inline-flex">
            <div className="Indicator w-[251.20px] h-1 bg-emerald-400 rounded-[100px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
export default HelpDetail