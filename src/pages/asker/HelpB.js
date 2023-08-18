import { Link } from "react-router-dom";
import { Title, Button } from "../../components";
import { useState, useEffect } from "react";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import Card from "../../components/Card";

import Building from "../../assets/building.png";
import Hospital from "../../assets/hospital.png";
import Tickets from "../../assets/tickets.png";
import Restaurant from "../../assets/restaurant.png";

const HelpB = () => {
    const [progress, setProgress] = useState(0);
    const cardContents = [
        {
            title: "은행 및 관공서",
            imgSrc: Building
        },
        {
            title: "병원",
            imgSrc: Hospital
        },
        {
            title: "티켓 (영화, 공원 등)",
            imgSrc: Tickets
        },
        {
            title: "식당/카페",
            imgSrc: Restaurant
        }
    ]

    const [selectedCardIndex,setSelectedCardIndex] = useState(null);

    const handleCardClick = (index) => () => {
        setSelectedCardIndex(index);
    };
    
    useEffect(() => {
        setProgress(33);
    }, []);

  
    return (
        <Background style={{ margin: "0 auto" }}>
            <Header />
            <ProgressBar progress={progress} />
            <Title>어떤 것을 도와드릴까요?</Title>
            <Card 
                contents={cardContents} 
                selectedCardIndex={selectedCardIndex} 
                handleCardClick={handleCardClick} />
            <Button>
                <Link to="/asker/HelpDetail" style={{ display: "block", width: "100%", height: "100%" }}>선택하기</Link>
            </Button>
        </Background>
    );
};

export default HelpB;
