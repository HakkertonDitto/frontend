import { useState } from "react";
import styled from "styled-components";

export default ({contents}) => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
      setSelectedCardIndex(index);
  };

  return (
      <CardWrapper>
          {contents.map((item, index) => (
              <Card
                  key={index}
                  img={item.imgSrc}
                  isSelected={selectedCardIndex === index}
                  onClick={() => handleCardClick(index)}
              >
                  <span>{item.title}</span>
              </Card>
          ))}
      </CardWrapper>
  );
}
const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 1fr;
  
  width: 80%;
  grid-gap: 10px;
  margin-bottom: 1rem;
  min-height: 300px;
`

const Card = styled.div`
  border: 2px solid #E5E5E5;
  border-radius: 10px;
  padding: 0.75rem;
  background-color: ${({ isSelected }) => (isSelected ? "#B6F6B5" : "white")};
  background-image: url("${({img})=>img}");
  background-repeat: no-repeat;
  background-position: bottom 5px right 5px;
  background-size: 50%;
  >span{
    font-size: 1.25rem;
    font-weight: bold;
    word-break: keep-all;
  }
`