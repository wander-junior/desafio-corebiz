import styled from "styled-components";

export const OffFlag = styled.div`
    width: 0;
    height: 0;
    border-top: 72px solid ${({theme}) => theme.colors.red};
    border-left: 81px solid transparent;
    position: absolute;
    right: 0;
`;

export const OffLabel = styled.p`
    position: absolute;
    right: 8px;
    top: 12px;
    font-weight: 900;
    font-size: 1rem;
    color: #FFFFFF;
`;

export const ButtonWrapper = styled.div`
    opacity: 0;
    margin: 18px auto 0 auto;
`;

export const CardWrapper = styled.div`
    margin: 0 auto;
    max-width: 216px;
    position: relative;
    &:hover {
        background: ${({theme}) => theme.colors.gray};
    }

    &:hover ${ButtonWrapper} {
        opacity: 1;
    }
`;

export const ProductInfo = styled.div`
    padding: 7px 0 14px 0;
    display: flex;
    flex-direction: column;
`;

export const ProductTitle = styled.h3`
    text-align: center;
    font-size: 0.625rem;
    color: #7A7A7A;
    font-weight: 600;
`;

export const StarsWrapper = styled.div`
    display: flex;
    text-align: center;
    margin: 8px auto;
`;

export const FormerPrice = styled.p`
    font-size: 0.75rem;
    color: #7A7A7A;
    text-align: center;
    text-decoration: line-through;
    ${props => props.invisible ? "opacity: 0" : ""}
`;

export const CurrentPrice = styled.p`
    font-size: 1.125rem;
    font-weight: bold;
    text-align: center;
`;

export const InstallmentsOptions = styled.p`
    font-size: 0.6875rem;
    color: #7A7A7A;
    text-align: center;
`;

