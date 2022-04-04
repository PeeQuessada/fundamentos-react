import React from 'react'
import Filho from './Filho'

export default function Pai(props) {
    return (
        <div>
            <Filho {...props}>Joao</Filho>
            <Filho sobrenome={props.sobrenome}>Maria</Filho>
            <Filho sobrenome="Silva">Pedro</Filho>
        </div>
    )
}