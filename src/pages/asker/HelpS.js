import { Link } from "react-router-dom";
import { Title, Button } from "../../components";
import { useState, useEffect } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import Card from "../../components/Card";
import Software from "../../assets/software.png";
import Internet from "../../assets/internet.png";
import Onoff from "../../assets/onoff.png";
import Magnifier from "../../assets/magnifier.png";

const HelpS = () => {
    const [progress, setProgress] = useState(25);
    const cardContents = [
        {
            title: "소프트웨어 설치 및 삭제",
            imgSrc: Software
        },
        {
            title: "인터넷 연결",
            imgSrc: Internet
        },
        {
            title: "전원 문제",
            imgSrc: Onoff
        },
        {
            title: "기타 문의 사항",
            imgSrc: Magnifier
        }
    ]
    useEffect(() => {
        setProgress(50);
    }, [])

    return (
        <Background style={{ margin: "0 auto" }}>
            <Header />
            <ProgressBar progress={progress} />
            <Title>어떤 것을 도와드릴까요?</Title>
                <Card contents={cardContents} />
                <Button>
                    <Link to="/asker/HelpDetail" style={{display: "block", width: "100%", height: "100%"}}>선택하기</Link>
                </Button>
        </Background>
    );
}
export default HelpS;