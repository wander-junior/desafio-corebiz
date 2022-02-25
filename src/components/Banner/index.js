import React from 'react'

import { BannerWrapper, BannerInfo, BannerImg, BannerText, BannerTitle, BannerSubtitle, BannerMask } from './styles'

import bannerImage from '../../assets/img/bannerImage.png';
import bannerMask from '../../assets/img/bannerMask.png';

export default function Banner({isActive}) {
  return (
    <BannerWrapper isActive={isActive}>
        <BannerInfo>

            <BannerMask src={bannerMask}/>
            <BannerText>
              <BannerSubtitle>Olá, o que você está buscando?</BannerSubtitle>
              <BannerTitle>Criar ou migrar seu e&#8209;commerce?</BannerTitle>
            </BannerText>
        </BannerInfo>
        <BannerImg src={bannerImage}/>
    </BannerWrapper>
  )
}
