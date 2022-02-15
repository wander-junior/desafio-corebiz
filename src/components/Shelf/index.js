import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
        <div>
            {productList.map(product => {
                return <div>{product.productName}</div>
            })}
        </div>
    )
}
