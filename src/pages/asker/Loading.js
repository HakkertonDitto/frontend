import { Title } from "../../components"
import Call from "../../assets/call.png";
import Header from "../../components/Header";
import Background from "../../components/Background";

const Loading = () => {
  return (
    <Background style={{ margin: "0 auto" }}>
      <Header />
      <Title
      style={{
        fontSize: "2rem",
        margin: "1.5rem auto"
      }}>접수가 완료되었습니다!</Title>
      <img src={Call} />
      <Title
        style={{
          fontSize: "1.75rem",
          margin: "1.5rem auto",
          padding: "1rem",
          wordBreak: "keep-all"
        }}>봉사자가 연결될 때까지 잠시만 기다려주십시오.</Title>
   </Background>
  );
};

export default Loading;
