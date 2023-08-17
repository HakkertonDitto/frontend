import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Backarrow from "../assets/backarrow.png";

const Header = styled.header`
  width: 100%;
  height: 5rem;
  >img{
    padding: 1rem 0;
    height: 100%;
    cursor: pointer;
  }
`;

export default function HeaderBar() {
    const navigate = useNavigate();
    return (
        <Header>
            <img src={Backarrow} onClick={() => {
                navigate(-1)
            }} />
        </Header>
    );
}