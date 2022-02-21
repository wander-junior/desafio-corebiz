import styled from "styled-components";
import bannerMask from "../../assets/img/bannerMask.png";

export const BannerWrapper = styled.div`
    position: relative;
    display: flex;
    width: 100%;
`;

export const BannerInfo = styled.div`
    z-index: 2;
    position: relative;
    width: 52%;
`;

export const BannerMask = styled.img`
    width: 100%;
`;

export const BannerImg = styled.img`
    position: absolute;
    right: 0;
    height: 100%;
`;

export const BannerText = styled.div`
    position: absolute;
    bottom: 30%;
    left: 24%;
`;

export const BannerTitle = styled.div`
    color: #FFFFFF;
    font-size: 2.8125rem;
    line-height: 2.5rem;
    font-weight: 900;

`;

export const BannerSubtitle = styled.div`
    color: #FFFFFF;
    font-size: 1.875rem;
    line-height: 1.875rem;
    font-weight: 700;
    margin-bottom: 12px;
`;