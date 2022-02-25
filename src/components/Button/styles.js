import styled from 'styled-components';

export const ButtonStyle = styled.button`
    background: #000000;
    color: #FFFFFF;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    padding: 8px 27px;
    width: fit-content;

    &:disabled {
        background-color: #333333;
    }
`;