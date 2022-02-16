import React, { useState } from 'react';

import { NewsWrapper, NewsTitle, NewsForm, NewsInput, InputWrapper } from './styles';

import Button from '../Button'
import axios from 'axios';

export default function News() {
    const [name, setName] = useState("");
    const [isNameValid, setIsNameValid] = useState(true);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);
    
    const warningNameMessage = "Preencha com seu nome completo";
    const warningEmailMessage = "Preencha com um e-mail válido";

    const handleNameChange = ((event) => {
        setName(event.target.value);
    })

    const handleEmailChange = ((event) => {
        setEmail(event.target.value);
    })

    const handleSubmit = ((event) => {
        event.preventDefault();
        const emailRegex = /\S+@\S+\.\S+/;
        if (!email.match(emailRegex) || (name === ""))  {
            if (name === "") setIsNameValid(false);
            if (!email.match(emailRegex)) setIsEmailValid(false);
            return
        }
        setIsNameValid(true);
        setIsEmailValid(true);

        axios.post('https://corebiz-test.herokuapp.com/api/v1/newsletter', {
            "email": email,
            "name": name
        })

    })

    return (
        <NewsWrapper>
            <NewsTitle>Participe de nossas news com promoções e novidades!</NewsTitle>
            <NewsForm onSubmit={handleSubmit}>
                <InputWrapper isValid={isNameValid} warningMessage={warningNameMessage}>
                    <NewsInput 
                        type="text" 
                        placeholder="Digite seu nome" 
                        value={name} 
                        onChange={handleNameChange}
                        isValid={isNameValid}
                    />
                </InputWrapper>
                <InputWrapper isValid={isEmailValid} warningMessage={warningEmailMessage}>
                    <NewsInput 
                        type="text"
                        placeholder="Digite seu email" 
                        value={email} 
                        onChange={handleEmailChange} 
                        isValid={isEmailValid}
                    />
                </InputWrapper>
                <Button label={"Eu quero!"} />
            </NewsForm>
        </NewsWrapper>
    )
}
