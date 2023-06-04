import React from 'react'

import './card.scss'

const Card = ({title = '', subtitle = ''}) => {

    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}</div>
        </div>
    )
}

export default Card
