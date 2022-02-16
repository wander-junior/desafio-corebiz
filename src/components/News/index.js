import React from 'react';

import { NewsWrapper, NewsTitle, NewsForm, NewsInput } from './styles';

import Button from '../Button'

export default function News() {
  return (
    <NewsWrapper>
        <NewsTitle>Participe de nossas news com promoções e novidades!</NewsTitle>
        <NewsForm>
            <NewsInput type="text" placeholder="Digite seu nome" />
            <NewsInput type="email" placeholder="Digite seu email" />
            <Button label={"Eu quero!"} />
        </NewsForm>
    </NewsWrapper>
  )
}
