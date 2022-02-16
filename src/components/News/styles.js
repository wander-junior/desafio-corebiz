import styled from "styled-components";

export const NewsWrapper = styled.section`
    background: ${({theme}) => theme.colors.lightGray};
    margin: 0 auto;
    padding: 24px 0 36px 0;
`;

export const NewsTitle = styled.h3`
    text-align: center;
    font-family: 'Lato', sans-serif;
    font-weight: bold;
    font-size: 1.375rem;
    margin-bottom: 16px;
`;

export const NewsForm = styled.form`
    margin: 0 auto;
    display: flex;
    justify-content: center;
    gap: 8px;
`;

export const NewsInput = styled.input`
    padding: 17px 16px;
    outline: none;
    border: ${props => props.isValid ? "none" : "1px solid #D7182A"};
    border-radius: 5px;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    width: 280px;

    ::placeholder {
        color: #585858;
        opacity: 1;
    }
    
    :-ms-input-placeholder {
        color: #585858;
    }
    
    ::-ms-input-placeholder {
        color: #585858;
    }
`;

export const InputWrapper = styled.div`
    position: relative;
    ${props => !props.isValid ? `
        &:after {
            content: "${props.warningMessage}";
            position: absolute;
            top: 60px;
            left: 0;
            color: #D7182A;
            font-size: 0.75rem;
            font-family: 'Lato', sans-serif;
        }
    ` : ""}
`;