import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Slider from "react-slick";

import { ShelfWrapper, ShelfTitle, LeftArrow, RightArrow } from './styles';

import Card from '../Card';

export default function Shelf() {
    const sliderSettings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <RightArrow />,
        prevArrow: <LeftArrow />
    };
  
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        axios({
            method: 'get',
            url: 'https://corebiz-test.herokuapp.com/api/v1/products'
        }).then((response) => {
            setProductList(response.data);
        }).catch((error) => {
            console.error("Erro ao acessar dados ", error);
        })
    }, [])

    return (
        <ShelfWrapper>
            <ShelfTitle>Mais vendidos</ShelfTitle>
            <Slider {...sliderSettings}>
                {productList.map(product => {
                    return <Card product={product} key={product.productId}/>
                })}
            </Slider>
        </ShelfWrapper>
    )
}
