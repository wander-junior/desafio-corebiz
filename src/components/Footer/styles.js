import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background: black;
    color: white;
`;

export const FooterContainer = styled.div`
    max-width: 1238px;
    margin: 0 auto;
    display: flex;
    padding: 25px 0;
`;

export const LogoContainer = styled.div`
    display: flex;
    margin-left: auto;

    img {
        width: 35px;
    }
`;

export const CoreBizLogo = styled.div`
    img {
        height: 18px;
    }
`;

export const LocationTitle = styled.h4`
    font-weight: 700;
    font-size: 1.25rem;

    &::after {
        margin: 20px 0;
        display: block;
        content: "";
        height: 4px;
        width: 45px;
        background: #FFFFFF;
    }
`;

export const LocationInfo = styled.p`
    font-size: 0.8125rem;
`;