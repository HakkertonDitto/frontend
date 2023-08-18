import { useState } from "react";
import styled from "styled-components";


export default ({contents,selected,setSelected}) => {
  
  const handleCardClick = (index) => {
    if(selected === index)setSelected(-1);
    else setSelected(index);
  };

  return (
    <CardWrapper col={Math.round(contents.length/2)}>
      {contents.map((item, index) => (
        <Card
          key={index}
          img={item.imgSrc}
          isSelected={selected === index}
          onClick={() => handleCardClick(index)}
        >
          <span>{item.title}</span>
        </Card >
      ))}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: ${({col})=>(new Array(col)).fill(0).map(()=>"1fr").join(" ")};
  grid-auto-rows: 1fr;
  width: 80%;
  grid-gap: 10px;
  margin-bottom: 1rem;
  min-height: 17.5rem;
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