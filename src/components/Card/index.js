import React, { useContext } from 'react';

import { CardWrapper, ProductInfo, ProductTitle, StarsWrapper, FormerPrice, CurrentPrice, InstallmentsOptions, OffFlag, OffLabel, ButtonWrapper } from './styles';

import filledStarIcon from '../../assets/img/filledStarIcon.svg'
import emptyStarIcon from '../../assets/img/emptyStarIcon.svg'

import { priceFormatter } from '../../utils/priceFormatter';
import QuantityContext from '../../contexts/QuantityContext';
import Button from '../Button';

export default function Card({product}) {
    const { productName, stars, imageUrl, price, listPrice, installments } = product;
    const [totalItems, setTotalItems] = useContext(QuantityContext);

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
                        [...Array(stars)].map((_, index) => {
                            return <img src={filledStarIcon} key={index}/>
                        })
                    }
                    {
                        (5 - stars) > 0 ?
                            [...Array(5 - stars)].map((_, index) => {
                                return <img src={emptyStarIcon} key={index}/>
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
                <ButtonWrapper onClick={() => setTotalItems(totalItems + 1)}>
                    <Button label={"COMPRAR"}/>
                </ButtonWrapper>
            </ProductInfo>
        </CardWrapper>
    )
}
