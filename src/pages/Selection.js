import { useNavigate } from 'react-router-dom';
import { Title } from "../components"
import Background from "../components/Background";
import Beneficiary from "../assets/beneficiary.png";
import Requirement from "../assets/requirement.png";
import styled from "styled-components"

const Selection = () => {
  const navigate = useNavigate();

  const SelectionContents = [
    {
      title: "기술 도움 요청하기",
      imgSrc: Requirement
    },
    {
      title: "기술 도움 드리기",
      imgSrc: Beneficiary
    }
  ]

  return (
    <Background style={{ margin: "0 auto" }}>
      <Title
        style={{
          margin: "2rem 0",
          fontSize: "1.5rem"
        }}>원하시는 서비스를 선택해주세요.</Title>
      
        <Card
          img={ SelectionContents[0].imgSrc }
          onClick={ () => navigate("/asker/HelpB") }>
          <span>{ SelectionContents[0].title }</span>
        </Card>
        
        <Card
          img={ SelectionContents[1].imgSrc }
          onClick={ () => navigate("/donor/Login") }>
          <span>{ SelectionContents[1].title }</span>
        </Card>
      
    </Background>
  );
};

export default Selection;

const Card = styled.div`
  width: 70%;
  height: 35%;
  margin-bottom: 2rem;
  border: 3px solid var(--main-color);
  border-radius: 2rem;
  padding: 1.25rem;
  background-color: white;
  background-image: url("${({img})=>img}");
  background-repeat: no-repeat;
  background-position: bottom 0.75rem right 0.75rem;
  background-size: 50%;
  >span{
    font-size: 1.5rem;
    font-weight: bold;
    word-break: keep-all;
  }
`