import React, { useContext } from 'react';
import { Link } from "react-router-dom";

import { HeaderWrapper, LogoHeader, SearchForm, SearchBar, SearchButton, UserAccount, MiniCart, ItemQuantity, MobileMenu } from './styles';

import logo from '../../assets/img/logo.svg'
import user from '../../assets/img/user.svg'
import shoppingCart from '../../assets/img/shoppingCart.svg'
import searchIcon from '../../assets/img/searchIcon.svg'
import mobileMenuIcon from '../../assets/img/mobileMenuIcon.svg'

import QuantityContext from '../../contexts/QuantityContext';

export default function Header() {
    const [totalItems] = useContext(QuantityContext);

    const handleSubmit = ((event) => event.preventDefault());

    return (
        <HeaderWrapper>
            <MobileMenu src={mobileMenuIcon} logo="Menu"/>
            <LogoHeader >
                <Link to="/">
                    <img src={logo} alt="Logo coreBiz" />
                </Link>
            </LogoHeader>
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
                <ItemQuantity>{totalItems}</ItemQuantity>
            </MiniCart>
        </HeaderWrapper>
    )
}
