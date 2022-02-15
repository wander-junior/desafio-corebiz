import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ShelfWrapper, ShelfTitle } from './styles';

import Card from '../Card';

export default function Shelf() {
    const [productList, setProductList] = useState([])

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
            {productList.map(product => {
                return <Card product={product} />
            })}
        </ShelfWrapper>
    )
}
