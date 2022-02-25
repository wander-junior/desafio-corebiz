import React from 'react'

import emailIcon from '../../assets/img/emailIcon.svg'
import phoneIcon from '../../assets/img/phoneIcon.svg'
import logo from '../../assets/img/logo.svg'
import vtexLogo from '../../assets/img/vtexLogo.svg'

import { FooterWrapper, FooterContainer, LogoContainer, CoreBizLogo, LocationTitle, LocationInfo } from './styles'

export default function Footer() {
  return (
    <FooterWrapper>
        <FooterContainer>
            <div>
                <LocationTitle>Localização</LocationTitle>
                <LocationInfo>Avenida Andrômeda, 2000. Bloco 6 e 8</LocationInfo>
                <LocationInfo>Alphavile SP</LocationInfo>
                <LocationInfo>brasil@corebiz.ag</LocationInfo>
                <LocationInfo>+55 11 3090 1039</LocationInfo>
            </div>
            <div>
                <div>
                    <img src={emailIcon} alt={"Ícone de email"} />
                    <p>ENTRE EM CONTATO</p>
                </div>
                <div>
                    <img src={phoneIcon} alt={"Ícone de fone"} />
                    <p>FALE COM O NOSSO CONSULTOR ONLINE </p>
                </div>
            </div>
            <LogoContainer>
                <CoreBizLogo>
                    <p>Created by</p>
                    <img src={logo} alt={"Logo CoreBiz"} />                
                </CoreBizLogo>
                <img src={vtexLogo} alt={"Logo VTex"} />
            </LogoContainer>
        </FooterContainer>

    </FooterWrapper>
  )
}