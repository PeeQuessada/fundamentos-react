import React from 'react'

import produtos from '../data/produtcts'

export default function Repeticao(props) {

    function getProductsListItem() {
        return produtos.map(produto => {
            return <li key={produto.id}>
                {produto.id} - {produto.nome} - R$ {produto.preco}
            </li>
        }) 
    }

    return (
        <div>
            <h2>Repeticao</h2>
            <ul>
                {getProductsListItem()}
            </ul>
        </div>
    )
}