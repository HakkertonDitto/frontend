import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Backarrow from "../../assets/backarrow.png";
import Software from "../../assets/software.png";
import Internet from "../../assets/internet.png";
import Onoff from "../../assets/onoff.png";
import Magnifier from "../../assets/magnifier.png";


const HelpS = () => {

    const [isClicked, setClicked] = useState(false);
    const handleClicked = () => {
        return (
            setClicked(!isClicked)
        )

    }
    const newStyle = `Rectangle215 w-[160.06px] h-[157px] left-0 top-0 absolute ${isClicked ? 'bg-customColor' : 'bg-white'} rounded-[20px] border border-neutral-200`;
    const navigate = useNavigate();
    return (
        <div className="flex justify-center">
            <div className="AskerHelps w-[360px] h-[800px] relative bg-white">
                {/* 그라데이션 */}
                <div className="Background w-[465px] h-[303px] left-[-75px] top-[715px] absolute opacity-70 bg-teal-500 blur-[250px]" />
                {/* 위에 흰 네모 박스 */}
                <div className=" w-[360px] h-[148px] left-0 top-0 absolute bg-white">
                    
                    <div className="BarsNavBarsStandard w-[360px] h-12 left-0 top-[8px] absolute bg-white" />
                    <img className="ImageRemovebgPreview102 w-[41px] h-9 left-[20px] top-[18px] absolute origin-top-left " src={Backarrow} alt="backarrow" onClick={() => {
                        navigate(-1)
                    }} />
                     <div className=" w-[271px] left-[46px] top-[95px] absolute text-center text-neutral-950 text-[28px] font-bold leading-9">어느 점이 불편하세요?</div>
                    <div className="ViewsProgressBarsFullwidth w-[314px] h-1 pr-[157px] left-[23px] top-[74px] absolute  bg-zinc-200 justify-start items-center inline-flex">
                        <div className="Indicator w-[157px] h-1 bg-emerald-400" />
                    </div>
                   
                </div>

                {/* 솦웨어 설치 삭제 */}
                <div className="Group95 w-[281.57px] h-[157px] left-[15px] top-[219px] absolute">
                    <div className="Rectangle211 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
                    <img className="ImageRemovebgPreview81 w-[170px] h-[101px] left-[20px] top-[53px] absolute" src={Software} alt="software" />
                    <div className=" w-[266.57px] h-9 left-[15px] top-[26px] absolute text-neutral-950 text-[25px] font-bold leading-3">소프트웨어<br />설치 및 삭제</div>
                </div>

                {/* 인터넷 연결 */}
                <div className="Group94 w-[281.57px] h-[158.60px] left-[186px] top-[219px] absolute">
                    <div className="Rectangle213 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
                    <img className="ImageRemovebgPreview91 w-[79px] h-[76px] left-[55px] top-[62px] absolute" src={Internet} alt="internet" />
                    <div className=" w-[266.57px] h-9 left-[15px] top-[30px] absolute text-neutral-950 text-[25px] font-bold leading-3">인터넷 연결<br /></div>
                </div>
                {/* 전원 문제 */}
                <div className="Group96 w-[303px] h-[157px] left-[16px] top-[400px] absolute">
                    <div className="Rectangle212 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
                    <div className=" w-[286px] h-[39px] left-[17px] top-[18px] absolute text-neutral-950 text-[25px] font-bold leading-3">전원 문제</div>
                    <img className="ImageRemovebgPreview101 w-[70px] h-[66px] left-[70px] top-[67px] absolute" src={Onoff} alt="onoff" />
                </div>

                {/* 기타 문의 사항 */}
                <div className="Group97 w-[309px] h-[157px] left-[186px] top-[400px] absolute">
                    <div className={newStyle} onClick={() => {
                        handleClicked()
                    }} />
                    <div className=" w-[286px] h-[39px] left-[23px] top-[26px] absolute text-neutral-950 text-[25px] font-bold leading-3">기타 <br />문의 사항</div>
                    <img className="ImageRemovebgPreview111 w-[90px] h-[75px] left-[56px] top-[68px] absolute" src={Magnifier} alt="magnifier" />
                </div>
                {/* 선택하기 버튼 */}
                <Link to="/asker/HelpDetail" >
                    <div className="ControlsButtons w-[327px] h-12 py-4 left-[17px] top-[715px] absolute bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
                        <div className="Text text-center text-white text-base font-bold leading-none">선택하기</div>
                    </div>
                </Link>



            </div>
        </div>
    )
}
export default HelpS;