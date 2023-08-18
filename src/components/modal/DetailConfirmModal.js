
import styled from "styled-components";
import { Title, Button } from "../../components";
import axios from "axios";


export default ({ active, onClickEdit, ischanged,selectedTitle}) => { 

 
  const onClickDone = () => {
    axios
      .post("http://localhost:8080/asker", {
        category: selectedTitle,
        detail: ischanged,
      })
      .then(function (response) {
        console.log(response);
      });
  };

  return (
    <ModalBackground active={active} >
      <Modal>
        <Title
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "900",
          }}
        >
          입력 내용 확인
        </Title>
        <Catagory>{selectedTitle}</Catagory>
        <SubTitle>상세 내용</SubTitle>
        <Detail style={{ margin: "0 auto" }}>{ischanged}</Detail>
        <Button
          paddingHeight={1}
          style={{
            margin: "1rem auto 0 auto",
            fontSize: "1rem",
          }}
          onClick={onClickEdit}
        >
          수정하기
        </Button>
        <Button
          paddingHeight={1}
          style={{
            margin: "0.5rem auto",
            backgroundColor: "#FFF",
            color: "var(--main-color)",
            border: "2px solid var(--main-color)",
            boxSizing: "border-box",
            fontSize: "1rem",
          }}
          onClick={onClickDone}
        >
          완료하기
        </Button>
      </Modal>
    </ModalBackground>
  );
};

const ModalBackground = styled.div`
  display: ${({ active }) => (active ? "flex" : "none")};
  width: 100vw;
  height: 100vh;
  background-color: #00000088;
  position: absolute;
  justify-content: center;
  align-itmes: center;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  align-item: center;
  width: 70vw;
  height: 75vh;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;
`;

const Catagory = styled.div`
  border: 1px solid #000;
  border-radius: 2rem;
  text-align: center;
  padding: 0.5rem;
  font-size: 0.8rem;
  margin: 0 auto 1rem auto;
  width: 75%;
`;

const SubTitle = styled.div`
  font-size: 1rem;
  margin: 0 0 0.5rem 1rem;
`;

const Detail = styled.div`
  padding: 1rem;
  border: 1px solid #ccc;
  width: 90%;
  height: 65%;
  border-radius: 1rem;
`;
