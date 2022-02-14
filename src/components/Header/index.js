import React from 'react';

import { HeaderWrapper, LogoHeader, SearchForm, SearchBar, SearchButton, UserAccount, MiniCart, ItemQuantity } from './styles';

import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/user.svg'
import shoppingCart from '../../assets/img/shoppingCart.svg'
import searchIcon from '../../assets/img/searchIcon.svg'

export default function Header() {
    const handleSubmit = ((event) => event.preventDefault());

    return (
        <HeaderWrapper>
            <LogoHeader src={logo} alt="Logo coreBiz" />
            <SearchForm onSubmit={handleSubmit}>
                <SearchBar placeholder="O que está procurando?" type={"text"} />
                <SearchButton type="submit">
                    <img src={searchIcon} alt="Ícone de lupa para pesquisa" />
                </SearchButton>
            </SearchForm>
            <UserAccount>
                <img src={user} alt="Ícone de usuário"  />
                Minha conta
            </UserAccount>
            <MiniCart>
                <img src={shoppingCart} alt="user" />
                <ItemQuantity>0</ItemQuantity>
            </MiniCart>
        </HeaderWrapper>
    )
}
