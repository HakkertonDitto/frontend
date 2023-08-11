import styled from "styled-components";

const Container = styled.div`
    margin: 0 auto;
    width: 75%;
    height: 5px;
    background-color: #e0e0de;
    border-radius: 5px;
    flex-shrink: 0;
`;

const Progress = styled.div`
    width: ${props => props.progress}%;
    height: 100%;
    background-color: var(--main-color);
    border-radius: 5px;
    transition: width 0.5s ease-in-out;
`;

export default function ProgressBar({progress}) {
    return (
        <Container>
            <Progress progress={progress} />
        </Container>
    )
}
