import { Link } from "react-router-dom";
import { Title, Button } from "../../components";
import { useState, useEffect } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import Card from "../../components/Card";
import Smartphone from "../../assets/smartphone.png";
import Laptop from "../../assets/laptop.png";
import Kiosk from "../../assets/kiosk.png";
import TV from "../../assets/TV.png";

const HelpB = () => {
    const [progress, setProgress] = useState(0);
    const cardContents = [
        {
            title: "컴퓨터 및 노트북",
            imgSrc: Laptop
        },
        {
            title: "키오스크",
            imgSrc: Kiosk
        },
        {
            title: "스마트폰 및 태블릿",
            imgSrc: Smartphone
        },
        {
            title: "스마트TV",
            imgSrc: TV
        }
    ]

    useEffect(() => {
        setProgress(25);
    }, [])

    return (
        <Background style={{ margin: "0 auto" }}>
            <Header />
            <ProgressBar progress={progress} />
            <Title>어떤 것을 도와드릴까요?</Title>
                <Card contents={ cardContents } />
                <Button>
                    <Link to="/asker/HelpS" style={{display: "block", width: "100%", height: "100%"}}>선택하기</Link>
                </Button>
        </Background>
    );
};





export default HelpB;
