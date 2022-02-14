import React from 'react';

import { HeaderWrapper } from './styles';

import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/user.svg'
import shoppingCart from '../../assets/img/shoppingCart.svg'

export default function Header() {
  return (
    <HeaderWrapper>
        <img src={logo} alt="Logo coreBiz" />
        <input type={"text"} />
        <div>
            <img src={user} alt="Ícone de usuário" />
            Minha conta
        </div>
        <div>
            <img src={shoppingCart} alt="user" />
            0
        </div>
    </HeaderWrapper>
  )
}
