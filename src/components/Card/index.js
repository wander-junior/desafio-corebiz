import React from 'react'

export default function Card({product}) {
    const { productName, stars, imageUrl, price, listPrice, installments } = product;
    console.log(product);

    return (
        <div>
            <img src={imageUrl} alt={productName}/>
            {productName}
            {stars}
            {listPrice !== null ? 
                <div>
                    De {listPrice}
                </div> 
            : ""}
            <div>por R$ {price}</div>
            {installments.length > 0 ? 
                <div>
                    ou em {installments[0].quantity} de R$ {installments[0].value}
                </div>
            : ""}
            <button>COMPRAR</button>
        </div>
    )
}
