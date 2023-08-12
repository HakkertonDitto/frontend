import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import { Title, Button } from "../../components";
import styled from "styled-components";

const HelpDetail = () => {
  return (
    <Background>
      <Header />
      <ProgressBar progress={80} />
      <Title>직접 작성해주세요</Title>
      <TextArea placeholder="상세 설명을 입력해주세요" />
      <Button>작성 완료</Button>
    </Background>
  );
};

const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  margin-bottom: 3rem;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 1px solid #e5e5e5;
  outline: none;
  resize: none;
  font-size: 1.125rem;
`;

export default HelpDetail;
