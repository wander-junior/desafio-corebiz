import styled from "styled-components";

export const HeaderWrapper = styled.header`
    width: 1238px;
    display: flex;
    margin: 0 auto;
    align-items: center;
`;

export const LogoHeader = styled.img`
    margin: 16px 132px 24px 0;
`;

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    width: 718px;
    margin-right: 44px;
`;

export const SearchBar = styled.input`
    outline: none;
    border-width: 0 0 1px 0;
    border-color: #7A7A7A;
    width: 100%;
    height: 28px;
    font-family: '${({theme}) => theme.fonts[0]}';
    font-size: 0.8125rem;

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
`;

export const MiniCart = styled.div`
    display: flex;
    align-items: center;
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