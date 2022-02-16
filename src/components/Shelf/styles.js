import styled from "styled-components";

import arrow from '../../assets/img/arrow.png';

export const ShelfWrapper = styled.section`
    max-width: 1238px;
    height: fit-content;
    margin: 25px auto 69px auto;
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

export const LeftArrow = styled.div`
    width: 14px;
    height: 22px;
    background-image: url(${arrow});
    &:hover {
        background-image: url(${arrow});
    }
    &:before {
        content: "";
    }
`;


export const RightArrow = styled.div`
    width: 14px;
    height: 22px;
    background-image: url(${arrow});
    transform: rotate(180deg);
    &:hover {
        background-image: url(${arrow});        
    }
    &:before {
        content: "";
    }
`;