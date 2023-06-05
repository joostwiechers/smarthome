import './card.scss'

import React from 'react'

/**
 * A generic card with a title and a subtitle.
 * @param title
 * @param subtitle
 * @returns {JSX.Element}
 * @constructor
 */
const Card = ({title = '', subtitle = ''}) => {

    return (
        <div className="card">
            <div className="card__title">{title}</div>
            <div className="card__subtitle">{subtitle}</div>
        </div>
    )
}

export default Card
