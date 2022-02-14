import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 1238px;
    display: flex;
    margin: 0 auto;
    align-items: center;

    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        width: 100%;
        padding: 0 20px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 7px;
    }
`;

export const MobileMenu = styled.img`
    display: none;
    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        order: 1;
        display: block
    }
`;

export const LogoHeader = styled.div`
    padding: 16px 132px 24px 0;

    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        padding: 0;
        order: 2;
        
        img {
            width: 102px;
        }
    }
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 718px;
    margin-right: 44px;

    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        width: 100%;
        margin-right: 0;
        order: 4;
        margin-top: 7px;
    }
`;

export const SearchBar = styled.input`
    outline: none;
    border-width: 0 0 1px 0;
    border-color: #7A7A7A;
    width: 100%;
    height: 28px;
    font-family: '${({theme}) => theme.fonts[0]}';
    font-size: 0.8125rem;
    padding-right: 22px;

    ::placeholder {
        color: #7A7A7A;
        opacity: 1;
    }
    
    :-ms-input-placeholder {
        color: #7A7A7A;
    }
    
    ::-ms-input-placeholder {
        color: #7A7A7A;
    }
`;

export const SearchButton = styled.button`
    background: transparent;
    border: none;
    outline: none;
    margin-left: -18px;
    cursor: pointer;
`;

export const UserAccount = styled.div`
    font-size: 0.8125rem;
    color: #7A7A7A;
    display: flex;
    margin-right: 21px;

    img {
        margin-right: 5px;
    }

    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        display: none;
    }
`;

export const MiniCart = styled.div`
    display: flex;
    align-items: center;

    @media only screen and (max-width: ${({theme}) => theme.mediaBreakPoints.desktop}) {
        order: 3;
    }
`;

export const ItemQuantity = styled.div`
    font-size: 0.625rem;
    font-weight: bold;
    color: #ffffff;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #F8475F;
    text-align: center;
    margin-left: 5px;

`;