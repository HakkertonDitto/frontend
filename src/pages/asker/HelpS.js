
import Header from "../../components/Header";
import { Link } from "react-router-dom";

import ProgressBar from "../../components/ProgressBar";
import { Title } from "../../components";

import Card from "../../components/Card";
import Software from "../../assets/software.png";
import Internet from "../../assets/internet.png";
import Onoff from "../../assets/onoff.png";
import Magnifier from "../../assets/magnifier.png";


import Background from "../../components/Background";

const HelpS = () => {

    
    return (
        <div className="flex justify-center relative">

        <div className="AskerHelpb w-[360px] h-[800px] relative bg-white ">
            {/* 그라데이션 */}
            <Background style={{ margin: "0 auto" }}>

                {/* 상단 하얀 덩어리 구역 */}
                <div className=" w-[360px] h-[148px] left-0 top-0 absolute bg-white">


                    <Header />
                    <ProgressBar progress={40} />
                    <Title>어느 점이 불편하세요?</Title>
                </div>


                <Card Card11={"소프트웨어"} Card12={"설치 및 삭제"} Card21={"인터넷 연결"} Card31={"전원 문제"} Card41={"기타"}Card42={"문의 사항"} 
                Img1Class={"ImageRemovebgPreview81 w-[170px] h-[101px] left-[20px] top-[53px] absolute"} Img1src={Software} Img1alt={"software"}
                    Img2Class={"ImageRemovebgPreview91 w-[79px] h-[76px] left-[55px] top-[62px] absolute"} Img2src={Internet} Img2alt={"internet"}
                    Img3Class={"ImageRemovebgPreview101 w-[70px] h-[66px] left-[70px] top-[67px] absolute"} Img3src={Onoff} Img3alt={"onoff"}
                    Img4Class={"ImageRemovebgPreview111 w-[90px] h-[75px] left-[56px] top-[68px] absolute"} Img4src={Magnifier} Img4alt={"magnifier"}
                    />





                <Link to="/asker/HelpDetail" >
                    <div className="ControlsButtons w-[327px] h-12 py-4 left-[17px] top-[715px] absolute bg-emerald-400 rounded-[48px] shadow justify-center items-center inline-flex">
                        <div className="Text text-center text-white text-base font-bold leading-none">선택하기</div>
                    </div>
                </Link>
            </Background>
        </div>

    </div>


    )
}
export default HelpS;