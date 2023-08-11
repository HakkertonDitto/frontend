import Smartphone from "../../assets/smartphone.png";
import Laptop from "../../assets/laptop.png";
import Kiosk from "../../assets/kiosk.png";
import TV from "../../assets/TV.png";
import Backarrow from "../../assets/backarrow.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
const HelpB = () => {
const [isClicked,setClicked]=useState(false);
const ChangeColor = ()=>{
    setClicked(!isClicked)
}
const newStyle = `Rectangle211 w-[160.06px] h-[157px] left-0 top-0 absolute ${isClicked ? 'bg-customColor':'bg-white'} rounded-[20px] border border-neutral-200`
const navigate=useNavigate()

    return (
        <div className="flex justify-center">
        <div className="AskerHelpb w-[360px] h-[800px] relative bg-white">

            {/* 그라데이션 */}
            <div className="Background w-[465px] h-[303px] left-[-75px] top-[815px] absolute opacity-70 bg-teal-500 blur-[250px]" />

            {/* 상단 하얀 덩어리 구역 */}
            <div className=" w-[360px] h-[148px] left-0 top-0 absolute bg-white">
                
                
                <div className="LeftActionable w-6 h-6 py-1.5 justify-center items-center inline-flex" />
                
                <div className="ViewsProgressBars w-[314px] h-1 pr-[282.60px] left-[23px] top-[74px] absolute bg-gray-200 rounded-[100px] justify-start items-center inline-flex">
                    <div className="Indicator w-[31.40px] h-1 bg-emerald-400 rounded-[100px]" />
                </div>
                <div className="BarsNavBarsStandard w-[360px] h-12 pl-[18px] pr-[318px] py-3 left-0 top-[8px] absolute bg-white justify-start items-center inline-flex">
                    <div className="LeftActionable w-6 h-6 py-1.5 justify-center items-center inline-flex" />
                    <img className="ImageRemovebgPreview102 w-[41px] h-9 left-[20px] top-[10px] absolute origin-top-left "src={Backarrow} 
                alt="backarrow" onClick={()=>{navigate(-1)}}/>
                </div>
                <div className=" w-[271px] left-[47px] top-[95px] absolute text-neutral-950 text-[28px] font-bold leading-9">어떤 것을 도와드릴까요?</div>
            </div>

            {/* 스마트폰 및 태블릿 */}
           
            <div className="Smartphone w-[300px] h-[157px] left-[16px] top-[396px] absolute">
                
                <div className="Rectangle212 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
                <div className=" w-[286px] h-[39px] left-[14px] top-[23px] absolute text-neutral-950 text-[25px] font-bold leading-3">스마트폰 및<br />태블릿</div>
                <img className="ImageRemovebgPreview61 w-[72px] h-[92px] left-[80px] top-[57px] absolute" 
                src={Smartphone}
                alt="smartphone" />
            </div>
            

            {/* 컴 및 놋북 */}
           
            <div className="Group95 w-[280.57px] h-[157px] left-[16px] top-[215px] absolute">
                <div className={newStyle} onClick={ChangeColor}/>
                <img className="ImageRemovebgPreview62 w-[92px] h-[72px] left-[55px] top-[71px] absolute" 
                src={Laptop}
                alt="laptop" />
                <div className=" w-[266.57px] h-9 left-[14px] top-[26px] absolute text-neutral-950 text-[25px] font-bold leading-3">컴퓨터 및<br />노트북</div>
            </div>
            

            {/* 키오스크 */}
            <div className="Group94 w-[281.57px] h-[158.60px] left-[186px] top-[215px] absolute">
                <div className="Rectangle213 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200"/>
                <div className=" w-[266.57px] h-9 left-[15px] top-[17px] absolute text-neutral-950 text-[25px] font-bold leading-3">키오스크</div>
                <img className="ImageRemovebgPreview71 w-[80.16px] h-[98.82px] left-[67.56px] top-[44.48px] absolute" 
                src={Kiosk}
                alt="kiosk"/>
            </div>

            {/* 스마트TV */}
            <div className="Tv w-[301px] h-[157px] left-[186px] top-[396px] absolute">
                <div className="Rectangle215 w-[160.06px] h-[157px] left-0 top-0 absolute bg-white rounded-[20px] border border-neutral-200" />
                <div className="Tv w-[286px] h-[39px] left-[15px] top-[18px] absolute text-neutral-950 text-[25px] font-bold leading-3">스마트TV</div>
                <img className="Tv1 w-[99px] h-[84px] left-[49px] top-[57px] absolute" 
                src={TV}
                alt="TV" />
            </div>

            {/* 선택하기 버튼 */}
            <Link to="/asker/HelpS" >
            <div className="ControlsButtons w-[327px] h-12 py-4 left-[17px] top-[715px] absolute bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
                <div className="Text text-center text-white text-base font-bold leading-none">선택하기</div>
            </div>
            </Link>


            </div>
        </div>
    )
}

export default HelpB;
