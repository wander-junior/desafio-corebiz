import React from 'react';

import { CardWrapper, ProductInfo, ProductTitle, StarsWrapper, FormerPrice, CurrentPrice, InstallmentsOptions, BuyButton, OffFlag, OffLabel } from './styles';

import filledStarIcon from '../../assets/img/filledStarIcon.svg'
import emptyStarIcon from '../../assets/img/emptyStarIcon.svg'

import { priceFormatter } from '../../utils/priceFormatter';

export default function Card({product}) {
    const { productName, stars, imageUrl, price, listPrice, installments } = product;

    return (
        <CardWrapper>
            {
                listPrice !== null ?
                    <>
                        <OffFlag />
                        <OffLabel>
                            OFF
                        </OffLabel>
                    </>
                : ""
            }
            <img src={imageUrl} alt={productName}/>
            <ProductInfo>
                <ProductTitle>{productName}</ProductTitle>
                <StarsWrapper>
                    {
                        [...Array(stars)].map(() => {
                            return <img src={filledStarIcon}/>
                        })
                    }
                    {
                        (5 - stars) > 0 ?
                            [...Array(5 - stars)].map(() => {
                                return <img src={emptyStarIcon}/>
                            })
                        : ""
                    }
                </StarsWrapper>
                {listPrice !== null ? 
                    <FormerPrice>
                        De {priceFormatter(listPrice)}
                    </FormerPrice> 
                : 
                    <FormerPrice invisible>
                        -
                    </FormerPrice>
                }
                <CurrentPrice>por {priceFormatter(price)}</CurrentPrice>
                {installments.length > 0 ? 
                    <InstallmentsOptions>
                        ou em {installments[0].quantity} de {priceFormatter(installments[0].value)}
                    </InstallmentsOptions>
                : ""}
                <BuyButton>COMPRAR</BuyButton>
            </ProductInfo>
        </CardWrapper>
    )
}
