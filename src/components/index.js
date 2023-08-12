import styled from 'styled-components';

export const Title = styled.h1`
    font-size: 1.75rem;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
    margin-top: 0.5rem;
`;

export const Button = styled.button`
    background-color: var(--main-color);
    width: ${({ width }) => width || '90%'};
    color: #fff;
    border: none;
    margin-bottom: 1rem;
    padding: ${({paddingHeight=1.5}) => paddingHeight/2}rem 1rem;
    border-radius: ${({paddingHeight=1.5}) => 1.1+paddingHeight}rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
`;
