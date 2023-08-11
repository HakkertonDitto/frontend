import { Link, Navigate, useNavigate } from "react-router-dom";
import Check from "../../assets/check.png";
import Backarrow from "../../assets/backarrow.png";

const Ready = () => {
    const navigate =useNavigate();
    return (

        <div className="flex justify-center">
            <div className=" w-[360px] h-[800px] relative bg-white">
                <div className="Background w-[465px] h-[303px] left-[-52px] top-[714px] absolute opacity-70 bg-teal-500 blur-[250px]" />
                <img className="ImageRemovebgPreview102 w-[41px] h-9 left-[20px] top-[18px] absolute origin-top-left " src={Backarrow} alt="backarrow" onClick={() => {
                        navigate(-1)
                    }} />
                <div className=" w-[304px] h-[37px] left-[29px] top-[193px] absolute text-center text-neutral-950 text-[32px] font-bold leading-9">연결이 준비되었습니다.</div>
                <img className="TickDynamicColor w-[250px] h-[180px] left-[50px] top-[277px] absolute" src={Check} alt="check" />
                 <Link to={"/#"}>{/*영상통화 구현 후 연결 */}
                <div className="ControlsButtons w-[327px] h-12 py-4 left-[18px] top-[504px] absolute bg-emerald-400 rounded-[48px] justify-center items-center inline-flex">
                    <div className="Text text-center text-white text-base font-bold leading-none">연결하기</div>
                </div>
                </Link>
            </div>
        </div>
    )
}
export default Ready;