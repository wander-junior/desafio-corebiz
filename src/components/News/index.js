import React, { useState } from 'react';

import { NewsWrapper, NewsTitle, NewsForm, NewsInput } from './styles';

import Button from '../Button'

export default function News() {
    const [name, setName] = useState("");
    const [isNameValid, setIsNameValid] = useState(true);
    const [email, setEmail] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(true);

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
        setIsEmailValid(true)
    })

    return (
        <NewsWrapper>
            <NewsTitle>Participe de nossas news com promoções e novidades!</NewsTitle>
            <NewsForm onSubmit={handleSubmit}>
                <NewsInput type="text" placeholder="Digite seu nome" value={name} onChange={handleNameChange} isValid={isNameValid}/>
                <NewsInput type="text" placeholder="Digite seu email" value={email} onChange={handleEmailChange} isValid={isEmailValid}/>
                <Button label={"Eu quero!"} />
            </NewsForm>
        </NewsWrapper>
    )
}
