import { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import DetailConfirmModal from "../../components/modal/DetailConfirmModal";
import { Title, Button } from "../../components";

const HelpDetail = () => {
  const [progress, setProgress] = useState(50);
  const [modalActive, setModalActive] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setModalActive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setModalActive(false);
  }

  const sendRequsetToServer = () => {

  }

  useEffect(() => {
    setProgress(75);
  }, [])
  
  return (
    <Background>
      <Header />
      <ProgressBar progress={progress} />
      <Title>직접 작성해주세요</Title>
      <TextArea placeholder="상세 설명을 입력해주세요" />
      <Button onClick={ openModal }>작성 완료</Button>
      <DetailConfirmModal active={ modalActive } onClickEdit={ closeModal }/>
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
