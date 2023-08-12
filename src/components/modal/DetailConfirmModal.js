import styled from "styled-components"
import { Title, Button } from "../../components";

const ModalBackground = styled.div`
    display: ${({active}) => active ? "flex" : "none"};
    width: 100vw;
    height: 100vh;
    background-color: #00000088;
    position: absolute;
    justify-content: center;
    align-itmes: center;
`
const Modal = styled.div`
    display: flex;
    flex-direction: column;
    align-item: center;
    width: 75vw;
    height: 75vh;
    background-color: #FFFFFF;
    border-radius: 1rem;
`

export default ({ active, onClickEdit, onClickDone }) => {
    return (
        <ModalBackground active={ active }>
            <Modal>
                <Title>입력 내용 확인</Title>
                <Button style={{margin: "0 auto"}} onClick={ onClickEdit }>수정하기</Button>
                <Button style={{
                    margin: "0 auto",
                    backgroundColor: "#FFF",
                    color: "var(--main-color)",
                    border: "2px solid var(--main-color)"
                }} onClick={ onClickDone }>완료하기</Button>
            </Modal>
        </ModalBackground>
    )
}