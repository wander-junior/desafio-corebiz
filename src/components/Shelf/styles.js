import styled from "styled-components";

export const ShelfWrapper = styled.section`
    max-width: 1238px;
    margin: 0 auto;
`;

export const ShelfTitle = styled.h2`
    font-weight: 900;
    margin-bottom: 20px;

    &::after {
        display: block;
        content: "";
        height: 4px;
        width: 65px;
        background: ${({theme}) => theme.colors.darkGray}
    }
`;