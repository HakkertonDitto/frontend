import { useState, useEffect } from "react";
import styled from "styled-components";
import Background from "../../components/Background";
import Header from "../../components/Header";
import ProgressBar from "../../components/ProgressBar";
import DetailConfirmModal from "../../components/modal/DetailConfirmModal";
import { Title, Button } from "../../components";
import axios from "axios";

const HelpDetail = () => {
  const [progress, setProgress] = useState(50);
  const [modalActive, setModalActive] = useState(false);
  const openModal = (e) => {
    e.preventDefault();
    setModalActive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setModalActive(false);
  };

  // 카테고리 어느 변수에 저장되어 있는지 몰라서 임의로 생성
  function getRandomCategory() {
    const categories = [
      "bank_publicoffice",
      "hospital",
      "ticketing",
      "restaurant_cafe",
    ];
    const randomIndex = Math.floor(Math.random() * categories.length);
    return categories[randomIndex];
  }

  const randomCategory = getRandomCategory();

  const sendRequsetToServer = () => {
    axios
      .post("http://localhost:8080/asker", {
        category: randomCategory,
        detail: "test",
      })
      .then(function (response) {
        console.log(response);
      });
  };

  const [isChanged, setIsChanged] = useState("");

  const textSet = (event) => {
    setIsChanged(event.target.value);
  };

  useEffect(() => {
    setProgress(75);
  }, []);

  return (
    <Background>
      <Header />
      <ProgressBar progress={progress} />
      <Title>직접 작성해주세요</Title>
      <TextArea placeholder="상세 설명을 입력해주세요" onChange={textSet} />
      <Button onClick={openModal}>작성 완료</Button>
      <DetailConfirmModal
        active={modalActive}
        onClickEdit={closeModal}
        ischanged={isChanged}
        onClickDone={sendRequsetToServer}
      />
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
