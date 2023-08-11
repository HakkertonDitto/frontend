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
    border-radius: 2.5rem;
    padding: 0.75rem 1rem;
    font-size: 1.1rem;
    font-weight: 700;
    cursor: pointer;
`;
