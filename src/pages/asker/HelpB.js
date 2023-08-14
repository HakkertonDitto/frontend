
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import Smartphone from "../../assets/smartphone.png";
import Laptop from "../../assets/laptop.png";
import Kiosk from "../../assets/kiosk.png";
import TV from "../../assets/TV.png";
import ProgressBar from "../../components/ProgressBar";
import { Title } from "../../components";

import Card from "../../components/Card";
import Background from "../../components/Background";
const HelpB = () => {







    return (

        <div className="flex justify-center relative">

            <div className="AskerHelpb w-[360px] h-[800px] relative bg-white ">
                {/* 그라데이션 */}
                <Background style={{ margin: "0 auto" }}>

                    {/* 상단 하얀 덩어리 구역 */}
                    <div className=" w-[360px] h-[148px] left-0 top-0 absolute bg-white">


                        <Header />
                        <ProgressBar progress={20} />
                        <Title>어떤 것을 도와드릴까요?</Title>
                    </div>


                    <Card Card11={"컴퓨터 및"} Card12={"노트북"} Card21={"키오스크"} Card31={"스마트폰 및"} Card32={"태블릿"} Card41={"스마트TV"}
                        Img1Class={"ImageRemovebgPreview62 w-[92px] h-[72px] left-[55px] top-[71px] absolute"} Img1src={Laptop} Img1alt={"laptop"}
                        Img2Class={"ImageRemovebgPreview71 w-[80.16px] h-[98.82px] left-[67.56px] top-[44.48px] absolute"} Img2src={Kiosk} Img2alt={"kiosk"}
                        Img3Class={"ImageRemovebgPreview61 w-[72px] h-[92px] left-[80px] top-[57px] absolute"} Img3src={Smartphone} Img3alt={"smartphone"}
                        Img4Class={"Tv1 w-[99px] h-[84px] left-[49px] top-[57px] absolute"} Img4src={TV} Img4alt={"tv"}
                    />





                    <Link to="/asker/HelpS" >
                        <div className="ControlsButtons w-[327px] h-12 py-4 left-[17px] top-[715px] absolute bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
                            <div className="Text text-center text-white text-base font-bold leading-none">선택하기</div>
                        </div>
                    </Link>
                </Background>
            </div>

        </div>


    );
};





export default HelpB;
