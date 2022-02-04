import React from 'react'

import If from './If'

export default function Condicional(props) {
    return (
        <div>
            <h2>O numero eh {props.numero}</h2>
            <If test={props.numero % 2 === 0}>
                <span>Par</span>
            </If>
            <If test={props.numero % 2 !== 0}>
                <span>Impar</span>
            </If>       
        </div>
    )
}