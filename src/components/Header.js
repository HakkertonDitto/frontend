import Backarrow from "../assets/backarrow.png";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem;
  >img{
    height: 100%;
    cursor: pointer;
  }
`;

export default function HeaderBar() {
    const navigate = useNavigate();
    return (
        <Header>
            <img src={Backarrow} alt="backarrow" onClick={() => {
                navigate(-1)
            }} />
        </Header>
    );
}