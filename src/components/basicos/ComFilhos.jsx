import React from 'react'

export default function ComFIlhos(props) {
    return(
        <div>
            <h2>Os filhos: </h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}