import { Link, useNavigate } from "react-router-dom";
import { Button, Title } from "../../components"
import Header from "../../components/Header"
import Background from "../../components/Background"
import Check from "../../assets/check.png";

const Ready = () => {
  const navigate = useNavigate();
  return (
    <Background style={{margin: "0 auto"}}>
      <Header />
      <Title
      style={{
        fontSize: "2rem",
        margin: "1.5rem auto",
      }}>연결이 준비되었습니다.</Title>
      <img
        src={Check} 
        style={{
          margin: "10vh",
          height: "25"
        }}
      />
      <Button>
        <Link to={"/#"}>연결하기</Link>
      </Button>
    </Background>
  );
};
export default Ready;
