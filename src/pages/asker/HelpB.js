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
  const [selected, setSelected] = useState(-1);
  const [progress, setProgress] = useState(0);
  const cardContents = [
    {
      title: "은행 및 관공서",
      imgSrc: Building,
      id: "BANK_PUBLIC_OFFICE",
    },
    {
      title: "병원",
      imgSrc: Hospital,
      id: "HOSPITAL",
    },
    {
      title: "티켓 (영화, 공원 등)",
      imgSrc: Tickets,
      id: "TICKETS",
    },
    {
      title: "식당/카페",
      imgSrc: Restaurant,
      id: "RESTAURANT_CAFE",
    },
  ];

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
        selected={selected}
        setSelected={setSelected}
      />
      {selected !== -1 && (
        <Button>
          <Link
            to="/asker/HelpDetail"
            style={{ display: "block", width: "100%", height: "100%" }}
            state={{ selectedTitle: cardContents[selected].id }}
          >
            선택하기
          </Link>
        </Button>
      )}
    </Background>
  );
};

export default HelpB;
